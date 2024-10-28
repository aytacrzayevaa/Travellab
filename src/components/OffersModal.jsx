import React from "react";
import "./OffersModal.scss";

const OffersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="offers-modal-overlay">
      <div className="offers-modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Təkliflər</h2>
        <div className="offers-content">SAAAALAAAAMMMMMLAAAARR </div>
      </div>
    </div>
  );
};

export default OffersModal;
