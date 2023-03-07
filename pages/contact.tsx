import MainLayout from "components/layout/MainLayout";
import ContactFormSection from "components/page/contactpage/ContactFormSection";
import HeroSection from "components/page/contactpage/HeroSection";
import TestemonialSection from "components/page/contactpage/TestemonialSection";

const ContactPage = () => {
  return (
    <MainLayout isContact={false}>
      <HeroSection />
      <ContactFormSection />
      <TestemonialSection />
    </MainLayout>
  );
};

export default ContactPage;
