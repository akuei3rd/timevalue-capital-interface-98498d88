import { motion } from "framer-motion";
import { Clock, Shield, Globe, Target } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Time as a Financial Asset",
    description:
      "We understand that timing often determines outcomes. Our infrastructure converts future certainty into present capability.",
  },
  {
    icon: Shield,
    title: "Discipline Over Speculation",
    description:
      "We do not gamble on ideas. We advance against verified future value — creating sustainable cycles of capital deployment.",
  },
  {
    icon: Globe,
    title: "Africa-First, World-Class",
    description:
      "Built for Africa's unique challenges, designed to global institutional standards. Local understanding, international credibility.",
  },
  {
    icon: Target,
    title: "Trust Infrastructure",
    description:
      "In systems under pressure, we provide the stability that enables others to function. We are infrastructure, not intervention.",
  },
];

export function WhyTVC() {
  return (
    <section className="section-spacing bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container-institutional relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Why TimeValue
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            In Systems Under Pressure, Timing Decides Everything.
          </h2>
          <p className="font-sans text-lg text-secondary-foreground/80">
            We exist to provide the financial infrastructure that enables
            individuals, businesses, and institutions to meet their obligations
            when it matters most.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-secondary-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-secondary-foreground/10"
        >
          <blockquote className="font-serif text-2xl md:text-3xl text-center text-secondary-foreground/90 max-w-4xl mx-auto">
            "Financial infrastructure that works when everything else is under
            pressure — that's what makes the difference."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
