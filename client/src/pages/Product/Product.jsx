import FeaturedCard from "../../components/card/FeaturedCard";
import Bredcumb from "../../components/shared/Bredcumb";
import Container from "../../components/shared/Container";


const Product = () => {
    const Featured = [

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
        <div className="">
            <Bredcumb />
            <Container>
                <div className="flex flex-wrap justify-center pt-[85px] gap-6">
                    {Featured?.map((item, idx) => <FeaturedCard key={idx} item={item}></FeaturedCard>)}
                </div>
            </Container>

        </div>
    );
};

export default Product;