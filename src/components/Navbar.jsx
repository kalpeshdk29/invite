import React, { useState } from 'react'

const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
      setNavbarOpen(!isNavbarOpen);
    };

  return (
    <header className="ww-nav-bg-color">
      <nav className="navbar navbar-expand-md navbar-light ww-nav-max-width">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            <div className="logo-container">
              <img
                src="https://cdn.weddingwishlist.com/images/website/logo/theme-1.png"
                id="header-logo"
                alt="Website Logo"
              />
            </div>
          </a>
          <button
            className={`navbar-toggler ${isNavbarOpen ? "" : "collapsed"}`}
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarCollapse"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse ww-nav-right collapse ${
              isNavbarOpen ? "show" : ""
            }`}
            id="navbarCollapse"
          >
            <ul className="navbar-nav ww-nav desktop-header text-uppercase">
              <li className="nav-item">
                <a className="nav-link functions_header" href="#functions">
                  Functions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link travel_header" href="#travel">
                  Travel
                </a>
              </li>
              <li className="nav-item photo_gallery">
                <a
                  className="nav-link photo_gallery_header"
                  href="#photo_gallery"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item rsvp">
                <a className="nav-link rsvp_header" href="#rsvp">
                  RSVP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
