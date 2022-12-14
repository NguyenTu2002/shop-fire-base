import React, { useState, useEffect } from 'react'
import Hemel from '../components/Hemel/Hemel'
import '../style/home.css'
import products from '../assets/data/products'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../sevices/Services'
import ProductsList from '../components/UI/ProductsList'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'
const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    const year = new Date().getFullYear();
    useEffect(() => {
        const fillterTrendingProducts = products.filter(item => item.category === 'chair');

        const fillterBestSalesProducts = products.filter(item => item.category === 'sofa');

        const fillterMobileProducts = products.filter(item => item.category === 'mobile');

        const fillterWirelessProducts = products.filter(item => item.category === 'wireless');

        const fillterPopularProducts = products.filter(item => item.category === 'watch');


        setTrendingProducts(fillterTrendingProducts);

        setBestSalesProducts(fillterBestSalesProducts);

        setMobileProducts(fillterMobileProducts);

        setWirelessProducts(fillterWirelessProducts);

        setPopularProducts(fillterPopularProducts);
    }, []);
    return (
        <Hemel title={'Home'}>
            <section className='hero__section'>
                <Container>
                    <Row>
                        <Col lg='6' md='5'>
                            <div className="hero__content">
                                <p className="hero__subtitle">
                                    Trending Product In {year}
                                </p>
                                <h2>
                                    Make Your Interior More Minimalistic & Modern
                                </h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ad aliquam veniam consequuntur sint, nihil quibusdam beatae aut itaque esse!</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services></Services>
            <section className='trending__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'>Trending Products</h2>
                        </Col>
                        <ProductsList data={trendingProducts} />
                    </Row>
                </Container>
            </section>
            <section className='best__sales'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section__title'>Best Sales</h2>
                        </Col>
                        <ProductsList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>
            <section className='timer__count'>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="clock__top-content">
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                            </div>
                            <Clock />
                            <motion.button whileTap={{ scale: 1.2 }} className='buy__btn store__btn'><Link to='/shop'>Visit Shop</Link></motion.button>
                        </Col>
                        <Col lg='6' md='6' className='text-end'>
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='new__arrivals'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section__title'>New Arrivals</h2>
                        </Col>
                        <ProductsList data={mobileProducts} />
                        <ProductsList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>
            <section className='popular__category '>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className='section__title'>Popular in Category</h2>
                        </Col>
                        <ProductsList data={popularProducts} />
                    </Row>
                </Container>
            </section>
        </Hemel>
    )
}
export default Home