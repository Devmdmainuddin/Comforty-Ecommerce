import { FaCartArrowDown, FaRegHeart } from "react-icons/fa6";
import Image from "../shared/Image";

const FeaturedCard = ({item}) => {
    const{image,title,price,status}=item;
    return (
        <div className="">
            <div className="image  h-[312px] rounded-[8px] relative ">
            {status && <span className={`py-[6px] px-[10px] absolute top-5 left-5 rounded-[4px] text-white ${status=== 'new'?'bg-[#01AD5A]':'bg-[#F5813F]'}`}>{status}</span>}
                <Image src={image} className='rounded-[8px]'></Image>
                <span className="w-[44px] h-[44px] p-[11px] bg-white text-[#272343] hover:bg-[#029FAE] hover:text-white flex justify-center items-center absolute top-5 right-5 rounded-[8px] transition-all duration-500"><FaRegHeart /></span>
            </div>
            <div className="content flex justify-between items-center mt-[14px] ">
                <div>
                <h2 className=" hover:text-[#007580] text-[#272343] font-inter text-[16px] font-normal leading-[1.3] tracking-normal text-left capitalize transition-all duration-500">{title}</h2>
                <p className="text-[#272343] font-inter text-[18px] font-semibold leading-[1.1] tracking-normal text-left capitalize mt-2.5">{price}</p>
               
                </div>
                <button className="w-[44px] h-[44px] p-[11px] bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white text- flex justify-center items-center  rounded-[8px] transition-all duration-500"><FaCartArrowDown /></button>
            </div>
        </div>
    );
};

export default FeaturedCard;