import Image from "../shared/Image";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa6";

const CategoriesCard = ({ item }) => {
    const { image, title, totalCount } = item;
    return (
        <div className="relative">
            <div className="image  h-[312px] rounded-[8px]  ">
                <Image src={image} className='rounded-[8px]'></Image>
            </div>
            <div className=" content absolute bottom-0 left-0 w-full  p-5 bg-[#2c302985] rounded-bl-[8px] rounded-br-[8px]">
                <div>
                    <h2 className="text-white font-inter text-[20px] font-semibold leading-[1.1] tracking-normal text-left capitalize">{title}</h2>
                    <p className="text-white font-inter text-[14px] font-normal leading-[1.1] tracking-normal text-left capitalize mt-2"><span> {totalCount}</span> products</p>
                </div>

            </div>
        </div>
    );
};

export default CategoriesCard;