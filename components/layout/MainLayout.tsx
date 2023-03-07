import Footer from "./Footer";
import Header from "./Header";

type mainLayoutProps = {
  children: React.ReactNode;
  isContact?: boolean;
};

const MainLayout: React.FC<mainLayoutProps> = ({ children, isContact }) => {
  return (
    <main className="main" id="top">
      <Header />
      {children}
      <Footer ifContact={isContact} />
    </main>
  );
};

export default MainLayout;
