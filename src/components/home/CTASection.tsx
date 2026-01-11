import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-light/50 via-background to-gold/10" />

      <div className="container-institutional relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Unlock Tomorrow's Value Today?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-10">
            Whether you're an individual facing an urgent expense, a business
            needing bridge capital, or a government ensuring continuity — we're
            ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">
                Request Capital
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
