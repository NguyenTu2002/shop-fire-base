import React from 'react'
import '../style/cart.css'
import Hemel from '../components/Hemel/Hemel'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Hemel title='Cart'>
      <CommonSection title=' Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ? <h2 className='fs-4 text-center'>No Items add to cart</h2> : (
                  <table className='table bordedred'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item, index) => (
                          <Tr item={item} key={index} />
                        ))
                      }
                    </tbody>
                  </table>
                )
              }

            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Subtotal
                  <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
              </div>
              <p className='fs-6 mt-2'>Taxes and shipping will caculate in checkout</p>
              <div>
                <button className='buy__btn w-100'><Link to='/checkout'>Checkout</Link></button>
                <button className='buy__btn w-100 mt-3'><Link to='/shop'>Continue Shopping</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Hemel>
  )
}
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
    toast.info("The product has been removed from the cart ! ");
  }
  return (
    <tr >
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <motion.td whileTap={{ scale: 1.3 }} onClick={deleteProduct}><i class="ri-delete-bin-5-line"></i></motion.td>
    </tr>
  )
}
export default Cart