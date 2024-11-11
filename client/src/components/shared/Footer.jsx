import { Link } from "react-router-dom";
import Container from "./Container";
import { FaFacebookF, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="mt-[100px] mb-[50px]">
            <Container>
                <div className="flex justify-between flex-wrap gap-6">


                    <div className="max-w-[312px]">
                        <img src="/Logo.png" alt="eDex logo" />
                        <p className="text-[#272343] font-inter text-[16px] font-normal leading-[24px] my-6">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                            Cras egestas purus </p>

                        <div className=" flex gap-2 items-center ">
                            <Link to="#" className="border border-[#007580] text-[#007580] rounded-full p-[11px] hover:bg-[#007580] hover:text-white transition-all duration-500"><FaFacebookF /></Link>
                            <Link to="#" className="border border-[#007580] text-[#007580] rounded-full p-[11px] hover:bg-[#007580] hover:text-white transition-all duration-500"><FaTwitter /></Link>
                            <Link to="#" className="border border-[#007580] text-[#007580] rounded-full p-[11px] hover:bg-[#007580] hover:text-white transition-all duration-500"><FaInstagramSquare /></Link>
                            <Link to="#" className="border border-[#007580] text-[#007580] hover:bg-[#007580] hover:text-white rounded-full  p-[11px] transition-all duration-500"><FaLinkedin /></Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[#9a9caa] font-inter text-[14px] font-medium leading-[1.1] tracking-[6%] text-left uppercase ">Category</h4>
                        <ul>
                            <li className="mt-3"><Link to="#" className="text-[#272343] hover:text-[#007580] hover:underline transition-all duration-500  font-inter text-[16px] font-normal leading-[1.1] ">Sofa</Link></li>
                            <li className="mt-3"><Link to="#" className="text-[#272343] hover:text-[#007580] hover:underline transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">Armchair</Link></li>
                            <li className="mt-3"><Link to="#" className="text-[#272343] hover:text-[#007580] hover:underline transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">Desk Chair</Link></li>
                            <li className="mt-3"><Link to="#" className="text-[#272343] hover:text-[#007580] hover:underline transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">wooden Chair</Link></li>
                            <li className="mt-3"><Link to="#" className="text-[#272343] hover:text-[#007580] hover:underline transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">Park Bench</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[#9a9caa] font-inter text-[14px] font-medium leading-[1.1] tracking-[6%] text-left uppercase">Support</h4>
                        <ul>
                            <li className="mt-3"><Link to="#" className="text-[#272343] hover:text-[#007580] hover:underline transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1]  ">Help & Support</Link></li>
                            <li className="mt-3"><Link to="#" className="text-[#272343] hover:text-[#007580] hover:underline transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1]">Tearms & Conditions</Link></li>
                            <li className="mt-3"><Link to="#" className="text-[#272343] hover:text-[#007580] hover:underline transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">Privacy Policy</Link></li>
                            <li className="mt-3"><Link to="#" className="text-[#272343] hover:text-[#007580] hover:underline transition-all duration-500 font-inter text-[16px] font-normal leading-[1.1] ">Help</Link></li>

                        </ul>
                    </div>
                    <div className="max-w-[424px]">
                        <h4 className="text-[#9a9caa] font-inter text-[14px] font-medium leading-[1.1] tracking-[6%] text-left uppercase ">Subscribe</h4>
                        <div className="flex gap-3 mt-5">
                    
                            <input type="text" name="" id="" placeholder="Email here" className=" w-full text-[#9a9caa] font-inter text-[16px] font-normal leading-[1] border border-[#e1e3e6] rounded-lg bg-white outline-0 py-[15px] px-5" />
                            <button className="py-[15px] px-5 bg-[#20b486] text-white hover:text-[#20b486] border border-[#20b486] hover:bg-white rounded-lg  transition-all duration-500">Subscribe</button>
                    
                           
                        </div>
                        <p className="text-[#272343] font-inter text-[15px] font-normal leading-[1.5] mt-[15px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;