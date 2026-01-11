import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Search, 
  CheckCircle, 
  Banknote, 
  RefreshCw,
  User,
  Building2,
  Landmark,
  ArrowRight
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Obligation Identified",
    description:
      "A pressing financial obligation is identified. This could be personal (medical, education), commercial (payroll, suppliers), or institutional (infrastructure, services).",
    details: [
      "You identify an urgent financial need",
      "The obligation has a clear timeline and amount",
      "Traditional financing is unavailable or too slow",
    ],
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Future Value Verified",
    description:
      "We verify the source of future value that will enable capital recovery. This varies by client type — salary for individuals, revenue for businesses, allocations for governments.",
    details: [
      "Submit documentation of future cash flow",
      "Our team verifies authenticity and timing",
      "Risk assessment and terms determined",
    ],
  },
  {
    number: "03",
    icon: Banknote,
    title: "Capital Advanced",
    description:
      "Once verified, capital is advanced directly to meet the obligation. Funds go where they're needed — to hospitals, schools, suppliers, or your account.",
    details: [
      "Agreement signed with transparent terms",
      "Funds disbursed rapidly",
      "Obligation cleared, crisis averted",
    ],
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Value Recovered",
    description:
      "When the verified future value arrives — next payday, revenue receipt, or budget allocation — our capital is recovered, completing the cycle.",
    details: [
      "Automatic or scheduled repayment",
      "Clear timeline from the start",
      "Relationship continues for future needs",
    ],
  },
];

const userTypes = [
  {
    icon: User,
    type: "Individuals",
    verification: "Employment verification, salary records",
    recovery: "Payroll deduction or direct transfer",
    timeline: "24-72 hours",
  },
  {
    icon: Building2,
    type: "Businesses",
    verification: "Confirmed orders, revenue records, contracts",
    recovery: "Revenue share, invoice assignment",
    timeline: "3-7 business days",
  },
  {
    icon: Landmark,
    type: "Governments",
    verification: "Budget allocations, revenue projections",
    recovery: "Treasury deduction, allocation assignment",
    timeline: "7-14 business days",
  },
];

export default function Process() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background via-cyan-light/20 to-background">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Our Process
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Simple, Universal Model
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              Whether you're an individual, business, or institution — the core
              process remains the same. Identify, verify, advance, recover.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="section-spacing">
        <div className="container-institutional">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 transform -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:order-2 lg:pl-16"}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <span className="font-sans text-5xl font-bold text-primary/20">
                        {step.number}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className={`flex items-start gap-3 ${index % 2 === 0 ? "lg:flex-row-reverse lg:text-left" : ""}`}
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-sans text-sm text-foreground">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Icon Circle */}
                  <div className={index % 2 === 0 ? "lg:order-2 lg:pl-16" : "lg:pr-16"}>
                    <div className="relative">
                      {/* Center dot on timeline */}
                      <div className="hidden lg:block absolute top-1/2 left-0 w-4 h-4 rounded-full bg-primary transform -translate-y-1/2 -translate-x-1/2 z-10" />
                      <div className="card-elevated p-8 inline-block">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-10 h-10 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* By User Type */}
      <section className="section-spacing bg-muted/30">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tailored to Your Situation
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              The process adapts based on who you are and what you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {userTypes.map((user, index) => (
              <motion.div
                key={user.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <user.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  {user.type}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Verification
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {user.verification}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Recovery
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {user.recovery}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                      Typical Timeline
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {user.timeline}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-institutional text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Begin?
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Start your application today. Our team will guide you through each
              step of the process.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">
                Request Capital
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
