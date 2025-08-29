import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <span className="navbar-brand">SMS</span>
        
        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Add Student</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">See Student</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Update Student</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Delete Student</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
