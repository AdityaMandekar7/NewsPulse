import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsPulse</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.categorySelect('business'); }}>Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.categorySelect('entertainment'); }}>Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.categorySelect('general'); }}>General</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.categorySelect('health'); }}>Health</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.categorySelect('science'); }}>Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.categorySelect('sports'); }}>Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.categorySelect('technology'); }}>Technology</a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <strong>CN</strong>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); this.props.countrySelect('in'); }}>India</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); this.props.countrySelect('us'); }}>United States</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); this.props.countrySelect('ru'); }}>Russia</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); this.props.countrySelect('cn'); }}>China</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/" onClick={(e) => { e.preventDefault(); this.props.countrySelect('ae'); }}>United Arab Emirates</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
