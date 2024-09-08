import React, { createContext, useState, useContext } from 'react';

// Navbar context'ini oluştur
const NavbarContext = createContext();

// Navbar context'i kullanma fonksiyonu
export const useNavbar = () => useContext(NavbarContext);

// Context sağlayıcısını oluştur
export const NavbarProvider = ({ children }) => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(prevState => !prevState);
  };

  return (
    <NavbarContext.Provider value={{ isNavbarCollapsed, handleNavbarToggle }}>
      {children}
    </NavbarContext.Provider>
  );
};
