import TestemonialSection from "components/common/TestemonialSection";
import MainLayout from "components/layout/MainLayout";
import DestinationsSection from "components/page/homepage/DestinationsSection";
import ExampleVideoSection from "components/page/homepage/ExampleVideoSection";
import HeroSection from "components/page/homepage/HeroSection";
import OfferSection from "components/page/homepage/OfferSection";
import ServiceSection from "components/page/homepage/ServiceSection";
import StatisticsSection from "components/page/homepage/StatisticsSection";

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
    </MainLayout>
  );
}
