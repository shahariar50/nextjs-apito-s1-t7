import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestemonialSection = ({ bg }: { bg?: "white" }) => {
  return (
    <div
      className={`untree_co-section testimonial-section mt-5 ${
        bg === "white" ? "bg-white" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="section-title text-center mb-5">Testimonials</h2>

            <Swiper
              className="testimonialSlider"
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              style={{ paddingBottom: 32 }}
            >
              <SwiperSlide>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <picture>
                      <img
                        src="images/person_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </picture>
                  </figure>
                  <h3 className="name">Adam Aderson</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <picture>
                      <img
                        src="images/person_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </picture>
                  </figure>
                  <h3 className="name">Lukas Devlin</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <picture>
                      <img
                        src="images/person_4.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </picture>
                  </figure>
                  <h3 className="name">Kayla Bryant</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestemonialSection;
