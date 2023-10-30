import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faFileSignature,  faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";


function Dashboard() {
    return (
        <main id="main" className="main">

        <div className="pagetitle text-start">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}
    
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-start">Create Proposal</h5>
                  <form className="cstform">
                    <div className="row mt-5">
                        <div className="mb-3 col-lg-3">
                            <input type="text" className="form-control" placeholder="Task title"/>
                        </div>
                      <div className="mb-3 col-lg-3">
                        <Form.Select aria-label="Default select example">
                        <option>Select Services</option>
                        <option value="1">Web development</option>
                        <option value="2">SQA</option>
                        <option value="3">UI Design</option>
                        </Form.Select>
                      </div>
                      <div className="mb-3 col-lg-3">
                        <span>
                          <input type="number" className="form-control" placeholder="Eestimated hours"/>
                        </span>
                      </div>
                      <div className="mb-3 col-lg-3">
                        <input type="number" className="form-control" placeholder="Prposal version"/>
                      </div>
                      <div className=" mb-2 col-lg-2">
                        <span className="comment"><FontAwesomeIcon icon={faComments} size="2xl" style={{color: "#0d6efd",}} /></span>
                      </div>
                      <div className=" mb-2 col-lg-2">
                          <button type="button" className="btn btn-primary">Add Proposal</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
    
            </div>
          </div>
        </section>
    
    
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
    
              <div className="card">
                <div className="card-body">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="col-lg-6">
                            Landtitleservices - Michael James
                            </div>
                            <div className="col-lg-2">
                            $2000.00
                            </div>
                            <div className="col-lg-2">
                            <span className="badge bg-warning">Pending</span>
                            </div>
                            <div className="col-lg-1">
                            1.0
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <table className="table table-border">
                            <thead>
                              <tr>
                                <th scope="col">Task Title</th>
                                <th scope="col">Services</th>
                                <th scope="col">Price</th>
                                <th scope="col">Time</th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Design UI</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>
                                <td>$64</td>
                                <td>7 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#largeModal"></i></span>
                                 
    
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>
                                  

                                  
    
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>

                                  
                                </td>
                              </tr>
                              <tr>
                                <td>Theme customization</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>                            
                                <td>$47</td>
                                <td>12 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#largeModal"></i></span>
                                 
    
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>
                                  

                                  
    
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>

                                  
                                </td>
                              </tr>
                              <tr>
                                <td>DB configuration</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>  
                                <td>$147</td>
                                <td>5 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#largeModal"></i></span>
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>
                                </td>
                              </tr>
                              <tr>
                                <td>Plugin customization</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>
                                <td>$67</td>
                                <td>17 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#largeModal"></i></span>
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>
                                </td>
                              </tr>
                              <tr>
                                <td>Testing and deployment</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>
                                <td>$165</td>
                                <td>7 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#largeModal"></i></span>
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>    
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                        <div className="col-lg-6">
                            TransdirectUSA - Michael James
                          </div>
                          <div className="col-lg-2">
                            $2000.00
                          </div>
                          <div className="col-lg-2">
                            <span className="badge bg-success">Approved</span>
                          </div>
                          <div className="col-lg-1">
                            1.0
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                        <table className="table table-border">
                            <thead>
                              <tr>
                                <th scope="col">Task Title</th>
                                <th scope="col">Services</th>
                                <th scope="col">Price</th>
                                <th scope="col">Time</th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Design UI</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>
                                <td>$64</td>
                                <td>7 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#detailmodal"></i></span>
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal1"></i></span>                                  
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal1"></i></span>
                                </td>
                              </tr>
                              <tr>
                                <td>Theme customization</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>                            
                                <td>$47</td>
                                <td>12 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#detailmodal"></i></span>
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal1"></i></span>
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal1"></i></span>
                                </td>
                              </tr>
                              <tr>
                                <td>DB configuration</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>  
                                <td>$147</td>
                                <td>5 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#detailmodal"></i></span>
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal1"></i></span>
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal1"></i></span>
                                </td>
                              </tr>
                              <tr>
                                <td>Plugin customization</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>
                                <td>$67</td>
                                <td>17 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#detailmodal"></i></span>
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal1"></i></span>
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal1"></i></span>
                                </td>
                              </tr>
                              <tr>
                                <td>Testing and deployment</td>
                                <td><span className="badge bg-warning">Pending</span> <span className="badge bg-danger">Rejected</span> &nbsp;<span className="badge bg-success">Approved</span></td>
                                <td>$165</td>
                                <td>7 hours</td>
                                <td>
                                  <span className="comment"><i className="bx bx-conversation" mattooltip="Comments" data-bs-toggle="modal" data-bs-target="#detailmodal"></i></span>
                                  <span className="edit ms-2"><i className="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal1"></i></span>
                                  <span className="deletee ms-2"><i className="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal1"></i></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                  {/* <!-- Default Accordion --> */}

                  {/* <!-- End Default Accordion Example --> */}
                </div>
              </div>
    
            </div>
          </div>
        </section>
    

    </main>
    );
  }
  
  export default Dashboard;