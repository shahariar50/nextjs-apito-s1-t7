import MainLayout from "components/layout/MainLayout";
import FeatureSection from "components/page/servicepage/FeatureSection";
import HeroSection from "components/page/servicepage/HeroSection";
import ServiceSection from "components/page/servicepage/ServiceSection";

const ServicesPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServiceSection />
      <FeatureSection />
    </MainLayout>
  );
};

export default ServicesPage;
