import React, { useState } from 'react';
import './FilterModal2.scss';
import CloseBtn from '../assets/close_Button.svg';
import Select from 'react-select'; 

const employeeOptions = [
  { value: 'Qumral', label: 'Qumral' },
  { value: 'Səma', label: 'Səma' },
  { value: 'Aygün', label: 'Aygün' },
  { value: 'Tural', label: 'Tural' },
];

const FilterModal2 = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    salesNumber: '',
    startDate: '',
    customer: '',
    endDate: '',
    number: '',
    flightDate: '',
    fin: '',
    returnFlightDate: '',
    orderStatus: '',
    receivedAmount: '',
    salesType: '',
    soldAmount: '',
    cities: []
  });

  const handleEmployeeChange = (selectedEmployee) => {
    setFormData({ ...formData, cities: selectedEmployee });
  };

  const handleReset = () => {
    setFormData({
      salesNumber: '',
      startDate: '',
      customer: '',
      endDate: '',
      number: '',
      flightDate: '',
      fin: '',
      returnFlightDate: '',
      orderStatus: '',
      receivedAmount: '',
      salesType: '',
      soldAmount: '',
      cities: []
    });
  };

  return (
    <div className="filter-modal">
      <div className="filter-modal__container">
        <div className="filter-modal__header">
          <h2 className="filter-modal__title">Filter</h2>
          <button className="filter-modal__close-button" onClick={closeModal}>
            <img src={CloseBtn} alt="Close" />
          </button>
        </div>
        <form className="filter-modal__form">
          <div className="filter-modal__form-group">
            <label>Satış nömrəsi</label>
            <input 
              type="text" 
              value={formData.salesNumber} 
              onChange={(e) => setFormData({ ...formData, salesNumber: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>Başlanğıc tarix</label>
            <input 
              type="date" 
              value={formData.startDate} 
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>Müştəri</label>
            <input 
              type="text" 
              value={formData.customer} 
              onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>Son Tarix</label>
            <input 
              type="date" 
              value={formData.endDate} 
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>Nömrə</label>
            <input 
              type="tel" 
              value={formData.number} 
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>Uçuş tarixi</label>
            <input 
              type="date" 
              value={formData.flightDate} 
              onChange={(e) => setFormData({ ...formData, flightDate: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>FİN</label>
            <input 
              type="text" 
              value={formData.fin} 
              onChange={(e) => setFormData({ ...formData, fin: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>Geri uçuş tarixi</label>
            <input 
              type="date" 
              value={formData.returnFlightDate} 
              onChange={(e) => setFormData({ ...formData, returnFlightDate: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>Sifarişin statusu</label>
            <select 
              value={formData.orderStatus} 
              onChange={(e) => setFormData({ ...formData, orderStatus: e.target.value })}
            >
              <option value="INTERESTED">INTERESTED</option>
            </select>
          </div>
          <div className="filter-modal__form-group">
            <label>Alınan məbləğ</label>
            <input 
              type="number" 
              value={formData.receivedAmount} 
              onChange={(e) => setFormData({ ...formData, receivedAmount: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>Satış növü</label>
            <select 
              value={formData.salesType} 
              onChange={(e) => setFormData({ ...formData, salesType: e.target.value })}
            >
              <option value="AIR_TICKET">AIR_TICKET</option>
            </select>
          </div>
          <div className="filter-modal__form-group">
            <label>Satılan məbləğ</label>
            <input 
              type="number" 
              value={formData.soldAmount} 
              onChange={(e) => setFormData({ ...formData, soldAmount: e.target.value })}
            />
          </div>
          <div className="filter-modal__form-group">
            <label>Şəhərlər</label>
            <Select
              isMulti
              name="cities"
              options={employeeOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              value={formData.cities}
              onChange={handleEmployeeChange}
            />
          </div>
        </form>
        <div className="filter-modal__button-group">
          <button className="filter-modal__reset-button" onClick={handleReset}>Sıfırla</button>
          <button className="filter-modal__search-button">Axtar</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal2;
