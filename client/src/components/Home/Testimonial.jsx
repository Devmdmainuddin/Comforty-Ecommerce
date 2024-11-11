import Container from "../shared/Container";
import Image from "../shared/Image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import '../../style/swipers.css'
import {Autoplay, Navigation } from 'swiper/modules';

const Testimonial = () => {
    const testimonial = [
        {
            "name": "Alice Johnson",
            "image": "/user.jpg",
            "department": "Marketing",
            "description": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
        },
        {
            "name": "David Lee",
            "image": "/user.jpg",
            "department": "Product Development",
            "description": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
        },
        {
            "name": "Sophia Carter",
            "image": "/user.jpg",
            "department": "Customer Support",
            "description": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
        },
        {
            "name": "James White",
            "image": "/user.jpg",
            "department": "Human Resources",
            "description": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
        },
        {
            "name": "Linda Brown",
            "image": "/user.jpg",
            "department": "Finance",
            "description": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
        },
        {
            "name": "Michael Green",
            "image": "/user.jpg",
            "department": "IT",
            "description": "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“"
        }
    ]
    return (
        <div className="bg-[#F0F2F3] py-[84px]">
            <Container className="overflow-hidden">
                <div>
                    <h2 className="text-[#272343] font-inter text-[32px] font-semibold leading-[1.1] tracking-normal text-left capitalize">What client says about us</h2>

                    <div className=" mt-[45px]">

                   

                        <Swiper
                            loop={true}
                            navigation={true}
                            modules={[Navigation,Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },

                                768: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },
                               
                            }}
                            spaceBetween={24}
                            className="mySwiper featured  mt-[46px] "
                        >
                            <div className="flex flex-wrap justify-center gap-6 ">
                                {testimonial.map((item, idx) => <SwiperSlide key={idx}>
                                    <div className="shadow-[0px_8px_40px_0px_rgba(39,35,67,0.08)] rounded-[12px] bg-white p-10">
                                        <p className="border-l border-[#007580] text-[#636270] font-inter text-[20px] font-normal leading-[1.5] tracking-normal text-left capitalize pl-6">{item.description}</p>
                                        <div className="flex justify-between items-center mt-7">
                                            <div className="flex items-center   gap-3">
                                                <div className="w-[60px] h-[6opx] rounded-full">
                                                    <Image src={item.image} className='rounded-full'></Image>
                                                </div>

                                                <div>
                                                    <h4 className="text-[#272343] font-inter text-[20px] font-medium leading-[1.4] tracking-normal  capitalize">{item.name}</h4>
                                                    <span className="text-[#9a9caa] font-inter text-[16px] font-normal leading-[1.4] tracking-normal  capitalize mt-1">{item.department}</span>
                                                </div>
                                            </div>
                                            <div className="w-[96px] h-[75px]">
                                                <Image src='/qa.png' className=''></Image>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>)}
                            </div>



                        </Swiper>

                    </div>
                </div>


            </Container>
        </div>
    );
};

export default Testimonial;