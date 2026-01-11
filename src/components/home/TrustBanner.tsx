import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, FileCheck, Eye, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustPillars = [
  {
    icon: Shield,
    label: "Compliance-First",
  },
  {
    icon: FileCheck,
    label: "Transparent Contracts",
  },
  {
    icon: Eye,
    label: "Independent Audits",
  },
  {
    icon: Scale,
    label: "Ethical Deployment",
  },
];

export function TrustBanner() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container-institutional">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Trust Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustPillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border"
              >
                <pillar.icon className="w-5 h-5 text-primary" />
                <span className="font-sans text-sm font-medium text-foreground">
                  {pillar.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="outline" size="lg" asChild>
            <Link to="/governance">
              Governance & Trust
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
