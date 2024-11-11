
import Container from "../shared/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import '../../style/swipers.css'
import { Navigation } from 'swiper/modules';
import CategoriesCard from "../card/CategoriesCard";
const Categories = () => {
    const Featured = [
        {
            title: "Wing Chair",
            image: "/card1.jpg",
            totalCount:'220',
        },
        {
            title: "Wooden Chair",
            image: "/card1.jpg",
            totalCount:'250',
        },
        {
            title: "Desk Chair",
            image: "/card2.jpg",
            totalCount:'500',
        },
        {
            title: "Park Bench",
            image: "/card3.jpg",
            totalCount:'312',
        },
        {
            title: "Wing Chair",
            image: "/card4.jpg",
            totalCount:'102',
        }, {
            title: "Desk Chair",
            image: "/card5.jpg",
            totalCount:'112',
        }
    ]
    return (
        <div className="my-[85px]">
        <Container className="overflow-hidden">
            <h2 className="text-[#272343] font-inter text-[32px] font-semibold leading-[1.1] tracking-normal text-left capitalize">Top categories</h2>
            
            <Swiper
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                       
                        703: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        1040: {
                            slidesPerView: 3,
                            slidesPerGroup: 1,
                        },
                        1240: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                        },
                    }}
                    spaceBetween={24}
                    className="mySwiper featured  mt-[46px]"
                >
                    <div className="flex flex-wrap justify-center gap-6 ">
                {Featured.map((item, idx) =><SwiperSlide  key={idx}>
                    <CategoriesCard item={item} />
                    </SwiperSlide> )}
            </div>
                    
                 

                </Swiper>
        </Container>

    </div>
    );
};

export default Categories;