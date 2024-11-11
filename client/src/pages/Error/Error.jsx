
import Navbar from '../../components/shared/Navbar';
import Footer from "../../components/shared/Footer";
import Container from '../../components/shared/Container';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <div className='py-12 flex justify-center items-center flex-col'>
                <h1 className='text-center text-[2rem] font-bold'>Error 404</h1>
                <p className='text-center text-[1.4rem]'>The page you{`'`}re looking for could not be found.</p>
                <Link to='/' className='text-center text-[1.4rem] font-semibold py-2 px-3 border bg-[#008156] text-white rounded-[8px] mt-8'>Back to Home</Link>
           
                </div>
               
            </Container>
           
            <Footer/>
        </div>
    );
};

export default Error;