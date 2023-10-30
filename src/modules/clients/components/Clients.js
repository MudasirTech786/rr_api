import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Clients() {
    return (
        <main id="main" class="main text-start">

        <div class="pagetitle">
          <h1>Clients</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item">clients</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}
    
        <section class="section">
          <div class="row text-start">
            <div class="col-lg-12">
    
              <div class="card">
                <div class="card-body">
                    <div class="row mt-5">
                        <div class="mb-3 col-lg-3">
                        <Form.Label>Client Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter client name" />
                        </div>
                        <div class="mb-3 col-lg-3">
                            <Form.Label> Organization Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter organization name" />
                        </div>
                        <div class="col-lg-4 cl-btn">
                            <Button variant="primary">Add</Button>{' '}
                        </div>
                    </div>
                  {/* <!-- Table with stripped rows --> */}
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Company</th>
                        <th scope="col" class="asd">  </th>
                    
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Brandon Jacob</td>
                        <td>Designer</td>
                        <td>
                            <span class="edit"><i class="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>
                            <span class="deletee ms-2"><i class="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>                            
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Bridie Kessler</td>
                        <td>Developer</td>
                        <td>
                            <span class="edit"><i class="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>    
                            <span class="deletee ms-2"><i class="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>

                            
                        </td>
                    </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Ashleigh Langosh</td>
                        <td>Finance</td>
                        <td>
                            <span class="edit"><i class="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>
                            <span class="deletee ms-2"><i class="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>                            
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Angus Grady</td>
                        <td>HR</td>
                        <td>
                            <span class="edit"><i class="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>    
                            <span class="deletee ms-2"><i class="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>                        
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Raheem Lehner</td>
                        <td>Dynamic Division Officer</td>
                        <td>
                            <span class="edit"><i class="bi bi-pencil-square" mattooltip="Edit" data-bs-toggle="modal" data-bs-target="#edit-modal"></i></span>
                            <span class="deletee ms-2"><i class="bi bi-trash" mattooltip="Delete" data-bs-toggle="modal" data-bs-target="#delete-modal"></i></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <!-- End Table with stripped rows --> */}
    
                </div>
              </div>
    
            </div>
          </div>
        </section>
    
      </main>
    );
  }
  
  export default Clients;