import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  LogOut,
  Users,
  DollarSign,
  TrendingUp,
  Eye,
  Edit,
  Search,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
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

const statusOptions = ["pending", "under_review", "approved", "rejected", "disbursed", "completed"] as const;

export default function AdminDashboard() {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        navigate("/auth");
      } else if (!isAdmin) {
        toast.error("Access denied. Admin privileges required.");
        navigate("/dashboard");
      }
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchApplications();
    }
  }, [isAdmin]);

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setApplications(data);
    }
    setLoading(false);
  };

  const updateApplicationStatus = async (id: string, status: Application["status"]) => {
    const { error } = await supabase
      .from("applications")
      .update({
        status,
        reviewed_by: user?.id,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update status");
    } else {
      toast.success("Application status updated");
      fetchApplications();
      setSelectedApp(null);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.reference_number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || app.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalAmount = applications.reduce((sum, app) => sum + Number(app.amount_requested), 0);
  const pendingAmount = applications
    .filter((a) => a.status === "pending" || a.status === "under_review")
    .reduce((sum, app) => sum + Number(app.amount_requested), 0);

  if (authLoading || loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <RefreshCw className="w-8 h-8 text-primary animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!isAdmin) {
    return null;
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
                  Admin Dashboard
                </h1>
                <p className="font-sans text-muted-foreground">
                  Manage all capital applications
                </p>
              </div>
              <Button variant="ghost" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>

            {/* Stats */}
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
                    <p className="font-sans text-sm text-muted-foreground">
                      Pending Review
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-sans text-2xl font-bold text-foreground">
                      ${totalAmount.toLocaleString()}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      Total Requested
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-sans text-2xl font-bold text-foreground">
                      ${pendingAmount.toLocaleString()}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      Pending Amount
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="card-elevated p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, email, or reference..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="all">All Status</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {statusConfig[status].label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Applications Table */}
            <div className="card-elevated p-6">
              <h2 className="font-serif text-xl font-bold text-foreground mb-6">
                All Applications ({filteredApplications.length})
              </h2>

              {filteredApplications.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="font-sans text-muted-foreground">
                    No applications found matching your criteria.
                  </p>
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
                          Applicant
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Type
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Amount
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Purpose
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Date
                        </th>
                        <th className="text-left py-3 px-4 font-sans text-sm font-semibold text-muted-foreground">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredApplications.map((app) => {
                        const status = statusConfig[app.status];
                        return (
                          <tr
                            key={app.id}
                            className="border-b border-border/50 hover:bg-muted/30"
                          >
                            <td className="py-4 px-4 font-sans text-sm font-medium text-foreground">
                              {app.reference_number}
                            </td>
                            <td className="py-4 px-4">
                              <div>
                                <p className="font-sans text-sm font-medium text-foreground">
                                  {app.full_name}
                                </p>
                                <p className="font-sans text-xs text-muted-foreground">
                                  {app.email}
                                </p>
                              </div>
                            </td>
                            <td className="py-4 px-4 font-sans text-sm text-muted-foreground capitalize">
                              {app.applicant_type}
                            </td>
                            <td className="py-4 px-4 font-sans text-sm font-medium text-foreground">
                              ${Number(app.amount_requested).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 font-sans text-sm text-muted-foreground max-w-[200px] truncate">
                              {app.purpose}
                            </td>
                            <td className="py-4 px-4">
                              <span
                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}
                              >
                                <status.icon className="w-3 h-3" />
                                {status.label}
                              </span>
                            </td>
                            <td className="py-4 px-4 font-sans text-sm text-muted-foreground">
                              {new Date(app.created_at).toLocaleDateString()}
                            </td>
                            <td className="py-4 px-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSelectedApp(app)}
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Application Detail Modal */}
            {selectedApp && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-foreground">
                        Application Details
                      </h2>
                      <p className="font-sans text-muted-foreground">
                        {selectedApp.reference_number}
                      </p>
                    </div>
                    <Button variant="ghost" onClick={() => setSelectedApp(null)}>
                      ✕
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                          Applicant
                        </p>
                        <p className="font-sans text-foreground">{selectedApp.full_name}</p>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                          Email
                        </p>
                        <p className="font-sans text-foreground">{selectedApp.email}</p>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                          Phone
                        </p>
                        <p className="font-sans text-foreground">{selectedApp.phone}</p>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                          Type
                        </p>
                        <p className="font-sans text-foreground capitalize">
                          {selectedApp.applicant_type}
                        </p>
                      </div>
                      {selectedApp.organization_name && (
                        <div className="col-span-2">
                          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                            Organization
                          </p>
                          <p className="font-sans text-foreground">
                            {selectedApp.organization_name}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                        Funding Request
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                            Amount Requested
                          </p>
                          <p className="font-sans text-2xl font-bold text-foreground">
                            ${Number(selectedApp.amount_requested).toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                            Timeline
                          </p>
                          <p className="font-sans text-foreground">{selectedApp.timeline}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                            Purpose
                          </p>
                          <p className="font-sans text-foreground">{selectedApp.purpose}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                        Future Value Verification
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                            Source of Repayment
                          </p>
                          <p className="font-sans text-foreground">
                            {selectedApp.repayment_source}
                          </p>
                        </div>
                        {selectedApp.collateral && (
                          <div>
                            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                              Collateral
                            </p>
                            <p className="font-sans text-foreground">
                              {selectedApp.collateral}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                        Update Status
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {statusOptions.map((status) => (
                          <Button
                            key={status}
                            variant={selectedApp.status === status ? "hero" : "outline"}
                            size="sm"
                            onClick={() => updateApplicationStatus(selectedApp.id, status)}
                          >
                            {statusConfig[status].label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
