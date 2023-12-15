
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
// ** images ** 
import r from '../../assets/img/Recent.webp'
import r2 from '../../assets/img/recent 2.jpg'
import r3 from '../../assets/img/recent 3.jpg'
import r4 from '../../assets/img/recent 4.jpg'
import r5 from '../../assets/img/recent 5.jpg'
import r6 from '../../assets/img/recent 6.jpg'
const Recent = () => {
    return (
        <div className="my-20 max-w-[1000px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
         <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={r} className='h-96 lg:w-full' alt="" /></SwiperSlide>
        <SwiperSlide><img src={r2} className='h-96 lg:w-full' alt="" /></SwiperSlide>
        <SwiperSlide><img src={r3} className='h-96 lg:w-full' alt="" /></SwiperSlide>
        <SwiperSlide><img src={r4} className='h-96 lg:w-full' alt="" /></SwiperSlide>
        <SwiperSlide><img src={r5} className='h-96 lg:w-full' alt="" /></SwiperSlide>
        <SwiperSlide><img src={r6} className='h-96 lg:w-full' alt="" /></SwiperSlide>
      </Swiper>
            <div className="mt-10 flex justify-center items-center">
                <button className="btn btn-outline text-black">View More Content</button>
            </div>
        </div>
    );
};

export default Recent;