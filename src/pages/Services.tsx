import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Wallet, 
  HeartPulse, 
  TrendingUp, 
  Building,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "payroll",
    icon: Wallet,
    title: "Payroll & Income Advances",
    subtitle: "Early salary access for employees",
    description:
      "We partner with employers to provide employees early access to earned wages. Repayment is automatic through payroll deduction, creating a zero-default structure that benefits everyone.",
    features: [
      "Access earned wages before payday",
      "Employer-integrated repayment",
      "Zero default through direct deduction",
      "No impact on credit score",
      "Transparent flat fees, no hidden charges",
    ],
    ideal: "Employees with stable employment seeking short-term liquidity",
  },
  {
    id: "personal",
    icon: HeartPulse,
    title: "Personal Obligation Clearing",
    subtitle: "When life doesn't wait for payday",
    description:
      "Hospital bills, school fees, emergency repairs — some obligations cannot wait. We provide collateral-based advances to clear urgent personal obligations, with transparent terms and dignified service.",
    features: [
      "Hospital and medical expenses",
      "School fees and education costs",
      "Emergency home repairs",
      "Collateral-based approval",
      "Flexible repayment timelines",
    ],
    ideal: "Individuals with verifiable collateral facing urgent expenses",
  },
  {
    id: "sme",
    icon: TrendingUp,
    title: "SME & Founder Bridge Capital",
    subtitle: "Capital for execution, not ideas",
    description:
      "Growing businesses often need capital to execute confirmed orders, bridge seasonal gaps, or fund expansion. We provide working capital against verified revenue streams or convertible structures.",
    features: [
      "Working capital for confirmed orders",
      "Bridge financing for growth phases",
      "Revenue-share repayment structures",
      "Equity and convertible options",
      "Founder-friendly terms",
    ],
    ideal: "Businesses with proven revenue seeking execution capital",
  },
  {
    id: "institutional",
    icon: Building,
    title: "Sovereign & Institutional Bridging",
    subtitle: "Keeping critical systems running",
    description:
      "When governments and institutions face temporary liquidity gaps, essential services can be disrupted. We bridge these gaps — enabling passport offices, examination bodies, utilities, and suppliers to continue operations.",
    features: [
      "Government payroll and pension advances",
      "Supplier payment guarantees",
      "Infrastructure continuity funding",
      "Examination and certification support",
      "Utility and essential service bridging",
    ],
    ideal: "Governments and institutions with verified future revenue",
  },
];

export default function Services() {
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
              Our Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Financial Infrastructure at Every Scale
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              From individual salary advances to sovereign bridging, we provide
              the liquidity infrastructure that enables obligations to be met on
              time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-spacing">
        <div className="container-institutional">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <p className="font-sans text-sm text-muted-foreground">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border mb-6">
                    <p className="font-sans text-sm">
                      <span className="font-semibold text-foreground">Ideal for: </span>
                      <span className="text-muted-foreground">{service.ideal}</span>
                    </p>
                  </div>
                  <Button variant="hero" asChild>
                    <Link to={`/apply?type=${service.id}`}>
                      Apply for {service.title.split(" ")[0]}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="card-glow p-8 lg:p-12">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 via-background to-gold/10 flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-muted/30">
        <div className="container-institutional text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not Sure Which Service Is Right?
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team can help you understand which solution best fits your
              situation. Get in touch for a confidential consultation.
            </p>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Speak With Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
