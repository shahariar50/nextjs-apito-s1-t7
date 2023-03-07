const ServiceSection = () => {
  return (
    <section className="py-7" id="services" container-xl="container-xl">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5 text-center mb-3">
            <h5 className="text-danger">SERVICES</h5>
            <h2>Our services for you</h2>
          </div>
        </div>
        <div className="row h-100 justify-content-center">
          <div className="col-md-4 pt-4 px-md-2 px-lg-3">
            <div className="card h-100 px-lg-5 card-span">
              <div className="card-body d-flex flex-column justify-content-around">
                <div className="text-center pt-5">
                  <picture>
                    <img
                      className="img-fluid"
                      src="/img/icons/services-1.svg"
                      alt="..."
                    />
                  </picture>
                  <h5 className="my-4">Business Services</h5>
                </div>
                <p>
                  Offering home delivery around the city, where your products
                  will be at your doorstep within 48-72 hours.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="me-2">
                      <i
                        className="fas fa-circle text-primary"
                        style={{ fontSize: ".5rem" }}
                      ></i>
                    </span>
                    Corporate goods
                  </li>
                  <li className="mb-2">
                    <span className="me-2">
                      <i
                        className="fas fa-circle text-primary"
                        style={{ fontSize: ".5rem" }}
                      ></i>
                    </span>
                    Shipment
                  </li>
                  <li className="mb-2">
                    <span className="me-2">
                      <i
                        className="fas fa-circle text-primary"
                        style={{ fontSize: ".5rem" }}
                      ></i>
                    </span>
                    Accesories
                  </li>
                </ul>
                <div className="text-center my-5">
                  <div className="d-grid">
                    <button className="btn btn-outline-danger" type="submit">
                      Learn more{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-4 px-md-2 px-lg-3">
            <div className="card h-100 px-lg-5 card-span">
              <div className="card-body d-flex flex-column justify-content-around">
                <div className="text-center pt-5">
                  <picture>
                    <img
                      className="img-fluid"
                      src="/img/icons/services-2.svg"
                      alt="..."
                    />
                  </picture>
                  <h5 className="my-4">Statewide Services</h5>
                </div>
                <p>
                  Offering home delivery around the city, where your products
                  will be at your doorstep within 48-72 hours.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="me-2">
                      <i
                        className="fas fa-circle text-primary"
                        style={{ fontSize: ".5rem" }}
                      ></i>
                    </span>
                    Unlimited Bandwidth
                  </li>
                  <li className="mb-2">
                    <span className="me-2">
                      <i
                        className="fas fa-circle text-primary"
                        style={{ fontSize: ".5rem" }}
                      ></i>
                    </span>
                    Encrypted Connection
                  </li>
                  <li className="mb-2">
                    <span className="me-2">
                      <i
                        className="fas fa-circle text-primary"
                        style={{ fontSize: ".5rem" }}
                      ></i>
                    </span>
                    Yes Traffic Logs
                  </li>
                </ul>
                <div className="text-center my-5">
                  <div className="d-grid">
                    <button
                      className="btn btn-danger hover-top btn-glow border-0"
                      type="submit"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-4 px-md-2 px-lg-3">
            <div className="card h-100 px-lg-5 card-span">
              <div className="card-body d-flex flex-column justify-content-around">
                <div className="text-center pt-5">
                  <picture>
                    <img
                      className="img-fluid"
                      src="/img/icons/services-3.svg"
                      alt="..."
                    />
                  </picture>
                  <h5 className="my-4">Personal Services</h5>
                </div>
                <p>
                  You can trust us to safely deliver your most sensitive
                  documents to the specific area in a short time.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="me-2">
                      <i
                        className="fas fa-circle text-primary"
                        style={{ fontSize: ".5rem" }}
                      ></i>
                    </span>
                    Unlimited Bandwidth
                  </li>
                  <li className="mb-2">
                    <span className="me-2">
                      <i
                        className="fas fa-circle text-primary"
                        style={{ fontSize: ".5rem" }}
                      ></i>
                    </span>
                    Encrypted Connection
                  </li>
                  <li className="mb-2">
                    <span className="me-2">
                      <i
                        className="fas fa-circle text-primary"
                        style={{ fontSize: ".5rem" }}
                      ></i>
                    </span>
                    Yes Traffic Logs
                  </li>
                </ul>
                <div className="text-center my-5">
                  <div className="d-grid">
                    <button className="btn btn-outline-danger" type="submit">
                      Learn more{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
