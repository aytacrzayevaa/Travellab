import React from 'react';
import List from "../../assets/List (1).svg"; 
import List2 from '../../assets/List (1) kopyası.svg';
import Calculator from "../../assets/QR_Button.svg";
import Qrbutton from "../../assets/QR_Button (1).svg";
import Profile from "../../assets/Profile_Button.svg";
import "./Navbar.scss";

const Navbar = ({ onToggle, isNavbarCollapsed }) => {
  return (
    <div className={`navbar ${isNavbarCollapsed ? 'navbar--closed' : 'navbar--open'}`}>
      <div className="navbar__logo">
        {/* Logo here */}
      </div>
      <div className="navbar__data">
        <div className="navbar__data__left">
          <button onClick={onToggle}>
            <img src={isNavbarCollapsed ? List2 : List} alt="Toggle Navbar" />
          </button>
        </div>
        <div className="navbar__data__right">
          <img src={Calculator} alt="Calculator" />
          <img src={Qrbutton} alt="QR Button" />
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

