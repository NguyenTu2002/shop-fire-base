import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Hemel from '../components/Hemel/Hemel'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config'
import '../style/signin.css'
import { toast } from 'react-toastify'
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredental = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredental.user
      console.log(user);
    } catch (error) {
      toast.error('Error Signup');
    }
  }
  return (
    <Hemel title='Signup' >
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold fs-4 mb-4'>Signup</h3>
              <Form className='auth__form ' onSubmit={signup}>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter Your Name' value={username} onChange={e => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter Your Email' value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="password" placeholder='Enter Your Password' value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="file" onChange={e => setFile(e.target.files[0])} />
                </FormGroup>
                <button type='submit' className='buy__btn auth__btn'>Register</button>
                <p>Already have an account ? <Link to='/signin'>Signin</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Hemel>
  )
}

export default Signup