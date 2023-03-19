import ExampleVideoSection from "components/common/templates/ExampleVideoSection";
import TestemonialSection from "components/common/templates/TestemonialSection";
import MainLayout from "components/layout/MainLayout";
import PageHeader from "components/layout/PageHeader";
import AboutSection from "components/page/aboutpage/AboutSection";
import ContactSection from "components/page/aboutpage/ContactSection";
import TeamsSection from "components/page/aboutpage/TeamsSection";

const AboutPage = () => {
  return (
    <MainLayout isContact={false}>
      <PageHeader
        title="About Us"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
      <AboutSection />
      <TeamsSection />
      <TestemonialSection />
      <ExampleVideoSection />
      <ContactSection />
    </MainLayout>
  );
};

export default AboutPage;
