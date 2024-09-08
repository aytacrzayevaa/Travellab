import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

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
