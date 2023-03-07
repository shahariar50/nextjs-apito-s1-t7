import MainLayout from "components/layout/MainLayout";
import FeatureSection from "components/page/servicepage/FeatureSection";
import HeroSection from "components/page/servicepage/HeroSection";
import MoreServiceSection from "components/page/servicepage/MoreServiceSection";
import ServiceSection from "components/page/servicepage/ServiceSection";

const ServicesPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServiceSection />
      <FeatureSection />
      <MoreServiceSection />
    </MainLayout>
  );
};

export default ServicesPage;
