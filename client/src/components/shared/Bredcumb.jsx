
import Container from "./Container";
import { Link } from "react-router-dom";


const Bredcumb = () => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    return (
        <div className="bg-[#F0F2F3]">
            <Container>
                <div className='py-8  md:py-[50px]'>
                    

                     <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-[#636270] font-inter text-[14px] font-normal leading-[1.1] tracking-normal text-center capitalize'>
                            <Link to='/' className="text-sm md:text-xl" >Home</Link>
                            {pathSegments[0] && (
                                <>
                                    <span className="mx-1 md:mx-2"> - </span>
                                    <Link to={`/${pathSegments[0]}`} className="text-sm md:text-xl">
                                        {pathSegments[0]}
                                    </Link>
                                </>
                            )}
                            {pathSegments[1] && (
                                <>
                                    <span className="mx-1 md:mx-2"> - </span>
                                    <Link to={`/${pathSegments[0]}/${pathSegments[1]}`} className="text-[#272343] font-inter text-[14px] font-medium leading-[1.1] tracking-normal text-center capitalize" >
                                        {pathSegments[1]}
                                    </Link>
                                </>
                            )}
                        </li>
                    </ul>
                    <h2 className='text-[#272343] font-inter text-[24px] font-semibold leading-[1.1] tracking-normal text-left capitalize mt-[14px]'> {pathSegments[0] ? pathSegments[0] : "Home"} </h2>
                </div>
            </Container>
        </div>
    );
};

export default Bredcumb;