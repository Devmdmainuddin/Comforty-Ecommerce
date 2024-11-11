import FeaturedCard from "../card/FeaturedCard";
import Container from "../shared/Container";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/navigation';
import '../../style/swipers.css'
import { Navigation } from 'swiper/modules';

const RecentlyAdded = () => {
    const Featured = [
        {
            title: "Library Stool Chair",
            image: "/card1.jpg",
            price: "$120.00",
            status: "new",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate orci non turpis ultricies, at consectetur turpis tristique. Sed non felis et ipsum tincidunt suscipit."
        },
        {
            title: "Library Stool Chair",
            image: "/card1.jpg",
            price: "$180.00",
            status: "new",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate orci non turpis ultricies, at consectetur turpis tristique. Sed non felis et ipsum tincidunt suscipit."
        },
        {
            title: "Library Stool Chair",
            image: "/card2.jpg",
            price: "$220.00",
            status: "sales",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate orci non turpis ultricies, at consectetur turpis tristique. Sed non felis et ipsum tincidunt suscipit."
        },
        {
            title: "Library Stool Chair",
            image: "/card3.jpg",
            price: "$260.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate orci non turpis ultricies, at consectetur turpis tristique. Sed non felis et ipsum tincidunt suscipit."
        },
        {
            title: "Library Stool Chair",
            image: "/card4.jpg",
            price: "$300.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate orci non turpis ultricies, at consectetur turpis tristique. Sed non felis et ipsum tincidunt suscipit."
        }, {
            title: "Library Stool Chair",
            image: "/card5.jpg",
            price: "$340.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate orci non turpis ultricies, at consectetur turpis tristique. Sed non felis et ipsum tincidunt suscipit."
        }
    ]
    return (
        <div className="my-[84px]">
        <Container className="overflow-hidden">
            <h2 className="text-[#272343] font-inter text-[32px] font-semibold leading-[1.1] tracking-normal text-left capitalize">Recently Added</h2>
            
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
                    <FeaturedCard item={item} />
                    </SwiperSlide> )}
            </div>
                    
                 

                </Swiper>
        </Container>

    </div>
    );
};

export default RecentlyAdded;