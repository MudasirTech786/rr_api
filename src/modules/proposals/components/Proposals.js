import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Proposals() {
    return (
        <main id="main" class="main text-start">

        <div class="pagetitle">
          <h1>Proposal</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item">Proposal</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}
    
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
    
              <div class="card">
                <div class="card-body mt-4">
                    <form class="cstform">
                        <div class="row mt-5">
                            <div class="mb-3 ms-5 col-lg-3">
                                <select class="form-select" aria-label="Default select example">
                                  <option selected="">Select project</option>
                                  <option value="1">Land Title Services</option>
                                  <option value="2">TransdirectUSA</option>
                                  <option value="3">WWK</option>
                                </select>
                              </div>
                              <div class="mb-3 col-lg-3">
                                  <select class="form-select" aria-label="Default select example">
                                      <option selected="">Select client </option>
                                      <option value="1">Michael James</option>
                                      <option value="2">Scott Arens</option>
                                      <option value="3">Thelema Gross</option>
                                    </select>
                              </div>
                          <div class="mb-3 col-lg-3">
                            <input type="number" class="form-control" placeholder="Prposal version"/>
                          </div>
                          <div class=" mb-2 col-lg-2">
                              <button type="button" class="btn btn-primary">Add Proposal</button>
                          </div>
                        </div>
                      </form>
                  {/* <!-- Table with stripped rows --> */}
                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col"></th>
                        <th scope="col">Start Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Brandon Jacob</td>
                        <td>Designer</td>
                        <td><button type="button" class="btn btn-primary">Add Task</button></td>
                        <td>2016-05-25</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Bridie Kessler</td>
                        <td>Developer</td>
                        <td><button type="button" class="btn btn-primary">Add Task</button></td>
                        <td>2014-12-05</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Ashleigh Langosh</td>
                        <td>Finance</td>
                        <td><button type="button" class="btn btn-primary">Add Task</button></td>
                        <td>2011-08-12</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>Angus Grady</td>
                        <td>HR</td>
                        <td><button type="button" class="btn btn-primary">Add Task</button></td>
                        <td>2012-06-11</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>Raheem Lehner</td>
                        <td>Dynamic Division Officer</td>
                        <td><button type="button" class="btn btn-primary">Add Task</button></td>
                        <td>2011-04-19</td>
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
  
  export default Proposals;