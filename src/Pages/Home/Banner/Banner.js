import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
// import banner1 from '../../../images/banner/lemon.jpg'
import banner2 from '../../../images/banner/toolsb.jpg'
// import banner3 from '../../../images/banner/blackapple.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className='banner' activeIndex={index} onSelect={handleSelect}>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Fruits Warehouse</h3>
                    <p>Here have different type of lemon. specialy for summar.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-2xl font-bold pb-2'>Tools Manufacturer Site</h3>
                    <p className='text-xl pb-12'>Here have some tools. Which is very important for you.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Fruits Warehouse</h3>
                    <p>
                        This is the fresh apple for your healthy life.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
};

export default Banner;