import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faFileSignature, faFolderOpen, faHouse, faIdCard, faPenToSquare, faSchoolCircleCheck, faTrashCan, faUserShield, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";




function Sidebar() {
    return (
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="/">
            {/* <FontAwesomeIcon icon={faSchoolCircleCheck} /> */}
            <FontAwesomeIcon icon={faHouse} size="xl"/>
              <span className="ms-2"> Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/clients">
            <FontAwesomeIcon icon={faUsersViewfinder} size="xl" />
              <span className="ms-2"> Client</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/projects">
            <FontAwesomeIcon icon={faFolderOpen} size="xl"/>
              <span className="ms-2">Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="proposals">
            <FontAwesomeIcon icon={faFileSignature} size="xl"/>
              <span className="ms-2">Proposals</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/signup">
            <FontAwesomeIcon icon={faIdCard} size="xl"/>
              <span className="ms-2">Register</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="/login">
            <FontAwesomeIcon icon={faUserShield} size="xl"/>
              <span className="ms-2">Login</span>
            </a>
          </li>
        </ul>
      </aside>
    );
  }
  
  export default Sidebar;