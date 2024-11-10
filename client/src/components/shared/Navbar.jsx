import { useEffect, useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Image from "./Image";
import { TfiHelpAlt } from "react-icons/tfi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaCartArrowDown, FaCheck, FaRegHeart, FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
// IoMdClose,
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [proOpen, setProOpen] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Shop',
            path: '/shop'
        },
        {
            title: 'Product',
            path: '/product'
        },
        {
            title: 'Pages',
            path: '/pages'
        },
        {
            title: 'About',
            path: '/about'
        }
    ]
    useEffect(() => {
        function resize() {
            if (window.innerWidth < 767.99) {
                setProOpen(false)
                setShowMenu(false)
            }
        }
        resize()
        window.addEventListener("resize", resize)
    }, [])
    return (
        <div className="z-20">
            <div className="py-[14px] bg-[#272343] ">
                <Container>
                    <div className="flex justify-between items-center">
                        <p className="text-[#BEBDC6] font-inter text-[13px] font-normal leading-[1.1] tracking-normal text-left capitalize flex gap-2 items-center"> <span><FaCheck /></span>Free shipping on all orders over $50</p>
                        <div className="flex gap-6 items-center">

                            <select name="" id="" className="text-[#BEBDC6] font-inter text-[13px] font-normal leading-[1.3] bg-transparent">
                                <option value="Eng">Eng</option>
                                <option value="Ban">Ban</option>
                                <option value="Hin">Hin</option>
                            </select>
                            <Link className="text-[#BEBDC6] font-inter text-[13px] font-normal leading-[1.3]">Faqs</Link>
                            <span className="text-[#BEBDC6] font-inter text-[13px] font-normal leading-[1.3] flex gap-2 items-center"> <span><TfiHelpAlt /></span>Need Help</span>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="py-5 bg-[#F0F2F3]">
                <Container>
                    <div className="flex justify-between items-center gap-12 md:gap-4">
                        <div>
                            <div className="logo w-[166px] h-[40px]">
                                <Image src='/Logo.png' alt='logo'></Image>
                            </div>
                        </div>

                        <div className="search relative w-full md:w-auto">
                            <input type="text" name="" id="" placeholder="Search here..." className="text-[#9a9caa] font-inter text-[16px] font-normal leading-[1.2] py-3 px-4 rounded-[5px] w-full lg:w-[413px] outline-0" />
                            <span className="absolute top-1/2 -translate-y-1/2 right-5"><CiSearch className="text-[#272343]" /></span>
                        </div>

                        <div className="icons md:flex gap-6 items-center hidden">
                            <div className="icon flex items-center w-[120px] h-[44px] bg-white rounded-[8px] gap-3 justify-center ">
                                <span className="text-[#272343] flex items-center gap-2 "><FaCartArrowDown /> Cart</span>
                                <div>
                                    <span className="w-5 h-5 py-[5px] px-[7px] bg-[#007580] text-white rounded-full">2</span>
                                </div>

                            </div>
                            <div className="icon w-[44px] h-[44px] bg-white rounded-[8px] flex justify-center items-center">
                                <span className="text-[#272343]"><FaRegHeart /></span>

                            </div>
                            <div className="icon w-[44px] h-[44px] bg-white rounded-[8px] flex justify-center items-center">
                                <span className="text-[#272343]"><FaRegUser /></span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="relative z-10 shadow-md w-full  duration-300 py-[14px]" >
                <Container className=''>

                    <div className="flex items-center justify-between ">
                        <div className="flex gap-8 items-center">
                            <div className="flex gap-2 items-center border border-[#e1e3e6] rounded-[6px] py-4 px-6">
                                <span><FiMenu /></span>
                                <h3>All Categories</h3>
                            </div>

                            <nav className="hidden md:inline-block">
                                <ul className={`flex gap-8 items-center`}>
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.path}>{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Profile */}
                        <div className=" hidden md:inline-block">
                            <p className="text-[#636270] font-inter text-[14px] font-normal  ">Contact: <span className="text-[#272343] ">(808) 555-0111</span></p>
                        </div>
                        {/* Hamburger */}
                        <div className="flex items-center gap-4 md:hidden ">
                            {showMenu ? (
                                <HiMenuAlt1
                                    onClick={toggleMenu}
                                    className=" cursor-pointer transition-all"
                                    size={30}
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className="cursor-pointer transition-all"
                                    size={30}
                                />
                            )}
                        </div>

                    </div>


                    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[278px] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-500 md:hidden rounded-r-xl shadow-md`} >
                        <div className="card">
                            <div className="logo w-[166px] h-[40px]">
                                <Image src='/Logo.png' alt='logo'></Image>
                            </div>
                            <div className="icons flex gap-2 items-center my-4">
                                <div className="icon flex items-center w-[120px] h-[44px] bg-[#c2e1e4] rounded-[8px] gap-3 justify-center ">
                                    <span className="text-[#272343] flex items-center gap-2 "><FaCartArrowDown /> Cart</span>
                                    <div>
                                        <span className="w-5 h-5 py-[5px] px-[7px] bg-[#007580] text-white rounded-full">2</span>
                                    </div>

                                </div>
                                <div className="icon w-[44px] h-[44px] bg-[#c2e1e4] rounded-[8px] flex justify-center items-center">
                                    <span className="text-[#272343]"><FaRegHeart /></span>

                                </div>
                                <div className="icon w-[44px] h-[44px] bg-[#c2e1e4] rounded-[8px] flex justify-center items-center">
                                    <span className="text-[#272343]"><FaRegUser /></span>
                                </div>
                            </div>
                            <nav>
                                <ul className={`space-y-4 text-lg`}>
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.path} className="mb-2 inline-block">{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>





                        </div>
                        <div className="footer">

                        </div>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default Navbar;