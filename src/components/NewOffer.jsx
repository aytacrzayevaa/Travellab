import React, { useState } from "react";
import "./NewOffer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import Closebtn from "../assets/close_Button.svg";
import Plus from "../assets/sales/Plus.svg";
import Select from "react-select";
const citiesOptions = [
  { value: "Bodrum", label: "Bodrum" },
  { value: "Alanya", label: "Alanya" },
  { value: "İstanbul", label: "İstanbul" },
];
const NewOffer = ({ closeModal }) => {
  const [isCustomerFound, setIsCityFound] = useState(false);
  const handleCitiesChange = (selectedCities) => {
    setFormData({ ...formData, cities: selectedCities });
  };

  const [formData, setFormData] = useState({
    cities: [], 
  });

  const handleSearch = () => {
    setIsCityFound(true);
  };

  return (
    <div className="new-offer-modal">
      <div className="new-offer-content">
        <div className="modal-header">
          <h2>Yeni sifarişin yaradılması</h2>
          <button className="close-button" onClick={closeModal}>
            <img src={Closebtn} alt="close" />
          </button>
        </div>
        <div className="modal-body">
          <label htmlFor="customer-number">Müştərinin nömrəsi</label>
          <div className="search-box">
            <input
              type="text"
              id="customer-number"
              placeholder="+994"
              disabled={isCustomerFound}
            />
            <button className="search-button" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {isCustomerFound ? (
            <div className="customer-details">
              <p>Əsas</p>
              <div className="main-info grid-3">
                <div className="info-item">
                  <label>Müştəri</label>
                  <input type="text" value="Amirali Shukurov Nazimovich" />
                </div>
                <div className="info-item">
                  <label>Nömrə</label>
                  <input type="text" value="+994776334424" />
                </div>
                <div className="info-item">
                  <label>FİN</label>
                  <input type="text" value="-" />
                </div>
              </div>

              <div className="flight-info grid-3">
                <div className="info-item">
                  <label>Satış tipi</label>
                  <select>
                    <option value="">Seçin</option>
                    <option value="AIR_TICKET">AIR_TICKET</option>
                  </select>
                </div>
                <div className="info-item">
                  <label>Satış növü</label>
                  <select>
                    <option value="AIR_TICKET">AIR_TICKET</option>
                  </select>
                </div>
                <div className="info-item">
                  <label>Əlaqə</label>
                  <select>
                    <option value="Tanışlıq">Tanışlıq</option>
                  </select>
                </div>
              </div>

              <div className="flight-dates grid-2">
                <div className="info-item">
                  <label>Uçuş tarixi</label>
                  <input type="date" value="2024-11-24" readOnly />
                </div>
                <div className="info-item">
                  <label>Geri uçuş tarixi</label>
                  <input type="date" value="2024-11-24" readOnly />
                </div>
                <div className="cities-info">
                  <label>Şəhərlər</label>
                  <Select
                    isMulti
                    name="cities"
                    options={citiesOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    value={formData.cities}
                    onChange={handleCitiesChange}
                  />
                </div>
              </div>

              <p>Booking</p>
              <div className="booking-info grid-3">
                <div className="info-item">
                  <label>TİP</label>
                  <input type="text" value="AIR_TICKET" readOnly />
                </div>
                <div className="info-item">
                  <label>Rezerv məkanı</label>
                  <select>
                    <option value="">Seçin</option>
                  </select>
                </div>
                <div className="info-item">
                  <label>Rezerv nömrəsi</label>
                  <input type="text" value="" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Faiz</label>
                  <input type="text" value="" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Rəsmi satış</label>
                  <input type="text" value="" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Alış məbləği</label>
                  <input type="text" value="" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Satış məbləği</label>
                  <input type="text" value="" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Ödənilmiş</label>
                  <input type="text" value="" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Qalıq məbləğ</label>
                  <input type="text" value="" placeholder="-" />
                </div>

                <div className="info-item">
                  <label>Komissiya</label>
                  <input type="text" value="" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Invoice göndərilib</label>
                  <input type="text" value="" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Status</label>
                  <input type="text" value="" placeholder="-" />
                </div>
                <div className="more-info">
                  <label>Açıqlama</label>
                  <input type="text" />
                </div>
                <button className="add-more">
                  <img src={Plus} alt="" />
                </button>
              </div>

              <div className="booking-info grid-4">
                <div className="info-item">
                  <label>Ödənişin tipi</label>
                  <input type="text" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Ödənilmiş məbləğ</label>
                  <input type="text" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Qalıq məbləğ</label>
                  <input type="text" placeholder="-" />
                </div>
                <div className="info-item">
                  <label>Tarix</label>
                  <input type="date" placeholder="-" />
                </div>
                <button className="add-more2">
                  <img src={Plus} alt="" />
                </button>
              </div>

              <button className="create-sale">Satış yarat</button>
            </div>
          ) : (
            <div className="modal-buttons">
              <button className="create-customer">+ Müştəri yarat</button>
              <button className="create-sale" disabled>
                Satış yarat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewOffer;
