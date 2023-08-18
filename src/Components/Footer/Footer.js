import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                &copy; {new Date().getFullYear()} Your Online Store. All Rights
                Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="footer-links">
                <li>
                  <a href="!#">Privacy Policy</a>
                </li>
                <li>
                  <a href="!#">Terms of Service</a>
                </li>
                <li>
                  <a href="!#">Return Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
