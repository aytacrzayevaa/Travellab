import React from 'react';
import './Header.scss';
import Logo1 from '../../assets/Group.svg';
import Logo2 from '../../assets/Group (1).svg';
import House from '../../assets/House.svg';
import UsersThree from '../../assets/UsersThree.svg';
import Cart from '../../assets/Vector.svg';
import Vector from '../../assets/ChartPieSlice.svg';
import Message from '../../assets/Vector (2).svg';
import UserPlus from '../../assets/UserPlus.svg';
import LogoutIcon from '../../assets/LogOut.svg'; 

const Header = ({ isCollapsed }) => {
  return (
    <div className={`header-container ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo">
        <img id="logo2" src={Logo2} alt="Logo 2" className={isCollapsed ? 'hidden' : ''} />
        <img id="logo1" src={Logo1} alt="Logo 1" />
      </div>
      <ul className={`nav-list ${isCollapsed ? 'collapsed' : ''}`}>
        <li className="nav-item">
          <img src={House} alt="Home" className={`nav-item-img ${isCollapsed ? 'hidden' : ''}`} />
          <span className={`nav-item-text ${isCollapsed ? 'hidden' : ''}`}>Əsas səhifə</span>
        </li>
        <li className="nav-item">
          <img src={UsersThree} alt="Customers" className={`nav-item-img ${isCollapsed ? 'hidden' : ''}`} />
          <span className={`nav-item-text ${isCollapsed ? 'hidden' : ''}`}>Müştərilər</span>
        </li>
        <li className="nav-item">
          <img src={Cart} alt="Sales" className={`nav-item-img ${isCollapsed ? 'hidden' : ''}`} />
          <span className={`nav-item-text ${isCollapsed ? 'hidden' : ''}`}>Satışlar</span>
        </li>
        <li className="nav-item">
          <img src={Vector} alt="Expenses" className={`nav-item-img ${isCollapsed ? 'hidden' : ''}`} />
          <span className={`nav-item-text ${isCollapsed ? 'hidden' : ''}`}>Xərclər</span>
        </li>
        <li className="nav-item">
          <img src={Message} alt="Messages" className={`nav-item-img ${isCollapsed ? 'hidden' : ''}`} />
          <span className={`nav-item-text ${isCollapsed ? 'hidden' : ''}`}>Mesaj göndər</span>
        </li>
        <li className="nav-item">
          <img src={UserPlus} alt="Users" className={`nav-item-img ${isCollapsed ? 'hidden' : ''}`} />
          <span className={`nav-item-text ${isCollapsed ? 'hidden' : ''}`}>İstifadəçilər</span>
        </li>
      </ul>

      <div className="logout-section">
        <img src={LogoutIcon} alt="Logout" className="logout-icon" />
        <span className="logout-text">Çıxış</span>
      </div>
    </div>
  );
};

export default Header;
