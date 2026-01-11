import { Link } from "react-router-dom";
import tvcLogo from "@/assets/tvc-logo.png";

const footerLinks = {
  services: [
    { name: "Payroll Advances", path: "/services#payroll" },
    { name: "Personal Obligations", path: "/services#personal" },
    { name: "SME Bridge Capital", path: "/services#sme" },
    { name: "Institutional Bridging", path: "/services#institutional" },
  ],
  company: [
    { name: "About Us", path: "/why-us" },
    { name: "Governance & Trust", path: "/governance" },
    { name: "How It Works", path: "/process" },
  ],
  connect: [
    { name: "Apply Now", path: "/apply" },
    { name: "Contact Us", path: "/contact" },
    { name: "Partner With Us", path: "/partners" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-institutional section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src={tvcLogo}
                alt="TimeValue Capital"
                className="h-14 w-auto rounded-lg bg-white/10 p-2"
              />
            </Link>
            <p className="text-secondary-foreground/80 font-sans text-sm leading-relaxed max-w-sm mb-6">
              Financial infrastructure for individuals, businesses, and governments. 
              We advance capital to clear urgent obligations — and recover value from tomorrow.
            </p>
            <p className="text-secondary-foreground/60 font-sans text-xs">
              Based in South Sudan. Operating with global standards.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-secondary-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-secondary-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-secondary-foreground">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} TimeValue Capital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="font-sans text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-sans text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
