import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useCallback, useState } from 'react';
import { Button, Col, Container, Row, Form, Alert } from 'react-bootstrap';
import { useNavigate, withRouter } from 'react-router-dom';
import { auth } from '../../config/firebaseconfig';


const Register = ({  }) => {
  const [msgError, setMsgError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    await createUserWithEmailAndPassword(auth ,email.value, password.value)
    .then(r =>{
      navigate('/views/profile')
    })
    .catch(error => {
      setMsgError(error.code)
    })
  }, []);
 
  return (
    <Container>
    <Row className='text-center'>
      <Col md={{ span: 12 }}>
        <h1>Register</h1>
      </Col>
      <Col md={{ span: 6, offset: 3 }} >
        <Form onSubmit={ handleRegister }>
          <Form.Group>
            <Form.Label>Email</Form.Label>
              <Form.Control 
                placeholder='abcd@efg.com'
                name='email'
                type='email'
              />

              <Form.Label className='mt-2'>Password</Form.Label>
              <Form.Control
                placeholder='Password'
                name='password'
                type='password'
              />

              <Button variant='primary' type='submit' className='mt-4'>Register</Button>
            </Form.Group>
            {msgError && (
                <Form.Text>
                  <Alert className='mt-2' variant='danger'>
                    { msgError }
                  </Alert>
                </Form.Text>
            )}
          </Form>
      </Col>
    </Row>
  </Container>
    // <div>
    //   <h1>Register</h1>
    //   <form onSubmit={handleRegister}>
    //     <label for="">
    //       Email
    //       <input name="email" type="email" placeholder="Email" />
    //     </label>
    //     <label>
    //       Password
    //       <input name="password" type="password" placeholder="Password" />
    //     </label>
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>
  )
}

export default Register;
