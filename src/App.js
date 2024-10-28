// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
// import Header from '../src/layout/Header/Header';
// import Navbar from '../src/layout/Navbar/Navbar';
// import './App.css'; 
// import Home from '../src/pages/Home/Home';  
// import { ROUTES } from '../src/routes/routes'; 

// const App = () => {
//   const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

//   const handleNavbarToggle = () => {
//     setIsNavbarCollapsed(prevState => !prevState);
//   };

//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Navbar 
//           onToggle={handleNavbarToggle} 
//           isNavbarCollapsed={isNavbarCollapsed} 
//         />
//         <Routes>
//           <Route path="/" element={<Home />} /> 
//           {ROUTES.map((route, index) => (
//             <Route key={index} path={route.path} element={route.element}>
//               {route.children?.map((childRoute, childIndex) => (
//                 <Route
//                   key={childIndex}
//                   path={childRoute.path}
//                   element={childRoute.element}
//                 />
//               ))}
//             </Route>
//           ))}
//         </Routes>
//         <Header isCollapsed={isNavbarCollapsed} />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from '../src/layout/Header/Header';
import Navbar from '../src/layout/Navbar/Navbar';
import './App.css'; 
import Home from '../src/pages/Home/Home';  
import { ROUTES } from '../src/routes/routes'; 
import { NavbarProvider } from './context/NavbarContext'; 

const App = () => {
  return (
    <BrowserRouter>
      <NavbarProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
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
          <Header />
        </div>
      </NavbarProvider>
    </BrowserRouter>
  );
};

export default App;
