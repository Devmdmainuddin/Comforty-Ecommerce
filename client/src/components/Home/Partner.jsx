import Container from '../shared/Container';
import Image from '../shared/Image';

const Partner = () => {
    return (
        <div className='mt-[101px] '>
            <Container>
                <div className='flex flex-wrap justify-evenly items-center gap-8 '>
                    <div>
                        <div>
                            <Image src='/p1.png'></Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src='/p2.png'></Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src='/p3.png'></Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src='/p4.png'></Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src='/p5.png'></Image>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src='/p6.png'></Image>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Partner;