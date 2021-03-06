import React, { Component } from 'react';

import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

class Footer2 extends Component {
      render() {
          return (
            <div className="content-wrapper">
                  <div className="nav-link-wapper">
                        <div className="nav-link">
                              <NavLink exact to="/">
                                    Home
                              </NavLink>
                        </div>
                  
                        <div className="nav-link">
                              <NavLink to="/services">Our Services</NavLink>
                        </div>

                        <div className="nav-link">
                              <NavLink to="/appointment">Book Appointment</NavLink>
                        </div>

                        <div className="nav-link">
                              <NavLink to="/location">Location</NavLink>
                        </div>
                  </div>
                  <div className="social-media-wrapper">
                       
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebook />
                        <FaPinterest />
                  </div>

                  <div className="copyright-wrapper">
                        &copy; 2000 Nassou Salon &#124; All rights reserved
                  </div>
            </div>
    
          )
      }
  }
  
  export default Footer2;