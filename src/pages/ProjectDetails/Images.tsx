import { useRef, useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import { Navigation } from 'swiper/modules';
import lgZoom from 'lightgallery/plugins/zoom';

interface ImagesProps {
  images: string[];
}

const Images: React.FC<ImagesProps> = ({ images }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // Initialize Swiper instance and navigation
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // Handle swiper navigation only if refs are available
      // Swiper's React component handles the swiper instance for us
    }
  }, [prevRef, nextRef]);

  return (
    <div className="relative bg-[#0E1330] border border-[#282D45] rounded-lg h-[500px] group">
      <LightGallery speed={500} plugins={[lgZoom]} mode="lg-fade">
        <Swiper
          className="mySwiper"
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <a href={image}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full rounded-lg h-[500px] object-cover"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </LightGallery>

      {/* Custom Previous Button */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white bg-[#282D45] hover:bg-blue-500 duration-300 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-white bg-[#282D45] hover:bg-blue-500 duration-300 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Images;
