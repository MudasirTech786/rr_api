import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
    return (
          <footer id="footer" className="footer">
            <div className="copyright">
            &copy; Copyright <strong><span>Nextbridge</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
            Designed by <a href="https://presstigers.com/">Presstigers</a>
            </div>
        </footer>
    );
  }
  
  export default Footer;