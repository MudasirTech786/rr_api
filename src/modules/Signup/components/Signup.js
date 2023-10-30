import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Signup() {
    return (
        <main>
        <div className="container">
    
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <Row className="justify-content-center text-start">
                <Col lg="6" md="6" className="d-flex flex-column align-items-center justify-content-center">
                  <div className="card mb-3">    
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <a href="/" className="logo d-flex align-items-center w-auto">
                          <img src="assets/img/logo.png" alt=""/>
                          <span className="d-none d-lg-block">Proposal Builder</span>
                        </a>
                      </div>
                      <div className="">
                        <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                      </div>
                      <form className="row g-3 needs-validation" novalidate>
                        <Col lg="12">
                            <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Please enter your name" />
                            </Form.Group>
                        </Col>
                        <Col lg="12">
                            <Form.Group className="" controlId="exampleForm.ControlInput1">
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
                            <div className="form-check">
                                <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                                <label className="form-check-label" for="acceptTerms">I agree and accept the terms and conditions</label>
                                <div className="invalid-feedback">You must agree before submitting.</div>
                            </div>
                        </Col>
                        <Col lg="12">
                            <Button variant="primary" className="w-100" type="submit">Create Account</Button>{' '}
                        </Col>
                        <div className="col-12 text-center">
                          <p className="small mb-0">Already have an account? <a href="/login">Log in</a></p>
                        </div>
                      </form>
    
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
  
  export default Signup;