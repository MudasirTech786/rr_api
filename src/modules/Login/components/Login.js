import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Login() {
    return (
        <main>
        <div className="container">
    
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <Row className="justify-content-center mt-4 text-start">
                <Col lg="5" md="6" className="d-flex flex-column align-items-center justify-content-center">
                  <div className="card mt-5 mb-3">
                    <div className="card-body">
                    <div className="d-flex justify-content-center mt-2">
                    <a href="/" className="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt=""/>
                      <span className="d-none d-lg-block">Proposal Builder</span>
                    </a>
                  </div>
                      <div className="">
                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      </div>
    
                      <Form className="row g-3">
                        <Col lg="12">
                            <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Col>
                        <Col lg="12">
                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                        </Col>
                        <Col lg="12">
                            {['checkbox',].map((type) => (
                                <div key={`default-${type}`} className="">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Remember me`}
                                />
                                </div>
                            ))}
                        </Col>
                        <Col lg="12">
                            <Button variant="primary" className="w-100" type="submit">Login</Button>{' '}
                        </Col>
                        <Col lg="12" className="text-center">
                          <p className="small mb-2">Don't have account? <a href="/signup">Create an account</a></p>
                        </Col>
                      </Form>
                    </div>
                  </div>
                  </Col>
                </Row>
            </div>
    
          </section>
    
        </div>
      </main>
    );
  }
  
  export default Login;