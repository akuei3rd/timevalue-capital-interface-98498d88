import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, User, Building2, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const taglines = [
  "Advancing Today. Unlocking Tomorrow.",
  "Liquidity for What Matters Now.",
  "When Time Is the Asset.",
];

const ctaPaths = [
  {
    icon: User,
    title: "Individuals",
    description: "Salary advances & personal obligation clearing",
    path: "/apply?type=individual",
  },
  {
    icon: Building2,
    title: "Businesses",
    description: "SME bridge capital for execution",
    path: "/apply?type=business",
  },
  {
    icon: Landmark,
    title: "Governments",
    description: "Sovereign & institutional bridging",
    path: "/apply?type=government",
  },
];

export function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-light/30 to-background" />
      
      {/* Flowing timeline motif */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M-100 450 Q 200 350 400 450 T 800 450 T 1200 450 T 1600 450"
            stroke="hsl(187, 70%, 45%)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          <motion.path
            d="M-100 500 Q 300 400 500 500 T 900 500 T 1300 500 T 1700 500"
            stroke="hsl(210, 50%, 20%)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeOut", delay: 0.3 }}
          />
          <motion.path
            d="M-100 400 Q 250 300 450 400 T 850 400 T 1250 400 T 1650 400"
            stroke="hsl(187, 70%, 45%)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeOut", delay: 0.6 }}
          />
        </svg>
      </div>

      {/* Floating circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-institutional relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rotating Tagline */}
          <div className="h-8 mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTagline}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-primary"
              >
                {taglines[currentTagline]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8"
          >
            We advance capital to clear{" "}
            <span className="text-primary">urgent obligations</span> — and
            recover value from{" "}
            <span className="text-navy">tomorrow</span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Financial infrastructure for individuals, businesses, and
            governments. Time is your most valuable asset.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">
                Request Capital
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/process">How It Works</Link>
            </Button>
          </motion.div>

          {/* Three Paths */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {ctaPaths.map((cta, index) => (
              <Link
                key={cta.title}
                to={cta.path}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-elevated p-6 text-center transition-all duration-300 group-hover:border-primary/30"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-primary/20">
                    <cta.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {cta.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {cta.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
