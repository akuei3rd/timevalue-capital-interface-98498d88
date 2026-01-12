import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  RefreshCw,
  LogOut,
  User,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Application = Tables<"applications">;

const statusConfig = {
  pending: { icon: Clock, color: "text-yellow-600", bg: "bg-yellow-100", label: "Pending" },
  under_review: { icon: RefreshCw, color: "text-blue-600", bg: "bg-blue-100", label: "Under Review" },
  approved: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-100", label: "Approved" },
  rejected: { icon: XCircle, color: "text-red-600", bg: "bg-red-100", label: "Rejected" },
  disbursed: { icon: CheckCircle, color: "text-primary", bg: "bg-primary/10", label: "Disbursed" },
  completed: { icon: CheckCircle, color: "text-green-700", bg: "bg-green-200", label: "Completed" },
};

export default function Dashboard() {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchApplications();
    }
  }, [user]);

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setApplications(data);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (authLoading || loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <RefreshCw className="w-8 h-8 text-primary animate-spin" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-background via-cyan-light/10 to-background">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="font-serif text-3xl font-bold text-foreground">
                  My Dashboard
                </h1>
                <p className="font-sans text-muted-foreground">
                  Welcome back, {user?.user_metadata?.full_name || user?.email}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="heroOutline" asChild>
                  <Link to="/apply">
                    New Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-2xl font-bold text-foreground">
                      {applications.length}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      Total Applications
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-sans text-2xl font-bold text-foreground">
                      {applications.filter((a) => a.status === "pending").length}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">Pending</p>
                  </div>
                </div>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-sans text-2xl font-bold text-foreground">
                      {applications.filter((a) => a.status === "under_review").length}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">Under Review</p>
                  </div>
                </div>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-sans text-2xl font-bold text-foreground">
                      {applications.filter((a) => a.status === "approved" || a.status === "disbursed").length}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">Approved</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications List */}
            <div className="card-elevated p-6">
              <h2 className="font-serif text-xl font-bold text-foreground mb-6">
                My Applications
              </h2>

              {applications.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    No Applications Yet
                  </h3>
                  <p className="font-sans text-muted-foreground mb-6">
                    Start your first capital request today.
                  </p>
                  <Button variant="hero" asChild>
                    <Link to="/apply">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Reference
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Type
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Amount
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map((app) => {
                        const status = statusConfig[app.status];
                        return (
                          <tr key={app.id} className="border-b border-border/50 hover:bg-muted/30">
                            <td className="py-4 px-4 font-sans text-sm font-medium text-foreground">
                              {app.reference_number}
                            </td>
                            <td className="py-4 px-4 font-sans text-sm text-muted-foreground capitalize">
                              {app.applicant_type}
                            </td>
                            <td className="py-4 px-4 font-sans text-sm text-foreground">
                              ${Number(app.amount_requested).toLocaleString()}
                            </td>
                            <td className="py-4 px-4">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                                <status.icon className="w-3 h-3" />
                                {status.label}
                              </span>
                            </td>
                            <td className="py-4 px-4 font-sans text-sm text-muted-foreground">
                              {new Date(app.created_at).toLocaleDateString()}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
