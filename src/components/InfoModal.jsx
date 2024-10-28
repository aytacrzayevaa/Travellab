import React, { useState } from "react";
import "./InfoModal.scss";
import Info from "../assets/sales/Info.svg";
import Mark from "../assets/sales/Vector (1).svg";
import Money from "../assets/sales/Vector (2).svg";
import History from "../assets/sales/ClockCounterClockwise.svg";
import Closebtn from "../assets/close_Button.svg";
import Eye from "../assets/sales/Eye.svg";
import { IoIosArrowDown } from "react-icons/io";
import ArrowDown from "../assets/sales/ArrowsClockwise.svg"
import Changes from "../assets/sales/Changes.svg"
const InfoModal = ({ closeModal }) => {
  const [activeTab, setActiveTab] = useState("main");

  
  const [showChangesDetails, setShowChangesDetails] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowChangesDetails(false); 
  };

  const handleToggleChangesDetails = () => {
    setShowChangesDetails(!showChangesDetails);
  };

  const bookingContent = (
    <div>
      <h2>Booking</h2>
      <form className="booking-form">
        <div className="form-group">
          <div className="form-row">
            <div className="form-group">
              <label>TİP</label>
              <select>
                <option>Air Ticket</option>
                <option>Lorem</option>
              </select>
            </div>
            <div className="form-group">
              <label>Rezerv məkanı</label>
              <input type="text" value="-" readOnly />
            </div>
            <div className="form-group">
              <label>Rezerv nömrəsi</label>
              <input type="text" value="-" readOnly />
            </div>
          </div>

          {/* İkinci sıra */}
          <div className="form-row">
            <div className="form-group">
              <label>Faiz</label>
              <input type="text" value="-" readOnly />
            </div>
            <div className="form-group">
              <label>Satış məbləği</label>
              <input type="number" value="0" readOnly />
            </div>
            <div className="form-group">
              <label>Alış məbləği</label>
              <input type="number" value="0" readOnly />
            </div>
          </div>

          {/* Üçüncü sıra */}
          <div className="form-row">
            <div className="form-group">
              <label>Ödənilmiş</label>
              <input type="number" value="0" readOnly />
            </div>
            <div className="form-group">
              <label>Qalıq məbləğ</label>
              <input type="number" value="0" readOnly />
            </div>
            <div className="form-group">
              <label>Yaradılma Tarixi</label>
              <input type="date" value="2024-11-24" readOnly />
            </div>
          </div>

          {/* dorduncu sira */}
          <div className="form-row">
            <div className="form-group">
              <label>Komissiya</label>
              <input type="number" value="0" readOnly />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select>
                <option>PAID</option>
                <option>PROCESSING</option>
              </select>{" "}
            </div>
            <div className="form-group">
              <label>Açıqlama</label>
              <input type="text" value="-" readOnly />
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  const paymentContent = (
    <div>
      <h2>Ödəniş</h2>
      <form className="payment-form">
        <div className="form-group">
          <div className="form-row">
            <div className="form-group">
              <label>Ödəniş tipi</label>
              <select>
                <option>CASH</option>
                <option>CARD</option>
              </select>
            </div>
            <div className="form-group">
              <label>Ödənilmiş məbləğ</label>
              <input type="number" value="0" readOnly />
            </div>
            <div className="form-group">
              <label>Ödənilməmiş məbləğ</label>
              <input type="number" value="0" readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Satış tarixi</label>
              <input type="date" value="2024-11-24" readOnly />
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  // const historyContent = (
  //   <div>
  //     <h2>Tarixçə</h2>
  //     <ul>
  //       <li className="history-item">
  //         <div className="left-content">
  //           <span className="version">v1</span>
  //           <span className="role">| ADMIN</span>
  //           <span className="date">- 2024-08-07 17:24:52</span>
  //         </div>
  //         <div className="view-changes">
  //         <button>
  //           <img src={Changes} alt="" />
  //         </button>
  //           <IoIosArrowDown />
  //         </div>
  //       </li>
  //       <li className="history-item">
  //         <div className="left-content">
  //           <span className="version">v1</span>
  //           <span className="role">| ADMIN</span>
  //           <span className="date">- 2024-08-07 17:24:52</span>
  //         </div>
  //         <div className="view-changes">
  //         <button>
  //           <img src={Changes} alt="" />
  //         </button>
  //           <IoIosArrowDown />
  //         </div>
  //       </li>
  //     </ul>
  //   </div>
  // );
  const historyContent = (
    <div>
      <h2>Tarixçə</h2>
      <ul>
        <li className="history-item">
          <div className="left-content">
            <span className="version">v1</span>
            <span className="role">| ADMIN</span>
            <span className="date">- 2024-08-07 17:24:52</span>
          </div>
          <div className="view-changes">
            <button onClick={handleToggleChangesDetails}>
              <img src={Changes} alt="Changes" />
            </button>
            <IoIosArrowDown />
          </div>
        </li>
        <li className="history-item">
          <div className="left-content">
            <span className="version">v2</span>
            <span className="role">| ADMIN</span>
            <span className="date">- 2024-08-08 11:15:32</span>
          </div>
          <div className="view-changes">
            <button onClick={handleToggleChangesDetails}>
              <img src={Changes} alt="Changes" />
            </button>
            <IoIosArrowDown />
          </div>
        </li>
      </ul>
      {showChangesDetails && (
        <div className="changes-details">
          <h3>Change Details</h3>
          <img src="/path/to/Frame 3 (8).png" alt="Detailed Changes" />
          <p>Detailed information about the changes in this version.</p>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "booking":
        return bookingContent;
      case "payment":
        return paymentContent;
      case "history":
        return historyContent;
      case "main":
      default:
        return (
          <div>
            <h2>Əsas</h2>
            <form className="info-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Adı</label>
                  <input
                    type="text"
                    value="Amirali Shukurov Nazimovich"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Nömrə</label>
                  <input type="text" value="+994776334424" readOnly />
                </div>
                <div className="form-group">
                  <label>FİN</label>
                  <input type="text" value="1ENGSMP" readOnly />
                </div>
              </div>

              {/* İkinci sıra */}
              <div className="form-row">
                <div className="form-group">
                  <label>Satış nömrəsi</label>
                  <input type="text" value="TL/41615574-5" readOnly />
                </div>
                <div className="form-group">
                  <label>Tanışdırmı</label>
                  <select>
                    <option value="Bəli">Bəli</option>
                    <option value="Xeyr">Xeyr</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Əlaqə</label>
                  <select>
                    <option value="Tanışlıq">Tanışlıq</option>
                    <option value="Qohumluq">Qohumluq</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Satış Tipi</label>
                  <select>
                    <option value="AİR_TİCKET">Air Ticket</option>
                    <option value="Lorem">Lorem</option>
                  </select>{" "}
                </div>
                <div className="form-group">
                  <label>Uçuş tarixi</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Geri uçuş tarixi</label>
                  <input type="date" />
                </div>
              </div>

              <div className="form-row full-width">
                <div className="form-group">
                  <label>Şəhərlər</label>
                  <div className="tags">
                    <span>Bodrum</span>
                    <span>Alanya</span>
                  </div>
                </div>
              </div>

              <div className="form-row full-width">
                <div className="form-group">
                  <label>Qeyd</label>
                  <textarea></textarea>
                </div>
              </div>
            </form>
          </div>
        );
    }
  };

  return (
    <div className="info-modal-overlay">
      <div className={`info-modal ${activeTab}-tab`}>
        <button className="close-btn" onClick={closeModal}>
          <img src={Closebtn} alt="Close" />
        </button>
        <div className="info-modal-content">
          <div className="left-navbar">
            <ul>
              <li
                className={activeTab === "main" ? "active" : ""}
                onClick={() => handleTabChange("main")}
              >
                <img src={Info} alt="" />
                Əsas
              </li>
              <li
                className={activeTab === "booking" ? "active" : ""}
                onClick={() => handleTabChange("booking")}
              >
                <img src={Mark} alt="" />
                Booking
              </li>
              <li
                className={activeTab === "payment" ? "active" : ""}
                onClick={() => handleTabChange("payment")}
              >
                <img src={Money} alt="" />
                Ödəniş
              </li>
              <li
                className={activeTab === "history" ? "active" : ""}
                onClick={() => handleTabChange("history")}
              >
                <img src={History} alt="" />
                Tarixçə
              </li>
            </ul>
          </div>
          <div className="right-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
