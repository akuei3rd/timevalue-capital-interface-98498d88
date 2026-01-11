import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyTVC } from "@/components/home/WhyTVC";
import { TrustBanner } from "@/components/home/TrustBanner";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <WhyTVC />
      <TrustBanner />
      <CTASection />
    </Layout>
  );
};

export default Index;
