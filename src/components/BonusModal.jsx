import React, { useState } from 'react';
import './BonusModal.scss';
import { FaTimes, FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import Closebtn from "../assets/close_Button.svg"
const BonusModal = ({ closeModal }) => {
  const [selectedRows, setSelectedRows] = useState(Array(4).fill(false)); 
  const handleRowClick = (index) => {
    const updatedSelection = [...selectedRows];
    updatedSelection[index] = !updatedSelection[index]; 
    setSelectedRows(updatedSelection);
  };

  return (
    <div className="bonus-modal-overlay">
      <div className="bonus-modal">
        {/* Modal Header */}
        <div className="bonus-modal-header">
          <h2>Bonuslar</h2>
          <button className="close-btn" onClick={closeModal}>
            <img src={Closebtn} alt="" />
          </button>
        </div>

        {/* Bonus Table */}
        <table className="bonus-table">
          <thead>
            <tr>
              <th>№</th>
              <th>İşçinin adı</th>
              <th>Turun adı</th>
              <th>Bonus</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {["Qumral", "Ülkar", "Kamil", "Qumral"].map((name, index) => (
              <tr key={index} onClick={() => handleRowClick(index)}>
                <td>TL/41615574-5</td>
                <td>{name}</td>
                <td>Alanya Justiniano</td>
                <td>50</td>
                <td className="status">
                  {selectedRows[index] ? (
                    <FaCheckCircle className="status-checked" />
                  ) : (
                    <FaRegCircle className="status-unchecked" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="confirm-section">
          <button className="confirm-btn">Təsdiqlə</button>
        </div>
      </div>
    </div>
  );
};

export default BonusModal;
