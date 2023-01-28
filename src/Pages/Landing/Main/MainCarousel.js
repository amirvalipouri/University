import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import Landing1 from "../../../assets/Land/landImg.jpg"
import Landing2 from '../../../assets/Land/landImg2.jpg'
import Landing3 from '../../../assets/Land/landImg3.jpg'
import Landing4 from '../../../assets/Land/landImg4.jpg'
import Landing5 from '../../../assets/Land/landIma5.jpg'

const MainCarousel = () => {
    return (
        <div className="main-carousel shadow p-4 rounded-20">
            <Carousel slide={false} interval={10000}>
            <Carousel.Item>
                    <div className="zoom-in">
                        <img
                            className="d-block w-100 object-fit-cover"
                            src={Landing5}
                            alt="malayer uni"
                        />
                        <h3 className="my-0 w-100 bg-light p-2 text-center text-black">
                            دانشگاه ملی ملایر
                        </h3>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="zoom-in">
                        <img
                            className="d-block w-100 object-fit-cover"
                            src={Landing1}
                            alt="malayer uni"
                        />
                        <h3 className="my-0 w-100 bg-light p-2 text-center text-black">
                            سلف دانشگاه  
                        </h3>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="zoom-in">
                        <img
                            className="d-block w-100 object-fit-cover"
                            src={Landing3}
                            alt="malayer uni"
                        />
                        <h3 className="my-0 w-100 bg-light p-2 text-center text-black">
                            دانشگاه ملی ملایر
                        </h3>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="zoom-in">
                        <img
                            className="d-block w-100 object-fit-cover"
                            src={Landing4}
                            alt="malayer uni"
                        />
                        <h3 className="my-0 w-100 bg-light p-2 text-center text-black">
                            پردیس دانشکده فنی و مهندسی
                        </h3>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="zoom-in">
                        <img
                            className="d-block w-100 object-fit-cover"
                            src={Landing2}
                            alt="malayer uni"
                        />
                        <h3 className="my-0 w-100 bg-light p-2 text-center text-black">
                            مرکز پژوهش مبل و منبت
                        </h3>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default MainCarousel