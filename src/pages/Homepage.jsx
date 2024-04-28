// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="container mx-auto font-gsans">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[calc(100vh-78px)] w-full rounded-3xl">
        <SwiperSlide className="bg-[url('https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
          <div className="w-full h-full bg-indigo-950 bg-opacity-40 flex flex-col justify-center items-center">
            <h1 data-aos="fade-zoom-in" data-aos-duration="600" className="text-white text-4xl sm:text-5xl max-sm:px-1 lg:text-6xl font-bold text-center max-w-5xl font-kufam mb-4">
              Unleash Your Creative Potential at Craft_Studio
            </h1>
            <p
              data-aos="fade-zoom-in"
              data-aos-duration="600"
              className="text-white text-opacity-90 max-w-xl lg:max-w-3xl sm:text-xl max-sm:px-4 font-medium font-kufam text-center">
              Explore a world of vibrant colors, versatile mediums, and boundless imagination. Find everything you need to bring your artistic visions to life
            </p>
            <div data-aos="fade-zoom-in" data-aos-duration="600" className="flex gap-4 mt-8">
              <Link to="/register" className="btn btn-primary text-white font-bold hover:text-white sm:text-lg">
                Get Started
              </Link>
              <a href="#properties" className="btn bg-indigo-500 text-slate-100 hover:bg-indigo-600 border-none hover:text-slate-100 font-bold sm:text-lg">
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
          <div className="w-full h-full bg-indigo-950 bg-opacity-40 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-5xl max-sm:px-1 lg:text-6xl font-bold text-center max-w-5xl font-kufam mb-4">
              Unleash Your Creative Potential at Craft_Studio
            </h1>
            <p className="text-white text-opacity-90 max-w-xl lg:max-w-3xl sm:text-xl max-sm:px-4 font-medium font-kufam text-center">
              Explore a world of vibrant colors, versatile mediums, and boundless imagination. Find everything you need to bring your artistic visions to life
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/register" className="btn btn-primary text-white font-bold hover:text-white sm:text-lg">
                Get Started
              </Link>
              <a href="#properties" className="btn bg-indigo-500 text-slate-100 hover:bg-indigo-600 border-none hover:text-slate-100 font-bold sm:text-lg">
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://images.unsplash.com/photo-1615463738213-b9381d217b4e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
          <div className="w-full h-full bg-indigo-950 bg-opacity-40 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-5xl max-sm:px-1 lg:text-6xl font-bold text-center max-w-5xl font-kufam mb-4">
              Unleash Your Creative Potential at Craft_Studio
            </h1>
            <p className="text-white text-opacity-90 max-w-xl lg:max-w-3xl sm:text-xl max-sm:px-4 font-medium font-kufam text-center">
              Explore a world of vibrant colors, versatile mediums, and boundless imagination. Find everything you need to bring your artistic visions to life
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/register" className="btn btn-primary text-white font-bold hover:text-white sm:text-lg">
                Get Started
              </Link>
              <a href="#properties" className="btn bg-indigo-500 text-slate-100 hover:bg-indigo-600 border-none hover:text-slate-100 font-bold sm:text-lg">
                Explore
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Homepage;
