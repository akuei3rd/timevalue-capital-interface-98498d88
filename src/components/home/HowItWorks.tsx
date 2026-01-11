import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, CheckCircle, Banknote, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Obligation Identified",
    description:
      "A pressing financial obligation is identified — whether medical bills, payroll, supplier payments, or infrastructure needs.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Future Value Verified",
    description:
      "We verify the future cash flow, collateral, or revenue stream that will enable recovery of the advanced capital.",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Capital Advanced",
    description:
      "Funds are disbursed to meet the immediate obligation, enabling continuity and preventing costly disruptions.",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Value Recovered",
    description:
      "Capital is recovered from the verified future value — salary, revenue, or contractual payments — completing the cycle.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="container-institutional relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Simple, Universal Model
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Whether you're an individual, business, or government — the
            fundamental process remains the same.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="card-elevated p-6 text-center h-full">
                  {/* Number Badge */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto shadow-lg">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-charcoal font-sans text-sm font-bold flex items-center justify-center shadow">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/process">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
