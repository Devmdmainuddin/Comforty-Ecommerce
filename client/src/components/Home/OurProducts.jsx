// import { useState } from "react";
import Container from "../shared/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import FeaturedCard from "../card/FeaturedCard";
const OurProducts = () => {
    // const [activeTab, setActiveTab] = useState('featured');


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
        <div className="py-[84px]">
            <Container>
                <h2 className="text-[#272343] font-inter text-[32px] font-semibold leading-[1.1] tracking-normal text-center capitalize ">Our Products</h2>
                <div className='flex justify-center mt-6'>
                    <Tabs>
                        <TabList className=" flex gap-4 items-center justify-center flex-wrap text-xl ">
                            <Tab  className=' text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b p-3 border-white'>All</Tab>
                            <Tab className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b p-3 border-white'>Newest</Tab>
                            <Tab  className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b p-3 border-white'>Trending</Tab>
                            <Tab  className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b p-3 border-white'>Best Sellers</Tab>
                            <Tab  className='text-[#151875] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b p-3 border-white'>Featured</Tab>
     
                        </TabList>

                        <TabPanel >
                            <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-10'>
                                {Featured?.slice(0, 3).map((item, idx) => <FeaturedCard key={idx} item={item}></FeaturedCard>)}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-[58px]'>
                               <p className='text-2xl my-6 text-center capitalize'>no product </p>
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-[58px]'>
                                {Featured?.slice(0, 3).map((item, idx) => <FeaturedCard key={idx} item={item}></FeaturedCard>)}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-[58px]'>
                                {Featured?.slice(0, 3).map((item, idx) => <FeaturedCard key={idx} item={item}></FeaturedCard>)}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className='flex gap-[37px] flex-wrap justify-center mx-auto mt-10'>
                                {Featured?.slice(0, 3).map((item, idx) => <FeaturedCard key={idx} item={item}></FeaturedCard>)}
                            </div>
                        </TabPanel>
                        
                    </Tabs>

                </div>
            </Container>
        </div>
    );
};

export default OurProducts;