import TestemonialSection from "components/common/templates/TestemonialSection";
import MainLayout from "components/layout/MainLayout";
import PageHeader from "components/layout/PageHeader";
import ContactFormSection from "components/page/contactpage/ContactFormSection";

const ContactPage = () => {
  return (
    <MainLayout isContact={false}>
      <PageHeader
        title="Contact Us"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
      <ContactFormSection />
      <TestemonialSection bg="white" />
    </MainLayout>
  );
};

export default ContactPage;
