// import { RouterProvider } from 'react-router-dom';
// import { createBrowserRouter } from 'react-router-dom';
// import { ROUTES } from './routes/routes';
// import "./App.css"
// const router = createBrowserRouter(ROUTES)


// function App() {
//     return (
//         <RouterProvider router={router} />
//     )
// }

// export default App

import React, { useState } from 'react';
import Header from '../src/layout/Header/Header';
import Navbar from '../src/layout/Navbar/Navbar';
import './App.css'; 
import Home from './pages/Home/Home';

const App = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(prevState => !prevState);
  };

  return (
    <div className="app">
      <Navbar 
        onToggle={handleNavbarToggle} 
        isNavbarCollapsed={isNavbarCollapsed} 
      />
      <Home/>
      <Header isCollapsed={isNavbarCollapsed} />
    </div>
  );
};

export default App;

