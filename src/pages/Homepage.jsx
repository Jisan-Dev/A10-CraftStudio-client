// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link, useLoaderData } from 'react-router-dom';
import ArtCard from '../components/ArtCard';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const [categories, setCategories] = useState([]);
  const allProducts = useLoaderData();
  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((categories) => {
        setCategories(categories);
        console.log(categories);
      });
  }, []);
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

      <section className="my-24">
        <header>
          <h1 className="text-4xl font-bold text-center mb-2">Craft Items</h1>
          <p className="text-center text-xl text-base-content font-medium mb-4">Find the best craft and art items you need</p>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allProducts.map((product) => (
            <ArtCard key={product._id} product={product} />
          ))}
        </main>
      </section>

      <section className="my-24">
        <header>
          <h1 className="text-4xl font-bold text-center mb-2">Art & Craft Categories</h1>
          <p className="text-center text-xl text-base-content font-medium mb-4">Find the best craft and art items you need</p>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category._id} className="block rounded-lg p-4 shadow-sm shadow-primary border-t border-t-primary font-gsans cursor-pointer">
              <div>
                <img src={category.image} className="h-56 w-full rounded-md object-cover" />
              </div>
              <h2 className="font-semibold text-primary mt-2">{category.subcategory_name}</h2>
            </div>
          ))}
        </main>
      </section>

      {/* testimonials */}
      <section>
        <section className="bg-base-100 text-base-content">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-5">
              <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 className="text-4xl font-bold">What everyone is saying about us</h2>
                <p className="text-base-content">
                  Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.
                </p>
              </div>
              <div className="p-6 xl:col-span-3">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-lg bg-base-200">
                      <p>
                        An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea
                        sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm text-gray-600">CTO of Company Co.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-lg bg-base-200">
                      <p>
                        Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius
                        consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm text-gray-600">CTO of Company Co.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-lg bg-base-200">
                      <p>
                        Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis scripserit ea his, ut nec postea verear
                        persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent
                        appetere ea.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm text-gray-600">CTO of Company Co.</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-lg bg-base-200">
                      <p>
                        Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum
                        per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim
                        sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm text-gray-600">CTO of Company Co.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* newsletter */}
      <section>
        <section className="py-6 bg-base-100 text-base-content">
          <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
              <p className="text-lg max-w-[700px]">
                Want to stay in touch? Then you should subscribe to our newsletter and get every informations and every updates in your email. Do it now!
              </p>
            </div>
            <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
              <div className="flex flex-row">
                <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-primary text-gray-50">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Homepage;
