import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from '../src/layout/Header/Header';
import Navbar from '../src/layout/Navbar/Navbar';
import './App.css'; 
import Home from '../src/pages/Home/Home';  
import { ROUTES } from '../src/routes/routes'; 
import { NavbarProvider } from './contexts/NavbarContext'; // NavbarContext'i import et

const App = () => {
  return (
    <BrowserRouter>
      <NavbarProvider>
        <div className="app">
          <Header />  {/* Header tüm sayfalarda görünsün */}
          <Navbar />
          <Routes>
            {ROUTES.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children?.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    element={childRoute.element}
                  />
                ))}
              </Route>
            ))}
          </Routes>
        </div>
      </NavbarProvider>
    </BrowserRouter>
  );
};

export default App;
