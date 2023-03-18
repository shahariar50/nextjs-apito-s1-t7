import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const DestinationsSection = () => {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row text-center justify-content-center mb-5">
          <div className="col-lg-7">
            <h2 className="section-title text-center">Popular Destination</h2>
          </div>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="destinationSlider"
        >
          <SwiperSlide className="item">
            <a
              className="media-thumb"
              href="/images/hero-slider-1.jpg"
              data-fancybox="gallery"
            >
              <div className="media-text">
                <h3>Pragser Wildsee</h3>
                <span className="location">Italy</span>
              </div>
              <picture>
                <img
                  src="images/hero-slider-1.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </picture>
            </a>
          </SwiperSlide>
          <SwiperSlide className="item">
            <a
              className="media-thumb"
              href="images/hero-slider-2.jpg"
              data-fancybox="gallery"
            >
              <div className="media-text">
                <h3>Oia</h3>
                <span className="location">Greece</span>
              </div>
              <picture>
                <img
                  src="images/hero-slider-2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </picture>
            </a>
          </SwiperSlide>
          <SwiperSlide className="item">
            <a
              className="media-thumb"
              href="images/hero-slider-3.jpg"
              data-fancybox="gallery"
            >
              <div className="media-text">
                <h3>Perhentian Islands</h3>
                <span className="location">Malaysia</span>
              </div>
              <picture>
                <img
                  src="images/hero-slider-3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </picture>
            </a>
          </SwiperSlide>
          <SwiperSlide className="item">
            <a
              className="media-thumb"
              href="images/hero-slider-4.jpg"
              data-fancybox="gallery"
            >
              <div className="media-text">
                <h3>Rialto Bridge</h3>
                <span className="location">Italy</span>
              </div>
              <picture>
                <img
                  src="images/hero-slider-4.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </picture>
            </a>
          </SwiperSlide>
          <SwiperSlide className="item">
            <a
              className="media-thumb"
              href="images/hero-slider-5.jpg"
              data-fancybox="gallery"
            >
              <div className="media-text">
                <h3>San Francisco, United States</h3>
                <span className="location">United States</span>
              </div>
              <picture>
                <img
                  src="images/hero-slider-5.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </picture>
            </a>
          </SwiperSlide>
          <SwiperSlide className="item">
            <a
              className="media-thumb"
              href="images/hero-slider-1.jpg"
              data-fancybox="gallery"
            >
              <div className="media-text">
                <h3>Lake Thun</h3>
                <span className="location">Switzerland</span>
              </div>
              <picture>
                <img
                  src="images/hero-slider-2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </picture>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DestinationsSection;
