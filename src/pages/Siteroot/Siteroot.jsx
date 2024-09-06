import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layout/Header/Header'
import Navbar from '../../layout/Navbar/Navbar'

const Siteroot = () => {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
        <Navbar/>
        
    </React.Fragment>
  )
}

export default Siteroot