import React, { useState } from 'react';
import './Customers.scss';
import Filterbtn from '../../assets/customers/Filter.svg';
import Newcustomers from '../../assets/customers/NewCustomer.svg';
import Eyebtn from '../../assets/customers/Eye_Button.svg';
import FilterModal from '../../components/FilterModal';
import { useNavbar } from "../../context/NavbarContext";
import ViewModal from '../../components/ViewModal';
import NewCustomerModal from '../../components/NewCustomerModal';

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); 
  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false); 
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

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleNewCustomerModal = () => {
    setIsNewCustomerModalOpen(!isNewCustomerModalOpen); 
  };

  return (
    <div className={`customers-container ${isNavbarCollapsed ? "customers-container--navbar-closed" : ""}`}>
      <div className="customers-header">
        <p>Əsas səhifə / <span> Müştərilər</span></p>
        <div className="actions">
          <button onClick={() => setIsFilterModalOpen(true)}><img src={Filterbtn} alt="Filter" /></button>
          <button onClick={handleNewCustomerModal}><img src={Newcustomers} alt="Yeni Müştəri" /></button> 
        </div>
      </div>

      <FilterModal isOpen={isFilterModalOpen} onClose={handleCloseFilterModal} />

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
                <button className="view-btn" onClick={() => setIsViewModalOpen(true)}>
                  <img src={Eyebtn} alt="Görünüş" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ViewModal isOpen={isViewModalOpen} onClose={handleCloseViewModal} />

      <NewCustomerModal isOpen={isNewCustomerModalOpen} onClose={handleNewCustomerModal} /> 

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
