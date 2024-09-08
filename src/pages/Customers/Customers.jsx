import React, { useState } from 'react';
import './Customers.scss';
import Filterbtn from '../../assets/customers/Filter.svg';
import Newcustomers from '../../assets/customers/NewCustomer.svg';
import Eyebtn from '../../assets/customers/Eye_Button.svg';
import FilterModal from '../../components/FilterModal'; 
import { useNavbar } from "../../context/NavbarContext";


const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isNavbarCollapsed } = useNavbar();


  const totalPages = 10;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
<div className={`customers-container ${isNavbarCollapsed ? "customers-container--navbar-closed" : ""}`}>
<div className="customers-header">
        <p>Əsas səhifə / <span> Müştərilər</span></p>
        <div className="actions">
          <button onClick={() => setIsModalOpen(true)}><img src={Filterbtn} alt="" /></button>
          <button><img src={Newcustomers} alt="" /></button>
        </div>
      </div>

      <FilterModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <table className="customers-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Ad</th>
            <th>Tur Manager</th>
            <th>Mobil Nömrə</th>
            <th>Qeydiyyat Tarixi</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, i) => (
            <tr key={i} className={currentPage === i + 1 ? 'highlighted' : ''}>
              <td>{i + 1}</td>
              <td>Ad Soyad</td>
              <td>Qumral Mahmudova</td>
              <td>+994776334424</td>
              <td>24.11.2024 | 10:29:43</td>
              <td>
                <button className="view-btn"><img src={Eyebtn} alt="" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="prev-btn" onClick={handlePrev} disabled={currentPage === 1}>
          ‹
        </button>
        {[...Array(5)].map((_, i) => (
          <button
            key={i}
            className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button className="next-btn" onClick={handleNext} disabled={currentPage === totalPages}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Customers;
