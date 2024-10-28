import React, { useState } from "react";
import "./ViewModal.scss";
import Closebtn from "../assets/close_Button.svg";
import Infobtn from "../assets/customers/Info.svg";
import HandShake from "../assets/customers/Handshake.svg";
import Select from 'react-select';

const cityOptions = [
  { value: 'Bodrum', label: 'Bodrum' },
  { value: 'Alanya', label: 'Alanya' },
  { value: 'Istanbul', label: 'Istanbul' },
  { value: 'Ankara', label: 'Ankara' },
];
const ViewModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    phone: "",
    fin: "",
    tourManager: "",
    maritalStatus: "",
    managerPhone: "",
    gender: "",
    email: "",
    parent: "",
    text: "",
    citizenship: "",
    messageSent: "",
  });

  const [activeTab, setActiveTab] = useState("info"); 
  const [showNewOfferForm, setShowNewOfferForm] = useState(false); 
  const handleCitiesChange = (selectedCities) => {
    setFormData({ ...formData, cities: selectedCities });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowNewOfferForm(false);  
  };

  const handleNewOfferClick = () => {
    setShowNewOfferForm(true);  
  };

  if (!isOpen) return null;

  return (
    <div className="wmodal-overlay">
      <div className="wmodal-content">
        <button className="close-btn" onClick={onClose}>
          <img src={Closebtn} alt="Close" />
        </button>
        <div className="wmodal-sidebar">
          <div
            className={`wmodal-sidebar-item ${
              activeTab === "info" ? "active" : ""
            }`}
            onClick={() => handleTabClick("info")}
          >
            <img src={Infobtn} alt="Info" />
            Müştəri məlumatı
          </div>
          <div
            className={`wmodal-sidebar-item ${
              activeTab === "offers" ? "active" : ""
            }`}
            onClick={() => handleTabClick("offers")}
          >
            <img src={HandShake} alt="Offers" />
            Təkliflər
          </div>
        </div>
        <div className="wmodal-main">
          {activeTab === "info" && (
            <div>
              <h2>Müştəri məlumatı</h2>
              <div className="wcustomer-info">
                <div className="winfo-group">
                  <label>Ad</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Doğum tarixi</label>
                  <input
                    type="text"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Nömrə</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>FİN</label>
                  <input
                    type="text"
                    name="fin"
                    value={formData.fin}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Tur Manager</label>
                  <input
                    type="text"
                    name="tourManager"
                    value={formData.tourManager}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Ailə vəziyyəti</label>
                  <input
                    type="text"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Manager nömrəsi</label>
                  <input
                    type="text"
                    name="managerPhone"
                    value={formData.managerPhone}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Cinsi</label>
                  <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Mail ünvan</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Valideyn</label>
                  <input
                    type="text"
                    name="parent"
                    value={formData.parent}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Mətn</label>
                  <textarea
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Vətəndaşlıq</label>
                  <input
                    type="text"
                    name="citizenship"
                    value={formData.citizenship}
                    onChange={handleChange}
                  />
                </div>
                <div className="winfo-group">
                  <label>Mesaj göndərilib</label>
                  <input
                    type="text"
                    name="messageSent"
                    value={formData.messageSent}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button className="wedit-btn">Redakte et</button>
            </div>
          )}

          {activeTab === "offers" && !showNewOfferForm && (
            <>
              <div>
                <h2>Təkliflər</h2>
              </div>
              <div className="offers-body">
                <img src={Closebtn} alt="" />
                <p>Təklif tapılmadı</p>
                <button onClick={handleNewOfferClick}>+ Yeni təklif</button>
              </div>
            </>
          )}

          {showNewOfferForm && (
           <div className="new-offer-form">
           <h2>Yeni Təklif</h2>
           
           <div className="form-row">
             <div className="form-group">
               <label>Xidmət tipi</label>
               <select>
                 <option>AIR_TICKET</option>
                 <option>HOTEL_BOOKING</option>
                 <option>TOUR_PACKAGE</option>
               </select>
             </div>
             <div className="form-group">
               <label>Status</label>
               <select>
                 <option>INTERESTED</option>
                 <option>CONFIRMED</option>
                 <option>PAID</option>
               </select>
             </div>
           </div>
         
           <div className="form-row">
             <div className="form-group">
               <label>Planlama tarixi</label>
               <input type="date" name="planDate" onChange={handleChange} />
             </div>
             <div className="form-group">
               <label>Alınma tarixi</label>
               <input type="date" name="purchaseDate" onChange={handleChange} />
             </div>
           </div>
         
           <div className="form-row">
             <div className="form-group">
               <label>Səfər tarixi</label>
               <input type="date" name="departureDate" onChange={handleChange} />
             </div>
             <div className="form-group">
               <label>Qayıtma tarixi</label>
               <input type="date" name="returnDate" onChange={handleChange} />
             </div>
           </div>
         
           <div className="form-row">
             <div className="form-group">
               <label>Ödəniş tarixi</label>
               <input type="date" name="paymentDate" onChange={handleChange} />
             </div>
             <div className="form-group">
               <label>İlkin ödəniş tarixi</label>
               <input type="date" onChange={handleChange} />
             </div>
           </div>
         
           <div className="form-group">
                <label>Şəhərlər</label>
                <Select
                  isMulti
                  name="cities"
                  options={cityOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={handleCitiesChange}
                  value={formData.cities}  
                />
              </div>
           
           <button className="save-btn">Yadda saxla</button>
         </div>
         
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
