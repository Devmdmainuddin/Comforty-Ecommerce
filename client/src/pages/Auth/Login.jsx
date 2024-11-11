import { useState } from "react";
import { Link } from "react-router-dom";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";
import { FaEye, FaLongArrowAltRight } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';

const Login = () => {
    const [showpassword, setshowpassword] = useState(null)
    return (
        <div>
           <Bredcumb></Bredcumb>
            <Container>
                <div className='mt-16 md:mt-[120px] '>
                    <div className='w-full md:w-[648px] p-8 mx-auto rounded-xl shadow-[0px_0px_30px_0px_rgba(39,35,67,0.12)]' >
                        <h2 className='text-[#272343] font-inter text-[32px] font-semibold leading-[1.1] tracking-normal text-center capitalize'>Sign In</h2>
                        <p className='text-[#9096B2] text-lg font-josefin font-normal text-center'>Please login using account detail bellow.</p>
                        <form  action="" >
                            <div className='flex flex-col mt-9'>
                                <input type="email" name='email' placeholder='Email Address' className='w-full outline-0 mt-6 py-[17px] px-5 bg-[#F0F2F3] rounded-[8px] text-[#9a9caa] font-inter text-[16px] font-normal leading-[1]' />
                                <div className='relative mt-4'>
                                    <input type={showpassword ? "text" : "password"} name='password' placeholder='Password' className='w-full outline-0  py-[17px] px-5 bg-[#F0F2F3] rounded-[8px] text-[#9a9caa] font-inter text-[16px] font-normal leading-[1]' />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setshowpassword(!showpassword)}>
                                        {showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center mt-4">
                            <input type="checkbox" name="remenber" id="" />
                            <label htmlFor="remenber" className='text-[#9a9caa] font-inter text-[14px] font-normal leading-[1.1] tracking-normal'>Remember Me</label>
                            </div>
                        
                            <button className=" mt-6 w-full  text-[16px] font-josefin font-semibold py-[17px]  bg-[#029FAE] text-white   capitalize rounded-lg flex justify-center items-center gap-3">Sign In <FaLongArrowAltRight /></button>

                            
                        </form>
                        <Link to='/myAccount/registation' className='flex justify-center items-center mt-6'>  <button className='text-[#272343] font-inter text-[14px] font-normal leading-[1.1]'>Don’t have an Account? <span className='text-[#007580] font-inter text-[14px] font-medium leading-[1.1]'>Create account</span> </button></Link>
                        
                           
                            
                    </div>
                </div>
            </Container> 
        </div>
    );
};

export default Login;