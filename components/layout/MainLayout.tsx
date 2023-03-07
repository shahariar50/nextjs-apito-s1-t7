import Footer from "./Footer";
import Header from "./Header";

type mainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
  return (
    <main className="main" id="top">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
