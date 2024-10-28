import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './NewCustomerModal.scss';
import Closebtn from '../assets/close_Button.svg';

const NewCustomerModal = ({ isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      customerName: '',
      phoneNumber: '',
      email: '',
      birthDate: '',
      nationality: 'AZE',
      familyStatus: '',
      gender: '',
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required('Ad sahəsi zəruridir.'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Nömrə 10 rəqəmdən ibarət olmalıdır.')
        .required('Telefon nömrəsi zəruridir.'),
      email: Yup.string().email('Düzgün email daxil edin.').required('Email zəruridir.'),
    }),
    onSubmit: (values) => {
      console.log('New Customer Data:', values);
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="customer-modal-overlay">
      <div className="customer-modal">
        <button className="close-btn" onClick={onClose}>
          <img src={Closebtn} alt="Close" />
        </button>
        <h2>Müştərinin yaradılması</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-grid">
            <div className={`form-group ${formik.touched.customerName && formik.errors.customerName ? 'error-border' : ''}`}>
              <label htmlFor="customerName">
                Ad<span className="required">*</span>
              </label>
              <input
                type="text"
                id="customerName"
                {...formik.getFieldProps('customerName')}
                placeholder="Müştərinin adını daxil edin"
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthDate">Doğum tarixi</label>
              <input
                type="date"
                id="birthDate"
                {...formik.getFieldProps('birthDate')}
              />
            </div>

            <div className={`form-group ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'error-border' : ''}`}>
              <label htmlFor="phoneNumber">
                Nömrə<span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                {...formik.getFieldProps('phoneNumber')}
                placeholder="Mobil nömrəni daxil edin"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fin">FİN</label>
              <input type="text" id="fin" placeholder="FİN daxil edin" />
            </div>

            <div className={`form-group`}>
              <label htmlFor="email">
                Mail ünvan
              </label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps('email')}
                placeholder="Mail ünvanını daxil edin"
              />
            </div>

            <div className="form-group">
              <label htmlFor="familyStatus">Ailə vəziyyəti</label>
              <select
                id="familyStatus"
                {...formik.getFieldProps('familyStatus')}
              >
                <option value="">Seçin</option>
                <option value="Bəli">Bəli</option>
                <option value="Xeyir">Xeyir</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="valideyn">Valideyn</label>
              <input type="text" id="valideyn" placeholder="-" />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Cinsi</label>
              <select id="gender" {...formik.getFieldProps('gender')}>
                <option value="">Seçin</option>
                <option value="Kişi">Kişi</option>
                <option value="Qadın">Qadın</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nationality">Vətandaşlıq</label>
              <select id="nationality" {...formik.getFieldProps('nationality')}>
                <option value="AZE">AZE</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit">Yarat</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCustomerModal;
