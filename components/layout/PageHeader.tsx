type PageHeaderType = {
  title: string;
  subtitle: string;
};

const PageHeader: React.FC<PageHeaderType> = ({
  title = "",
  subtitle = "",
}) => {
  return (
    <div className="hero hero-inner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mx-auto text-center">
            <div className="intro-wrap">
              <h1 className="mb-0">{title}</h1>
              <p className="text-white">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
