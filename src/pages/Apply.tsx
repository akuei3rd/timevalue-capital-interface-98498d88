import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { 
  User, 
  Building2, 
  Landmark, 
  Upload,
  ArrowRight,
  CheckCircle,
  FileText,
  Clock,
  Shield
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type ApplicantType = "individual" | "business" | "government" | null;

const applicantTypes = [
  {
    id: "individual" as const,
    icon: User,
    title: "Individual",
    description: "Salary advances, personal obligations, emergency funding",
  },
  {
    id: "business" as const,
    icon: Building2,
    title: "Business",
    description: "Working capital, bridge financing, growth funding",
  },
  {
    id: "government" as const,
    icon: Landmark,
    title: "Government / Institution",
    description: "Sovereign bridging, infrastructure, continuity funding",
  },
];

const processSteps = [
  { icon: FileText, label: "Submit Application" },
  { icon: Clock, label: "Verification (24-72hrs)" },
  { icon: Shield, label: "Terms & Agreement" },
  { icon: CheckCircle, label: "Capital Disbursed" },
];

export default function Apply() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") as ApplicantType;
  const [selectedType, setSelectedType] = useState<ApplicantType>(
    initialType || null
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-background via-cyan-light/20 to-background">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Apply Now
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Request Capital
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              Start your application by selecting your category below. Our team
              will guide you through the verification and approval process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-8 bg-muted/30">
        <div className="container-institutional">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-sans text-sm text-foreground">
                    {step.label}
                  </span>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-spacing">
        <div className="container-institutional max-w-4xl">
          {!formSubmitted ? (
            <>
              {/* Type Selection */}
              {!selectedType && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
                    Select Your Category
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {applicantTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className="card-elevated p-6 text-left hover:border-primary/30 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <type.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                          {type.title}
                        </h3>
                        <p className="font-sans text-sm text-muted-foreground">
                          {type.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Application Form */}
              {selectedType && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        {selectedType === "individual" && (
                          <User className="w-6 h-6 text-primary" />
                        )}
                        {selectedType === "business" && (
                          <Building2 className="w-6 h-6 text-primary" />
                        )}
                        {selectedType === "government" && (
                          <Landmark className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-foreground">
                          {selectedType === "individual" && "Individual Application"}
                          {selectedType === "business" && "Business Application"}
                          {selectedType === "government" && "Government Application"}
                        </h2>
                        <p className="font-sans text-sm text-muted-foreground">
                          All fields are required unless marked optional
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedType(null)}
                    >
                      Change Type
                    </Button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Information */}
                    <div className="card-elevated p-6">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+211 XXX XXX XXX" required />
                        </div>
                        {selectedType !== "individual" && (
                          <div className="space-y-2">
                            <Label htmlFor="organization">Organization Name</Label>
                            <Input id="organization" placeholder="Organization name" required />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Funding Request */}
                    <div className="card-elevated p-6">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                        Funding Request
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="amount">Amount Requested (USD)</Label>
                          <Input id="amount" type="number" placeholder="Enter amount" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="purpose">Purpose of Funds</Label>
                          <Input id="purpose" placeholder="e.g., Medical expenses, payroll" required />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="timeline">When do you need the funds?</Label>
                          <Input id="timeline" placeholder="e.g., Within 48 hours, by end of week" required />
                        </div>
                      </div>
                    </div>

                    {/* Future Value Verification */}
                    <div className="card-elevated p-6">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                        Future Value Verification
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground mb-4">
                        Describe the source of funds for repayment (salary, revenue, budget allocation, etc.)
                      </p>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="repayment">Source of Repayment</Label>
                          <Textarea
                            id="repayment"
                            placeholder="Describe how you will repay this advance..."
                            className="min-h-[100px]"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="collateral">Collateral (if applicable)</Label>
                          <Textarea
                            id="collateral"
                            placeholder="Describe any collateral you can provide..."
                            className="min-h-[80px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Document Upload */}
                    <div className="card-elevated p-6">
                      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                        Supporting Documents
                      </h3>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                        <p className="font-sans text-foreground mb-2">
                          Drag and drop files here, or click to browse
                        </p>
                        <p className="font-sans text-sm text-muted-foreground">
                          Employment letter, bank statements, contracts, or other relevant documents
                        </p>
                        <input type="file" className="hidden" multiple />
                        <Button variant="outline" className="mt-4">
                          Select Files
                        </Button>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                      <Button
                        variant="heroOutline"
                        type="button"
                        onClick={() => setSelectedType(null)}
                      >
                        Cancel
                      </Button>
                      <Button variant="hero" size="lg" type="submit">
                        Submit Application
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Application Submitted
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-lg mx-auto mb-8">
                Thank you for your application. Our team will review your
                submission and contact you within 24-72 hours.
              </p>
              <p className="font-sans text-sm text-muted-foreground mb-8">
                Reference Number: TVC-{Date.now().toString(36).toUpperCase()}
              </p>
              <Button variant="hero" asChild>
                <a href="/">Return to Home</a>
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
