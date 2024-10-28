import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Expenses.scss";
import NewExp from "../../assets/expenses/NewExp.svg";
import Deletebtn from "../../assets/expenses/delete.svg";
import Editbtn from "../../assets/expenses/edit.svg";
import Upbtn from "../../assets/expenses/up.svg";
import Downbtn from "../../assets/expenses/down.svg";
import AddExpense from "../../components/AddExpense";
import Calendar from "../../assets/expenses/Calendar.svg";
import { useNavbar } from "../../context/NavbarContext";

const Expenses = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isNavbarCollapsed } = useNavbar();

  const expenses = [
    { id: 1, name: "Vergi", amount: "100 AZN", date: "24.11.2024 | 10:29:43" },
    { id: 2, name: "Reklam", amount: "150 AZN", date: "24.11.2024 | 10:29:43" },
    {
      id: 3,
      name: "Əmək haqqı",
      amount: "1000 AZN",
      date: "24.11.2024 | 10:29:43",
    },
    { id: 4, name: "Ofis", amount: "1500 AZN", date: "24.11.2024 | 10:29:43" },
  ];

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setIsDatePickerOpen(false);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setIsDatePickerOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={`expenses ${isNavbarCollapsed ? "expenses--closed" : ""}`}>
      <div className="expenses-header">
        <p>
          Əsas səhifə / <span> Xərclər</span>
        </p>
        <div className="actions">
          <div className="actions-calendar">
            <button
              className="date-picker-btn"
              onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            >
              <img src={Calendar} alt="" />
              {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
            </button>
          </div>
          <button className="add-expense-btn" onClick={openModal}>
            <img src={NewExp} alt="Xərc əlavə et" />
          </button>
        </div>
      </div>

      {isDatePickerOpen && (
        <div className="date-picker-modal">
          <div className="date-picker-card">
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd.MM.yyyy"
              inline
              dayClassName={(date) =>
                date >= startDate && date <= endDate
                  ? "selected-date-range"
                  : undefined
              }
            />
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="dd.MM.yyyy"
              inline
              dayClassName={(date) =>
                date >= startDate && date <= endDate
                  ? "selected-date-range"
                  : undefined
              }
            />
          </div>
        </div>
      )}

      <AddExpense
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={(values) => console.log("Yeni xərc:", values)}
      />

      <table>
        <thead>
          <tr>
            <th className="column-id">№</th>
            <th className="column-name">Xərc</th>
            <th className="column-amount">Məbləğ</th>
            <th className="column-date">Tarix</th>
            <th className="column-actions"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td className="actions">
                <button className="delete-btn">
                  <img src={Deletebtn} alt="Sil" />
                </button>
                <button className="edit-btn">
                  <img src={Editbtn} alt="Dəyişdir" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <div className="income">
          <img src={Upbtn} alt="Gəlir" />
          <div className="income-head">
            <p>Tarix üzrə şirkətin ümumi gəliri</p>
            <h3>28 000 AZN</h3>
          </div>
        </div>
        <div className="expense">
          <img src={Downbtn} alt="Xərc" />
          <div className="expense-head">
            <p>Tarix üzrə şirkətin ümumi xərci</p>
            <h3>5 000 AZN</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
