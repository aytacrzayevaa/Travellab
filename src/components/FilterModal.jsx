import React from 'react';
import './FilterModal.scss'; 

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Filter</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Ad:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Tur Manager:</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Nömrə:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Manager nömrəsi:</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>FIN:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Göndərilən mesajdan:</label>
              <input type="date" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Doğum tarixindən:</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Göndərilən mesaj:</label>
              <input type="date" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Doğum tarixinə:</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Yaradılma tarixindən:</label>
              <input type="date" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Mail ünvan:</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Yaradılıb:</label>
              <input type="date" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Vətandaşlıq:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Servis tipi:</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Cinsi:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Ailə vəziyyəti:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Ölkə:</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Valideyn:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Şəhər:</label>
              <input type="text" />
            </div>
          </div>
          <div className="modal-buttons">
            <button type="button" className="reset-btn">Sıfırla</button>
            <button type="submit" className="submit-btn">Aktar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
