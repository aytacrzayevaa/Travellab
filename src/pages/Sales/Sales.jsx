import "./Sales.scss";
import Bonus from "../../assets/sales/Bonus.svg";
import NewOff from "../../assets/sales/new.svg";
import Filter from "../../assets/sales/filter.svg";
import Eye from "../../assets/sales/Eye.svg";
import FilterModal2 from "../../components/FilterModal2";
import NewOffer from "../../components/NewOffer";
import InfoModal from "../../components/InfoModal";
import BonusModal from "../../components/BonusModal";
import { useState } from "react";
import { useNavbar } from "../../context/NavbarContext";

const Sales = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewOfferOpen, setIsNewOfferOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isBonusModalOpen, setIsBonusModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const { isNavbarCollapsed } = useNavbar();

  const handleFilterClick = () => {
    setIsModalOpen(true);
  };

  const handleNewOfferClick = () => {
    setIsNewOfferOpen(true);
  };

  const handleEyeClick = (e) => {
    e.stopPropagation();
    setIsInfoModalOpen(true);
  };

  const handleBonusClick = () => {
    setIsBonusModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeNewOffer = () => {
    setIsNewOfferOpen(false);
  };

  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  const closeBonusModal = () => {
    setIsBonusModalOpen(false);
  };

  const handleRowClick = (index) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
      setIsBonusModalOpen(true);
    }
  };

  return (
    <div
      className={`sales-container ${
        isNavbarCollapsed ? "sales-container--navbar-closed" : ""
      }`}
    >
      {/* Header Section */}
      <div className="sales-header">
        <div className="breadcrumb">
          <span>Əsas səhifə / </span>
          <span className="current-page">Satışlar</span>
        </div>
        <div className="header-buttons">
          <button onClick={handleBonusClick}>
            <img src={Bonus} alt="Bonuslari Ver" />
          </button>
          <button onClick={handleFilterClick}>
            <img src={Filter} alt="Filtrele" />
          </button>
          <button onClick={handleNewOfferClick}>
            <img src={NewOff} alt="Yeni Teklif" />
          </button>
        </div>
      </div>

      {/* Table Section */}
      <table className="sales-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Turun adı</th>
            <th>Müştəri</th>
            <th>Əməkdaş</th>
            <th>Satılan qiymət</th>
            <th>Bonus</th>
            <th>Status</th>
            <th>Satış Tarixi</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 9 }).map((_, index) => (
            <tr
              key={index}
              className={selectedRow === index ? "selected" : ""}
              onClick={() => handleRowClick(index)}
            >
              <td>TL/41615574-5</td>
              <td>Alanya</td>
              <td>Şükürov Əmirali</td>
              <td>Qumral Mahmudova</td>
              <td>5000</td>
              <td>50</td>
              <td className="status">Təsdiq gözlənilir</td>
              <td>24.11.2024</td>
              <td className="actions">
                <img src={Eye} alt="Eye" onClick={handleEyeClick} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Section */}
      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">4</button>
        <button className="page-btn">5</button>
        <span className="ellipsis">...</span>
        <button className="page-btn">95</button>
      </div>

      {/* Modals */}
      {isModalOpen && <FilterModal2 closeModal={closeModal} />}
      {isNewOfferOpen && <NewOffer closeModal={closeNewOffer} />}
      {isInfoModalOpen && <InfoModal closeModal={closeInfoModal} />}
      {isBonusModalOpen && <BonusModal closeModal={closeBonusModal} />}
      {/* BonusModal */}
    </div>
  );
};

export default Sales;
