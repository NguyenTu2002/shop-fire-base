import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import CommonSection from '../components/UI/CommonSection'
import Hemel from '../components/Hemel/Hemel'
import '../style/product-detail.css'
import { motion } from 'framer-motion'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
const ProductDetail = () => {
    const [tab, setTab] = useState('desc');
    const [rating, setRating] = useState(null);
    const { id } = useParams();
    const reviewUser = useRef('');
    const reviewMsg = useRef('');
    const dispatch = useDispatch();
    const product = products.find(i => i.id === id);
    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;
    const relatedProduct = products.filter((item) => item.category === category);
    const onSubmitHanler = (e) => {
        e.preventDefault();
        const reviewsUserName = reviewUser.current.value;
        const reviewsUserMsg = reviewMsg.current.value;
        const reviewObj = {
            userName: reviewsUserName,
            text: reviewsUserMsg,
            rating,
        }
        toast.success('Review Submited !')
    }
    const addTocart = () => {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price
        }));
        toast.success('Products Add Success');
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);
    return (
        <Hemel title={productName}>
            <CommonSection title={productName} />
            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="khong co anh" />
                        </Col>
                        <Col lg='6'>
                            <div className='product__details'>
                                <h2>{productName}</h2>
                                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                                    <div>
                                        <span ><i class="ri-star-fill"></i></span>
                                        <span ><i class="ri-star-fill"></i></span>
                                        <span ><i class="ri-star-fill"></i></span>
                                        <span ><i class="ri-star-fill"></i></span>
                                        <span ><i class="ri-star-line"></i></span>
                                    </div>
                                    <p>(<span>{avgRating}</span> ratings)</p>
                                </div>
                                <div className='d-flex align-items-center gap-5'>
                                    <span className='product__price'>${price}</span>
                                    <span className='fs-6 fw-bold'>Category : {category}</span>
                                </div>
                                <p className='mt-3'>{shortDesc}</p>
                                <motion.button className='buy__btn' whileTap={{ scale: 1.2 }} onClick={addTocart}>Add To Cart</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`} onClick={() => setTab('desc')}>Depcription</h6>
                                < h6 className={`${tab === 'rev' ? 'active__tab' : ''}`} onClick={() => setTab('rev')}> Review({reviews.length})</h6>
                            </div>
                            {
                                tab === 'desc' ?
                                    (<div className="tab__content mt-4">
                                        <p>{description}</p>
                                    </div>)
                                    : (<div className='product__review mt-5'>
                                        <div className='review__wrapper'>
                                            <ul>
                                                {reviews.map((item, index) => (
                                                    <li key={index} className='mb-4'>
                                                        <h6>Nguyen Tu</h6>
                                                        <span>{item.rating} (average rating)</span>
                                                        <p>{item.text}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="review__form">
                                                <form action="" onSubmit={onSubmitHanler}>
                                                    <h4>Leave your experience</h4>
                                                    <div className='form__group'>
                                                        <input type="text" placeholder='Enter Name' ref={reviewUser}  required/>
                                                    </div>
                                                    <div className='form__group d-flex align-items-center gap-5'>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<i class="ri-star-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<i class="ri-star-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<i class="ri-star-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<i class="ri-star-fill"></i></motion.span>
                                                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<i class="ri-star-fill"></i></motion.span>
                                                    </div>
                                                    <div className='form__group'>
                                                        <textarea rows={4} ref={reviewMsg} type="text" placeholder='Review Message.....' required />
                                                    </div>
                                                    <motion.button whileTap={{ scale: 1.2 }} type='submit' className="buy__btn">Submit</motion.button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>)
                            }
                        </Col>
                        <Col lg='12' className='mt-5'>
                            <h2 className="related__title">You might also like</h2>
                        </Col>
                        <ProductsList data={relatedProduct} />
                    </Row>
                </Container>
            </section>
        </Hemel >
    )
}

export default ProductDetail
