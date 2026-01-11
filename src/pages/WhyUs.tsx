import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Shield, Globe, Target, Zap, Heart, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const coreValues = [
  {
    icon: Clock,
    title: "Time as a Financial Asset",
    description:
      "We recognize that the timing of capital often determines outcomes more than the amount. A salary advance before a medical emergency has different value than one after. We convert future certainty into present capability.",
  },
  {
    icon: Shield,
    title: "Discipline Over Speculation",
    description:
      "We do not fund ideas or speculate on potential. We advance against verified future value — salaries earned, orders confirmed, budgets allocated. This discipline creates sustainable, repeatable cycles.",
  },
  {
    icon: Globe,
    title: "Africa-First, World-Class",
    description:
      "We understand Africa's unique challenges — fragmented payment systems, volatile cash flows, trust deficits. We build for these realities while maintaining global institutional standards.",
  },
  {
    icon: Target,
    title: "Trust Infrastructure",
    description:
      "In systems under pressure, panic creates more damage than the original crisis. We provide stability infrastructure — the predictable capital that allows other systems to function normally.",
  },
  {
    icon: Zap,
    title: "Speed With Rigor",
    description:
      "Urgent obligations require rapid response, but speed without verification creates risk. We've built systems that achieve both — fast decisions backed by robust verification.",
  },
  {
    icon: Heart,
    title: "Dignity in Finance",
    description:
      "Financial difficulty is not moral failure. We treat every client — whether an individual or a government — with the same respect and professionalism. No shame, no exploitation.",
  },
];

const stats = [
  { value: "South Sudan", label: "Headquarters" },
  { value: "2024", label: "Founded" },
  { value: "Global", label: "Standards" },
  { value: "Multi-sector", label: "Coverage" },
];

export default function WhyUs() {
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
              Why TimeValue
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              In Systems Under Pressure, Timing Decides Everything.
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              We exist because we understand that the difference between crisis
              and continuity is often just a matter of timing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container-institutional">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-2xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </p>
                <p className="font-sans text-sm text-secondary-foreground/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              What We Believe
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Our approach to financial infrastructure is built on principles
              that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-elevated p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The TimeValue Difference */}
      <section className="section-spacing bg-muted/30">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Not a Bank. Not a Lender. Infrastructure.
              </h2>
              <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
                <p>
                  Traditional banks see risk everywhere and move slowly. Payday
                  lenders move fast but extract value through exploitation. We
                  are neither.
                </p>
                <p>
                  TimeValue Capital is financial infrastructure — the pipes
                  through which capital flows to meet obligations. We don't
                  speculate on ideas or exploit desperation.
                </p>
                <p>
                  We advance against verified future value and recover when that
                  value arrives. Simple, sustainable, and designed to work even
                  when everything else is under pressure.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glow p-8 lg:p-12"
            >
              <blockquote className="font-serif text-2xl text-foreground leading-relaxed mb-6">
                "The most important financial infrastructure is often invisible
                — it's what allows everything else to function normally."
              </blockquote>
              <p className="font-sans text-sm text-muted-foreground">
                — TimeValue Capital Philosophy
              </p>
            </motion.div>
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
              Ready to Work With Us?
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're an individual, business, or institution — we're
              ready to discuss how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/apply">
                  Request Capital
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/governance">Review Our Governance</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
