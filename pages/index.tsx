import MainLayout from "components/layout/MainLayout";
import ContactSection from "components/page/homepage/ContactSection";
import DestinationsSection from "components/page/homepage/DestinationsSection";
import ExampleVideoSection from "components/page/homepage/ExampleVideoSection";
import HeroSection from "components/page/homepage/HeroSection";
import OfferSection from "components/page/homepage/OfferSection";
import ServiceSection from "components/page/homepage/ServiceSection";
import StatisticsSection from "components/page/homepage/StatisticsSection";
import TestemonialSection from "components/page/homepage/TestemonialSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ServiceSection />
      <StatisticsSection />
      <DestinationsSection />
      <TestemonialSection />
      <OfferSection />
      <ExampleVideoSection />
      <ContactSection />
    </MainLayout>
  );
}
