import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./AddExpense.scss";
import CloseBtn from "../assets/close_Button.svg";
import Plusicon from "../assets/expenses/Plus.svg";

const AddExpense = ({ isOpen, onClose, onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Vergi", "Reklam", "Əmək haqqı", "Ofis"];

  if (!isOpen) return null;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="new-exp">
      <div className="new-exp__content">
        <span className="new-exp__close-btn" onClick={onClose}>
          <img src={CloseBtn} alt="close" />
        </span>
        <h2 className="new-exp__header">Xərc</h2>

        <Formik
          initialValues={{
            expenseName: selectedCategory,
            amount: "",
          }}
          onSubmit={(values) => {
            onSubmit(values);
          }}
          enableReinitialize
        >
          {({ setFieldValue }) => (
            <Form className="new-exp-form">
              <div className="new-exp-form__field-group">
                <label htmlFor="expenseName">Xərcin adı</label>
                <Field
                  name="expenseName"
                  type="text"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setFieldValue("expenseName", e.target.value);
                  }}
                  placeholder="Xərcin adını yazın və ya aşağıdan seçin"
                />
                <ErrorMessage
                  name="expenseName"
                  component="div"
                  className="input-error"
                />
              </div>

              <div className="new-exp-form__categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className="new-exp-form__category-btn"
                    onClick={() => {
                      handleCategoryClick(category);
                      setFieldValue("expenseName", category);
                    }}
                  >
                    <img src={Plusicon} alt="" /> {category}
                  </button>
                ))}
              </div>

              <div className="new-exp-form__field-group">
                <label htmlFor="amount">Məbləğ</label>
                <Field name="amount" type="number" />
                <ErrorMessage
                  name="amount"
                  component="div"
                  className="input-error"
                />
              </div>

              <button type="submit" className="new-exp-form__submit-btn">
                Əlavə et
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddExpense;

//backend
// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import axios from "axios";
// import "./AddExpense.scss";
// import CloseBtn from "../assets/close_Button.svg";
// import Plusicon from "../assets/expenses/Plus.svg";

// const AddExpense = ({ isOpen, onClose }) => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const categories = ["Vergi", "Reklam", "Əmək haqqı", "Ofis"];

//   if (!isOpen) return null;

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const submitExpense = async (values, { resetForm }) => {
//     try {
//       const response = await axios.post("http://localhost:8080/api/expenses", values);
//       console.log("Gönderim başarılı:", response.data);
//       resetForm(); 
//       onClose();   
//     } catch (error) {
//       console.error("Gönderim hatası:", error);
//     }
//   };

//   return (
//     <div className="new-exp">
//       <div className="new-exp__content">
//         <span className="new-exp__close-btn" onClick={onClose}>
//           <img src={CloseBtn} alt="close" />
//         </span>
//         <h2 className="new-exp__header">Xərc</h2>

//         <Formik
//           initialValues={{
//             expenseName: selectedCategory,
//             amount: "",
//           }}
//           onSubmit={submitExpense}
//           enableReinitialize
//         >
//           {({ setFieldValue }) => (
//             <Form className="new-exp-form">
//               <div className="new-exp-form__field-group">
//                 <label htmlFor="expenseName">Xərcin adı</label>
//                 <Field
//                   name="expenseName"
//                   type="text"
//                   value={selectedCategory}
//                   onChange={(e) => {
//                     setSelectedCategory(e.target.value);
//                     setFieldValue("expenseName", e.target.value);
//                   }}
//                   placeholder="Xərcin adını yazın və ya aşağıdan seçin"
//                 />
//                 <ErrorMessage
//                   name="expenseName"
//                   component="div"
//                   className="input-error"
//                 />
//               </div>

//               <div className="new-exp-form__categories">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     type="button"
//                     className="new-exp-form__category-btn"
//                     onClick={() => {
//                       handleCategoryClick(category);
//                       setFieldValue("expenseName", category);
//                     }}
//                   >
//                     <img src={Plusicon} alt="" /> {category}
//                   </button>
//                 ))}
//               </div>

//               <div className="new-exp-form__field-group">
//                 <label htmlFor="amount">Məbləğ</label>
//                 <Field name="amount" type="number" />
//                 <ErrorMessage
//                   name="amount"
//                   component="div"
//                   className="input-error"
//                 />
//               </div>

//               <button type="submit" className="new-exp-form__submit-btn">
//                 Əlavə et
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default AddExpense;
