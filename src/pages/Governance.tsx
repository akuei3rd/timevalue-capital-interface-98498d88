import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  FileCheck, 
  Eye, 
  Scale, 
  Lock,
  Users,
  FileText,
  AlertTriangle,
  ArrowRight
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const governancePillars = [
  {
    icon: Shield,
    title: "Compliance-First Philosophy",
    description:
      "We operate within established legal frameworks and regulatory requirements. Compliance is not an afterthought — it's foundational to how we structure every transaction.",
    details: [
      "Registered and licensed operations",
      "Regular regulatory reporting",
      "Legal review of all agreements",
      "Anti-money laundering protocols",
    ],
  },
  {
    icon: Lock,
    title: "No Custody of Sensitive Assets",
    description:
      "We do not take custody of assets beyond what's necessary for transaction execution. Collateral remains with appropriate custodians, and we minimize holding periods for all capital.",
    details: [
      "Minimal capital holding periods",
      "Third-party asset custody",
      "Clear ownership records",
      "Rapid settlement processes",
    ],
  },
  {
    icon: FileCheck,
    title: "Transparent Contracts",
    description:
      "Every agreement is written in clear language with all terms disclosed upfront. There are no hidden fees, no surprises, and no fine print designed to confuse.",
    details: [
      "Plain language agreements",
      "All fees disclosed upfront",
      "Standard terms available publicly",
      "Right to legal review before signing",
    ],
  },
  {
    icon: Eye,
    title: "Independent Audits",
    description:
      "Our operations are subject to regular independent audits. We believe external verification is essential for maintaining trust, especially in markets where trust is scarce.",
    details: [
      "Annual financial audits",
      "Operational process reviews",
      "Compliance verification",
      "Public summary reports",
    ],
  },
  {
    icon: Scale,
    title: "Ethical Capital Deployment",
    description:
      "We have clear policies on acceptable use of our capital. We do not finance activities that harm communities, exploit vulnerability, or undermine social stability.",
    details: [
      "Prohibited use policies",
      "Social impact assessment",
      "Community benefit consideration",
      "Exclusion of harmful activities",
    ],
  },
  {
    icon: Users,
    title: "Stakeholder Accountability",
    description:
      "We are accountable to our clients, partners, regulators, and communities. This multi-stakeholder accountability shapes our decisions and keeps us honest.",
    details: [
      "Client feedback mechanisms",
      "Partner review processes",
      "Community engagement",
      "Board oversight",
    ],
  },
];

const trustCommitments = [
  {
    icon: FileText,
    title: "Clear Documentation",
    description: "Every transaction documented and accessible to relevant parties.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Disclosure",
    description: "We explain risks clearly, even when it might discourage a transaction.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Client information protected with institutional-grade security.",
  },
];

export default function Governance() {
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
              Governance & Trust
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trust Through Transparency
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              In financial services, trust is earned through consistent
              behavior, transparent processes, and accountable governance. This
              is how we earn and maintain that trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
              Our Commitment to Governments, Regulators, Donors & Partners
            </h2>
            <p className="font-sans text-lg text-secondary-foreground/80">
              We understand that working with a new financial institution
              requires confidence in our governance. This page is designed to
              provide the transparency that decision-makers need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governance Pillars */}
      <section className="section-spacing">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Governance Framework
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Six pillars that define how we operate and maintain accountability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governancePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-muted-foreground mb-4">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2">
                      {pillar.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 font-sans text-sm text-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Commitments */}
      <section className="section-spacing bg-muted/30">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Additional Trust Commitments
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <commitment.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {commitment.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {commitment.description}
                </p>
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
              Ready to Partner?
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              For detailed governance documentation, audit reports, or
              regulatory filings, please contact our institutional relations
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Institutional Relations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/apply?type=government">Government Applications</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
