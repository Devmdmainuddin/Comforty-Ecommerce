
import Featured from '../../components/Home/Featured';
import Hero from '../../components/Home/Hero';
import Partner from '../../components/Home/Partner';

const Home = () => {
    return (
        <div className='bg-[#FFFFFF]'>
          <Hero/>
          <Partner></Partner>
          <Featured/>
        </div>
    );
};

export default Home;