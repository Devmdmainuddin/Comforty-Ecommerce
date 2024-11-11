
import Categories from '../../components/Home/Categories';
import Featured from '../../components/Home/Featured';
import Hero from '../../components/Home/Hero';
import OurProducts from '../../components/Home/OurProducts';
import Partner from '../../components/Home/Partner';
import RecentlyAdded from '../../components/Home/RecentlyAdded.JSX';
import Testimonial from '../../components/Home/Testimonial';

const Home = () => {
    return (
        <div className='bg-[#FFFFFF]'>
          <Hero/>
          <Partner></Partner>
          <Featured/>
          <Categories/>
          <OurProducts/>
          <Testimonial/>
          <RecentlyAdded/>
        </div>
    );
};

export default Home;