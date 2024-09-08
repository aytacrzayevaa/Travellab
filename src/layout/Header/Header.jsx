import React from 'react';
import { Link } from 'react-router-dom';
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
import { useNavbar } from '../../context/NavbarContext'; // Context'i import et

const Header = () => {
  const { isNavbarCollapsed } = useNavbar(); // Context'ten navbar durumunu al

  return (
    <div className={`header-container ${isNavbarCollapsed ? 'collapsed' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img id="logo2" src={Logo2} alt="Logo 2" className={isNavbarCollapsed ? 'hidden' : ''} />
        </Link>
        <Link to="/">
          <img id="logo1" src={Logo1} alt="Logo 1" />
        </Link>
      </div>
      <ul className={`nav-list ${isNavbarCollapsed ? 'collapsed' : ''}`}>
        <li className="nav-item">
          <Link to="/">
            <img src={House} alt="Home" className={`nav-item-img ${isNavbarCollapsed ? 'hidden' : ''}`} />
            <span className={`nav-item-text ${isNavbarCollapsed ? 'hidden' : ''}`}>Əsas səhifə</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/customers">
            <img src={UsersThree} alt="Customers" className={`nav-item-img ${isNavbarCollapsed ? 'hidden' : ''}`} />
            <span className={`nav-item-text ${isNavbarCollapsed ? 'hidden' : ''}`}>Müştərilər</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sales">
            <img src={Cart} alt="Sales" className={`nav-item-img ${isNavbarCollapsed ? 'hidden' : ''}`} />
            <span className={`nav-item-text ${isNavbarCollapsed ? 'hidden' : ''}`}>Satışlar</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/expenses">
            <img src={Vector} alt="Expenses" className={`nav-item-img ${isNavbarCollapsed ? 'hidden' : ''}`} />
            <span className={`nav-item-text ${isNavbarCollapsed ? 'hidden' : ''}`}>Xərclər</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/message">
            <img src={Message} alt="Messages" className={`nav-item-img ${isNavbarCollapsed ? 'hidden' : ''}`} />
            <span className={`nav-item-text ${isNavbarCollapsed ? 'hidden' : ''}`}>Mesaj göndər</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users">
            <img src={UserPlus} alt="Users" className={`nav-item-img ${isNavbarCollapsed ? 'hidden' : ''}`} />
            <span className={`nav-item-text ${isNavbarCollapsed ? 'hidden' : ''}`}>İstifadəçilər</span>
          </Link>
        </li>
      </ul>

      <div className="logout-section">
        <Link to="/logout">
          <img src={LogoutIcon} alt="Logout" className={`logout-icon ${isNavbarCollapsed ? 'hidden' : ''}`} />
          <span className={`logout-text ${isNavbarCollapsed ? 'hidden' : ''}`}>Çıxış</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
