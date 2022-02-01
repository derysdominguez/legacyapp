import React from 'react';
import { auth } from '../config/firebaseconfig';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
        <Row className="text-center">
            <Col xs={{ span:12 }} md={{ span: 12}} className="mb-5">
                <h1>legacy.gg</h1>
                <div>
                    <Link to='/login' >Login</Link> or <Button as={ Link } to='/register' className="ml-1">Register</Button>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default Home;
