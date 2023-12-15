// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// *images*
import img1 from "../../assets/img/img2.jpg";
import img2 from "../../assets/img/img3.jpg";
import img3 from "../../assets/img/img4.jpg";
import logo1 from "../../assets/img/Logomark.png";
import logo2 from "../../assets/img/Logotype.png";

const Review = () => {
  return (
    <div className="my-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero lg:h-[50vh] bg-base-200">
        
            <div className="hero-content text-center">
              
              <div >
              <div className="flex justify-center items-center gap-3 mb-5">
                    <img src={logo1} className="w-5" alt="" />
                    <img src={logo2} alt="" />
                </div>
                <h1 className="text-5xl font-bold">We’ve been with unicraft to kick start every new project  and can’t imagine working without it.</h1>
                <div className=" flex justify-center items-center my-4">

                <img src={img1} className="w-16 h-16 rounded-full" alt="" />
                </div>
               <p className="font-semibold">Candice Wu</p>
               <p className="text-gray-400">Product Manager, Sisyphus</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero lg:h-[50vh] bg-base-200">
        
            <div className="hero-content text-center">
              
              <div >
              <div className="flex justify-center items-center gap-3 mb-5">
                    <img src={logo1} className="w-5" alt="" />
                    <img src={logo2} alt="" />
                </div>
                <h1 className="text-5xl font-bold">We’ve been with unicraft to kick start every new project  and can’t imagine working without it.</h1>
                <div className=" flex justify-center items-center my-4">

                <img src={img2} className="w-16 h-16 rounded-full" alt="" />
                </div>
               <p className="font-semibold">Candice Wu</p>
               <p className="text-gray-400">Product Manager, Sisyphus</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero lg:h-[50vh] bg-base-200">
        
            <div className="hero-content text-center">
              
              <div >
              <div className="flex justify-center items-center gap-3 mb-5">
                    <img src={logo1} className="w-5" alt="" />
                    <img src={logo2} alt="" />
                </div>
                <h1 className="text-5xl font-bold">We’ve been with unicraft to kick start every new project  and can’t imagine working without it.</h1>
                <div className=" flex justify-center items-center my-4">

                <img src={img3} className="w-16 h-16 rounded-full" alt="" />
                </div>
               <p className="font-semibold">Candice Wu</p>
               <p className="text-gray-400">Product Manager, Sisyphus</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default Review;
