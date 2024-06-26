import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";

export const SwiperComponent = ({swiperImage, handleChange}) => {
    return(
        <div className='main'>
            <Swiper
            centeredSlides
            pagination
            effect={"coverflow"}
            navigation
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShows: true
            }}
            modules={[Navigation,Pagination,EffectCoverflow]}
            spaceBetween={10}
            slidePreView = {3}
            onTransitionEnd={handleChange}
            >
                {swiperImage.map(item =>
                    <SwiperSlide key = {item}>
                        <img  style={{ width: '500px', height: '200px', objectFit: 'cover'}} src={item.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}