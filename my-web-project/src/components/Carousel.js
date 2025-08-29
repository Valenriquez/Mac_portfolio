import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const Carousel = ({
  images = [],
  slidesToShow = 1,
  height = "400px",
  arrows = true,
  autoplay = false,
  autoplaySpeed = 3000,
  speed = 400,
  isHoverable = false,
  objectFit = true
}) => {

  const hasMultipleSlides = images.length > 1;
  return (
      <div className="slider-container p-5">
        <Splide
          hasTrack={false}
          options={{
            type: hasMultipleSlides ? 'loop' : 'slide',
            perPage: slidesToShow,
            pagination: hasMultipleSlides,
            arrows: hasMultipleSlides && arrows,
            autoplay: hasMultipleSlides && autoplay,
            interval: autoplaySpeed,
            speed: speed,
            pauseOnHover: isHoverable,
            rewind: hasMultipleSlides,
            breakpoints: {
              1024: { perPage: Math.min(slidesToShow, 3) },
              768: { perPage: Math.min(slidesToShow, 2) },
              640: { perPage: 1 },
            },
          }}
          aria-label="Carousel"
        >
          <div className="relative">
            <SplideTrack>
              {images.map((item) => (
                <SplideSlide key={item.id || item.title}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white rounded-xl shadow-lg overflow-hidden"
                       style={{ minHeight: height }}>
                    <div className="md:w-1/2 relative" style={{ height }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full ${objectFit ? 'object-cover' : 'object-contain'}`}
                      />
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-start"> {/* Changed justify-center to justify-start */}                      <h3 className="font-['cursive'] text-3xl md:text-4xl text-gray-900 mb-2 md:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base max-w-prose">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
  
            {hasMultipleSlides && arrows && (
              <div className="splide__arrows absolute top-1/2 -translate-y-1/2 w-full px-4">
                <button className="splide__arrow splide__arrow--prev absolute left-0 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg">
                  <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
                </button>
                <button className="splide__arrow splide__arrow--next absolute right-0 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg">
                  <ChevronRightIcon className="w-6 h-6 text-gray-900" />
                </button>
              </div>
            )}
          </div>
        </Splide>
      </div>
    );
  };
  
  Carousel.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  slidesToShow: PropTypes.number,
  height: PropTypes.string,
  arrows: PropTypes.bool,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  speed: PropTypes.number,
  isHoverable: PropTypes.bool,
  objectFit: PropTypes.bool,
};

export default Carousel;