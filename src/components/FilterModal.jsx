// import React, { useRef } from "react";
// import "./FilterModal.scss";
// import Closebtn from "../assets/close_Button.svg";

// const FilterModal = ({ isOpen, onClose }) => {
//   const formRef = useRef(null);

//   const handleReset = () => {
//     if (formRef.current) {
//       formRef.current.reset();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <div className="modal-content-header">
//           <h2>Filter</h2>
//           <img src={Closebtn} onClick={onClose} alt="" />
//         </div>
//         <form ref={formRef}>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Ad</label>
//               <input type="text" name="ad" />
//             </div>
//             <div className="form-group">
//               <label>Tur Manager</label>
//               <input type="text" name="turManager" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Nömrə</label>
//               <input type="text" name="nomre" />
//             </div>
//             <div className="form-group">
//               <label>Manager nömrəsi</label>
//               <input type="text" name="managerNomresi" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>FİN</label>
//               <input type="text" name="fin" />
//             </div>
//             <div className="form-group">
//               <label>Göndərilən mesajdan</label>
//               <input type="date" name="gonderilenMesajdan" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Doğum tarixindən</label>
//               <input type="date" name="dogumTarixinden" />
//             </div>
//             <div className="form-group">
//               <label>Göndərilən mesaj</label>
//               <input type="date" name="gonderilenMesaj" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Doğum tarixinə</label>
//               <input type="date" name="dogumTarixine" />
//             </div>
//             <div className="form-group">
//               <label>Yaradılma tarixindən</label>
//               <input type="date" name="yaradilmadan" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Mail ünvan</label>
//               <input type="email" name="mailUnvan" />
//             </div>
//             <div className="form-group">
//               <label>Yaradılıb</label>
//               <input type="date" name="yaradilib" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Vətandaşlıq</label>
//               <input type="text" name="vetandasliq" />
//             </div>
//             <div className="form-group">
//               <label>Servis tipi</label>
//               <input type="text" name="servisTipi" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Cinsi</label>
//               <select name="cinsi">
//                 <option value="">Seçin</option>
//                 <option value="qadin">Qadın</option>
//                 <option value="kisi">Kişi</option>
//                 <option value="-">-</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Status</label>
//               <input type="text" name="status" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Ailə vəziyyəti</label>
//               <select name="aileVeziyyeti">
//                 <option value="">Seçin</option>
//                 <option value="evli">Evli</option>
//                 <option value="subay">Subay</option>
//                 <option value="bosanmis">Boşanmış</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label>Ölkə</label>
//               <input type="text" name="ölkə" />
//             </div>
//           </div>
//           <div className="form-row">
//             <div className="form-group">
//               <label>Valideyn</label>
//               <input type="text" name="valideyn" />
//             </div>
//             <div className="form-group">
//               <label>Şəhər</label>
//               <input type="text" name="sehər" />
//             </div>
//           </div>
//           <div className="modal-buttons">
//             <button type="button" className="reset-btn" onClick={handleReset}>
//               Sıfırla
//             </button>
//             <button type="submit" className="submit-btn">
//               Axtar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FilterModal;
import React, { useRef } from "react";
import "./FilterModal.scss";
import Closebtn from "../assets/close_Button.svg";

const FilterModal = ({ isOpen, onClose }) => {
  const formRef = useRef(null);

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="filter-overlay">
      <div className="filter-container">
        <div className="filter-header">
          <h2>Filter</h2>
          <img src={Closebtn} onClick={onClose} alt="" />
        </div>
        <form ref={formRef}>
          <div className="filter-row">
            <div className="filter-group">
              <label>Ad</label>
              <input type="text" name="ad" />
            </div>
            <div className="filter-group">
              <label>Tur Manager</label>
              <input type="text" name="turManager" />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Nömrə</label>
              <input type="text" name="nomre" />
            </div>
            <div className="filter-group">
              <label>Manager nömrəsi</label>
              <input type="text" name="managerNomresi" />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>FİN</label>
              <input type="text" name="fin" />
            </div>
            <div className="filter-group">
              <label>Göndərilən mesajdan</label>
              <input type="date" name="gonderilenMesajdan" />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Doğum tarixindən</label>
              <input type="date" name="dogumTarixinden" />
            </div>
            <div className="filter-group">
              <label>Göndərilən mesaj</label>
              <input type="date" name="gonderilenMesaj" />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Doğum tarixinə</label>
              <input type="date" name="dogumTarixine" />
            </div>
            <div className="filter-group">
              <label>Yaradılma tarixindən</label>
              <input type="date" name="yaradilmadan" />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Mail ünvan</label>
              <input type="email" name="mailUnvan" />
            </div>
            <div className="filter-group">
              <label>Yaradılıb</label>
              <input type="date" name="yaradilib" />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Vətandaşlıq</label>
              <input type="text" name="vetandasliq" />
            </div>
            <div className="filter-group">
              <label>Servis tipi</label>
              <input type="text" name="servisTipi" />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Cinsi</label>
              <select name="cinsi">
                <option value="">Seçin</option>
                <option value="qadin">Qadın</option>
                <option value="kisi">Kişi</option>
                <option value="-">-</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Status</label>
              <input type="text" name="status" />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Ailə vəziyyəti</label>
              <select name="aileVeziyyeti">
                <option value="">Seçin</option>
                <option value="evli">Evli</option>
                <option value="subay">Subay</option>
                <option value="bosanmis">Boşanmış</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Ölkə</label>
              <input type="text" name="ölkə" />
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-group">
              <label>Valideyn</label>
              <input type="text" name="valideyn" />
            </div>
            <div className="filter-group">
              <label>Şəhər</label>
              <input type="text" name="sehər" />
            </div>
          </div>
          <div className="filter-buttons">
            <button type="button" className="filter-reset-btn" onClick={handleReset}>
              Sıfırla
            </button>
            <button type="submit" className="filter-submit-btn">
              Axtar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
