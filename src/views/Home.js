import React from 'react';
import { auth } from '../config/firebaseconfig';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container fluid className='header bg-dark text-light'>
        <Row className="text-center">
            <Col xs={{ span:12 }} md={{ span: 12}} className="mb-5">
                <h1 className='mb-5'>legacy.gg</h1>
                <div>
                  <Button as={ Link } to='/login' className="mx-3 btn-lg" variant='primary'>Login</Button> 
                  or 
                  <Button as={ Link } to='/register' className="mx-3 btn-lg" variant='outline-primary'>Register</Button> 
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default Home;
