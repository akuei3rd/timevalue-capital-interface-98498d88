import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Wallet, 
  HeartPulse, 
  TrendingUp, 
  Building,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wallet,
    title: "Payroll & Income Advances",
    description:
      "Early salary access with employer-integrated repayment. Zero default structure through direct deduction partnerships.",
    features: ["Early salary access", "Employer partnerships", "Seamless repayment"],
    id: "payroll",
  },
  {
    icon: HeartPulse,
    title: "Personal Obligation Clearing",
    description:
      "Hospital bills, school fees, emergency payments. Collateral-based approval with transparent terms.",
    features: ["Medical expenses", "Education fees", "Emergency funding"],
    id: "personal",
  },
  {
    icon: TrendingUp,
    title: "SME & Founder Bridge Capital",
    description:
      "Capital for execution, not ideas. Revenue share, equity, and convertible structures for growing businesses.",
    features: ["Working capital", "Growth financing", "Flexible structures"],
    id: "sme",
  },
  {
    icon: Building,
    title: "Sovereign & Institutional Bridging",
    description:
      "Government obligations, supplier payments, infrastructure continuity. Enabling critical operations to continue.",
    features: ["Government payments", "Supplier obligations", "Infrastructure"],
    id: "institutional",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-institutional">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Financial Infrastructure for Every Scale
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            From individual salary advances to sovereign bridging, we provide
            the liquidity infrastructure that keeps systems functioning.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="card-elevated p-8 h-full group hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="font-sans text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="font-sans text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
