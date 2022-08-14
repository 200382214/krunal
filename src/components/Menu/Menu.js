import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
/***********************
  Menu Component
 ***********************/

const Menu = props => {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#gallaries" onClick={props.toggleMenu}>
                GALLARIES
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={props.toggleMenu}>
                PRICING
              </a>
            </li>
            <li>
              <a href="#services" onClick={props.toggleMenu}>
                SERVICES
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    );
  };
export default Menu;  