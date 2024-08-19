import React from 'react';

function Footer() {
  return (
    <footer className="text-light py-4" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <h5>Abstract</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Branches</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Release Notes</a></li>
              <li><a href="#" className="text-light text-decoration-none">Status</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Twitter</a></li>
              <li><a href="#" className="text-light text-decoration-none">LinkedIn</a></li>
              <li><a href="#" className="text-light text-decoration-none">Facebook</a></li>
              <li><a href="#" className="text-light text-decoration-none">Dribbble</a></li>
              <li><a href="#" className="text-light text-decoration-none">Podcast</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-3 mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Legal</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="mailto:info@abstract.com" className="text-light text-decoration-none">info@abstract.com</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 Abstract Studio Design, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
