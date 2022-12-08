import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Hemel from '../components/Hemel/Hemel'
import { Link } from 'react-router-dom'
import '../style/signin.css'
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Hemel title='Signin' >
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold fs-4 mb-4'>Signin</h3>
              <Form className='auth__form '>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter Your Email' value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="password" placeholder='Enter Your Password' value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <button type='submit' className='buy__btn auth__btn'>Signin</button>
                <p>Don't have an account ? <Link to='/signup'>Create an account</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Hemel>
  )
}

export default Signin