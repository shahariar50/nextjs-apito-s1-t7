import MainLayout from "components/layout/MainLayout";
import AddressSection from "components/page/homepage/AddressSection";
import ContactForm from "components/page/homepage/ContactForm";
import DestinationsSection from "components/page/homepage/DestinationsSection";
import HeroSection from "components/page/homepage/HeroSection";
import NewsLetterSection from "components/page/homepage/NewsLetterSection";
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
      <ContactForm />
      <AddressSection />
      <NewsLetterSection />
    </MainLayout>
  );
}
