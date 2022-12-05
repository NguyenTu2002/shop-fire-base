import React, { useRef, useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import './header.css'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
const nav__link = [
  {
    path: 'home',
    display: "Home"
  },
  {
    path: 'shop',
    display: "Shop"
  },
  {
    path: 'cart',
    display: "Cart"
  }
]

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const navigate = useNavigate();
  const stickyHandlerFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    })
  }
  useEffect(() => {
    stickyHandlerFunc()
    return () => window.removeEventListener('scroll', stickyHandlerFunc)
  });
  const navigateToCart = () => {
    navigate('/cart')
  }
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
                {/* <p>Since 1990</p> */}
              </div>
            </div>
            <div className='naviagtion' >
              <ul className='menu'>
                {
                  nav__link.map((item, index) => (
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="nav__icons">
              <span className='fav__icon'>
                <i class="ri-heart-line"></i>
                <div className="badge">1</div>
              </span>
              <span className='cart__icon' onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <div className="badge">{totalQuantity}</div>
              </span>
              <span><motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" /></span>
              <div className="mobile__menu">
                <span><i class="ri-menu-line"></i></span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header