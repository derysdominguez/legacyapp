import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useCallback, useContext, useState } from 'react';
import { Button, Col, Container, Row, Form, Alert } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/Auth';
import { auth } from '../../config/firebaseconfig';


const Login = ({}) => {
  const [msgError, setMsgError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    await signInWithEmailAndPassword(auth ,email.value, password.value)
    .then(r =>{
      navigate('/views/profile')
    })
    .catch(error => {
      setMsgError(error.code)
    })
  }, []);

  const { currentUser } = useContext(AuthContext);
  
  if( currentUser ) {
    return <Navigate to='/views/profile' />
  }

  return(

    <Container>
      <Row className='text-center'>
        <Col md={{ span: 12 }}>
          <h1>Login</h1>
        </Col>
        <Col md={{ span: 6, offset: 3 }} >
          <Form onSubmit={ handleLogin }>
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

                <Button variant='primary' type='submit' className='mt-4'>Login</Button>
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
  )
}

export default Login;
