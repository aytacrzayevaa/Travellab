import React, { useState } from 'react';
import './Messages.scss'; 
import Select from 'react-select';
import { useNavbar } from '../../context/NavbarContext';

const Messages = () => {
  const [cities, setCities] = useState([]);
  const { isNavbarCollapsed } = useNavbar();

  const cityOptions = [
    { value: 'Bodrum', label: 'Bodrum' },
    { value: 'Alanya', label: 'Alanya' },
  ];
  const handleCityChange = (selectedOptions) => {
    setCities(selectedOptions);
  };
  return (
    <div className={`messages-page ${isNavbarCollapsed ? "messages-page--closed" : ""}`}>
      <div className="breadcrumbb">
        <a href="/">Əsas səhifə</a> / Mesajı göndər
      </div>

      <div className="message-container">
        <form>
          <div className="form-groupp">
            <label>Nömrələr (vergüllə ayırın)</label>
            <input type="num" placeholder="+994776334424, +994774309724" />
          </div>

          <div className="form-groupp">
            <label>Hansı nömrədən göndərilsin?</label>
            <select className="select-dropdown">
              <option value="+9945190802054">+9945190802054</option>
              <option value="+9945194580434">+9945194580434</option>
              <option value="+9945167680434">+9945167680434</option>
            </select>
          </div>
          <div className="form-groupp">
          <label>Şəhərlər</label>
          <Select
            isMulti
            options={cityOptions}
            value={cities}
            onChange={handleCityChange}
            className="city-selector"
            classNamePrefix="select"
          />
        </div>

          <div className="form-groupp">
            <label>Mesaj</label>
            <textarea placeholder="Mesajı bura yazın"></textarea>
          </div>

          <button className="submit-button">Göndər</button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
