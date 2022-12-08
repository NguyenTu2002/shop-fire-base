import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Hemel from '../components/Hemel/Hemel'
import CommonSection from '../components/UI/CommonSection'
import '../style/checkout.css'
import { useSelector } from 'react-redux'
const Checkout = () => {
    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);
    return (
        <Hemel title='Checkout'>
            <CommonSection title='Checkout Products' />
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className='mb-4 fw-bold'>Billing Information</h6>
                            <Form className='billing__form'>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Enter Your Name' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter Your Email' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="number" placeholder='Enter Your Phone Number' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Street address' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='City' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <textarea type="text" placeholder='Order notes' />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg='4'>
                            <div className='checkout__cart'>
                                <h6>Total: <span>{totalQty}</span></h6>
                                <h6>Subtotal: <span>${totalAmount}</span></h6>
                                <h6><span>Shipping: <br />Free Shipping</span> <span>$0</span></h6>
                                <h4>Total Cost : <span>${totalAmount}</span></h4>
                                <button className='buy__btn auth__btn w-100'>Plance And Order</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Hemel>
    )
}

export default Checkout