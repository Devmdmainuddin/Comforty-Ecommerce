import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination } from 'swiper/modules';
import { FaArrowRightLong } from 'react-icons/fa6';
import Container from '../shared/Container';
import Image from '../shared/Image';
import '../../style/swipers.css'
const Hero = () => {
    const hero=[
        {
            image: '/hero.png',
            title: 'Best Furniture Collection for your interior'
        },
        {
            image: '/hero.png',
            title: 'Flash Sale! Get the Best Deals Before They’re Gone!',
            sortDescaption:'Welcome to chairy'
        },
        {
            image: '/hero.png',
            title: 'Save More, Shop More: Exclusive Discounts Inside!',
            sortDescaption:'Welcome to chairy'
        },
        {
            image: '/hero.png',
            title: 'Your Favorite Products, Now at Special Discounted Prices!',
             sortDescaption:'Welcome to chairy'
        },
        {
            image: '/hero.png',
            title: 'Get It Before It’s Gone! Limited Discounts Available Now!',
            sortDescaption:'Welcome to chairy',
            discount:'25'
        },
        {
            image: '/hero.png',
            title: 'Big Savings Await! Explore Today’s Best Discount Deals!',
           sortDescaption:'Welcome to chairy',
           discount:'20'
        },
    ]
    return (
        <div className=' relative bg-[#F0F2F3] z-0'>
            <Container>
                <div className='relative  '>
                    <Swiper
                        loop={true}
                        navigation={true}
                        pagination={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        modules={[Navigation,Autoplay, Pagination]}
                        className="mySwiper hero h-auto md:h-[850px]"
                    >
                        {hero.map((item,idx)=><SwiperSlide key={idx}>
                            <div className='py-[82px] flex gap-6 flex-wrap flex-col md:flex-row items-center justify-between relative overflow-hidden h-auto md:h-[850px]'>
                                <div className="content max-w-[631px] z-10 mx-auto">
                                    <h3 className='text-[#272343] font-inter text-[14px] font-normal leading-[1] tracking-[0.12em] text-left uppercase'>{item.sortDescaption}</h3>
                                    <h1 className='text-[#272343] font-inter text-[68px] font-bold leading-[1.1] tracking-normal text-left capitalize mt-2'>{item.title}</h1>
                                    <button className='bg-[#029FAE] text-white font-inter text-[16px] font-semibold leading-[1.1] tracking-normal text-center capitalize py-4 px-6 rounded-[8px] flex gap-6 items-baseline mt-6'>Shop Now <span><FaArrowRightLong /></span></button>
                                </div>
                                <div className="image z-10 w-full h-auto md:w-[475px] md:h-[649px] mb-6 mr-6 relative mx-auto">
                                    <Image src={item.image}></Image>
                                    <div className='w-[100px] h-[100px] md:w-[140px] md:h-[125px] rounded-full bg-white text-[#272343] absolute right-0 top-0 flex justify-center items-center flex-col'>
                                        <span className='text-[#f05c52] font-inter text-[36px] font-bold leading-[1.1] tracking-normal text-center'> 45% </span>
                                        <p className='text-[#272343] font-inter text-[14px] font-medium leading-[1.1] tracking-[0.02em]'>Discount</p>
                                    </div>
                                </div>
                                <div className='md:w-[747px] sm:w-[476px] w-[322px] h-[322px] sm:h-[476px] md:h-[747px] rounded-full bg-[#E0E3E6] absolute top-1/2 -translate-y-1/2 md:translate-y-0 md:-top-[25%] md:right-0 z-0'></div>
                            </div>
                        </SwiperSlide>)}
                      
                        

                    </Swiper>

                    <div className=" absolute left-1/2 bottom-0 transform translate-x-[-50%] translate-y-[50%] w-full  bg-white z-20  rounded-[10px] shadow-[rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]" >
                        <div className='flex flex-wrap items-center gap-4 md:gap-[60px] justify-center p-6 lg:py-[50px] lg:px-[70px]'>
                            <div className='flex gap-4'>
                              <div className="image w-[43px] h-[46px]">
                                <Image src='/box.png'></Image>
                              </div>
                              <div className="content">
                                <h2 className='text-[#272343] font-inter text-[18px] font-medium leading-[1.1] tracking-normal text-left capitalize'>Discount</h2>
                                <p className='text-[#9a9caa] font-inter text-[15px] font-normal leading-[1.1]'>Every week new sales</p>
                              </div>
                            </div>
                            <div className='flex gap-4'>
                              <div className="image w-[43px] h-[46px]">
                                <Image src='/box.png'></Image>
                              </div>
                              <div className="content">
                                <h2 className='text-[#272343] font-inter text-[18px] font-medium leading-[1.1] tracking-normal text-left capitalize'>Discount</h2>
                                <p className='text-[#9a9caa] font-inter text-[15px] font-normal leading-[1.1]'>Every week new sales</p>
                              </div>
                            </div>
                            <div className='flex gap-4'>
                              <div className="image w-[43px] h-[46px]">
                                <Image src='/box.png'></Image>
                              </div>
                              <div className="content">
                                <h2 className='text-[#272343] font-inter text-[18px] font-medium leading-[1.1] tracking-normal text-left capitalize'>Discount</h2>
                                <p className='text-[#9a9caa] font-inter text-[15px] font-normal leading-[1.1]'>Every week new sales</p>
                              </div>
                            </div>
                            <div className='flex gap-4'>
                              <div className="image w-[43px] h-[46px]">
                                <Image src='/box.png'></Image>
                              </div>
                              <div className="content">
                                <h2 className='text-[#272343] font-inter text-[18px] font-medium leading-[1.1] tracking-normal text-left capitalize'>Discount</h2>
                                <p className='text-[#9a9caa] font-inter text-[15px] font-normal leading-[1.1]'>Every week new sales</p>
                              </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </Container>


        </div>
    );
};

export default Hero;