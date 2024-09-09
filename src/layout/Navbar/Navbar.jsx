import React, { useState } from "react";
import ReactDOM from "react-dom";
import QRdemo from "../../assets/QR_demo.svg";
import Closebtn from "../../assets/close_Button.svg";
import List from "../../assets/List (1).svg";
import List2 from "../../assets/List (1) kopyası.svg";
import Calculator from "../../assets/QR_Button.svg";
import Qrbutton from "../../assets/QR_Button (1).svg";
import Profile from "../../assets/Profile_Button.svg";
import { useNavbar } from "../../context/NavbarContext";
import "./Navbar.scss";

const Navbar = () => {
  const { isNavbarCollapsed, handleNavbarToggle } = useNavbar();

  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);

  const openQrModal = () => setIsQrModalOpen(true);
  const closeQrModal = () => setIsQrModalOpen(false);

  const openCalculatorModal = () => setIsCalculatorModalOpen(true);
  const closeCalculatorModal = () => setIsCalculatorModalOpen(false);

  const QrModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div className="qrmodal">
        <div className="qrmodal__content">
          <div className="qrmodal__header">
            <button className="qrmodal__close" onClick={onClose}>
              <img src={Closebtn} alt="" />
            </button>
            <p>QR Code</p>
          </div>
          <div className="qrmodal__body">
            <img src={QRdemo} alt="" />
            <h4>Skan et</h4>
            <p>
              Skan etdikdən sonra, sizin “WhatsApp” konktaktlarınız əlavə
              olacaqdır
            </p>
            <button className="qrmodal__close-button" onClick={onClose}>
              Bağla
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  const CalculatorModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div className="ctmodal">
        <div className="ctmodal__content">
          <div className="ctmodal__header">
            <button className="ctmodal__close" onClick={onClose}>
              <img src={Closebtn} alt="Close" />
            </button>
            <p>Kalkulyator</p>
          </div>
          <div className="ctmodal__body">
            <div className="ctmodal__body__top">
              <div className="ctmodal__body__top__item">
                <p>Yekun məbləğ</p>
                <h4>5 000 AZN</h4>
              </div>
              <div className="ctmodal__body__top__item">
                <p>Aylıq ödəniş</p>
                <h4>400 AZN</h4>
              </div>
            </div>
            <div className="ctmodal__body__middle">
              {/* First input for "qiymet" */}
              <div className="input-group">
                <label htmlFor="qiymet">Qiymət (AZN)</label>
                <input
                  type="number"
                  
                  name="qiymet"
                  placeholder="Məbləğ"
                />
              </div>

              <div className="input-group">
                <label htmlFor="ay">Ay sayı</label>
                <select type="number"  name="ay">
                  {Array.from({ length: 24 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month}>
                      {month} Ay
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="taksitKarti">Taksit Kartı</label>
                <select  name="taksitKarti">
                  <option value="tamkart">TamKart</option>
                  <option value="birkart">BirKart</option>
                  <option value="neokart">NeoKart</option>
                  <option value="yelokart">YeloKart</option>
                </select>
              </div>
            </div>

            <div className="ctmodal__body__bottom">
              {/* <button className="ctmodal__close-button">Hesabla</button> */}
              <button className="ctmodal__close-button" onClick={onClose}>
                Bağla
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div
      className={`navbar ${
        isNavbarCollapsed ? "navbar--closed" : "navbar--open"
      }`}
    >
      <div className="navbar__logo">{/* Logo here */}</div>
      <div className="navbar__data">
        <div className="navbar__data__left">
          <button
            onClick={handleNavbarToggle}
            className={isNavbarCollapsed ? "button--moved" : ""}
          >
            <img src={isNavbarCollapsed ? List2 : List} alt="Toggle Navbar" />
          </button>
        </div>
        <div className="navbar__data__right">
          <img
            src={Calculator}
            alt="Calculator"
            onClick={openCalculatorModal}
          />
          <img src={Qrbutton} alt="QR Button" onClick={openQrModal} />
          <img src={Profile} alt="Profile" />
        </div>
      </div>

      <QrModal isOpen={isQrModalOpen} onClose={closeQrModal} />
      <CalculatorModal
        isOpen={isCalculatorModalOpen}
        onClose={closeCalculatorModal}
      />
    </div>
  );
};

export default Navbar;
