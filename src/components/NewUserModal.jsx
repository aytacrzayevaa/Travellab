import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./NewUserModal.scss";
import CloseBtn from "../assets/close_Button.svg";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";


const NewUserModal = ({ isOpen, onClose, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false); 
  if (!isOpen) return null;

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="new-user-modal">
      <div className="new-user-modal__content">
        <span className="new-user-modal__close-btn" onClick={onClose}>
          <img src={CloseBtn} alt="close" />
        </span>
        <h2 className="new-user-modal__header">Yeni İstifadəçi</h2>

        <Formik
          initialValues={{
            fullName: "",
            username: "",
            phone: "",
            password: "",
          }}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          <Form className="new-user-form">
            <div className="new-user-form__field-group">
              <label htmlFor="fullName">Ad Soyad</label>
              <Field name="fullName" type="text" />
              <ErrorMessage
                name="fullName"
                component="div"
                className="input-error"
              />
            </div>

            <div className="new-user-form__field-group">
              <label htmlFor="username">İstifadəçi adı (Username)</label>
              <Field name="username" type="text" />
              <ErrorMessage
                name="username"
                component="div"
                className="input-error"
              />
            </div>

            <div className="new-user-form__field-group">
              <label htmlFor="phone">Nömrə</label>
              <Field name="phone" type="text" />
              <ErrorMessage
                name="phone"
                component="div"
                className="input-error"
              />
            </div>

            <div className="new-user-form__field-group">
              <label htmlFor="password">Şifrə</label>
              <div className="input-wrapper">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"} 
                  className="password-input"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="password-toggle-btn"
                >
                  {showPassword ? <BsEye /> : <BsEyeSlash />}{" "}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="input-error"
              />
            </div>

            <button type="submit" className="new-user-form__submit-btn">
              Əlavə et
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewUserModal;
