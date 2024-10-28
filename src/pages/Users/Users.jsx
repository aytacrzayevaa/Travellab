import React, { useState } from "react";
import "./Users.scss";
import EditBtn from "../../assets/users/Editbtn.svg";
import DeleteBtn from "../../assets/users/Deletebtn.svg";
import Newuser from "../../assets/users/NewCustomer.svg";
import NewUserModal from "../../components/NewUserModal";
import EditUserModal from "../../components/EditUserModal";
import { useNavbar } from "../../context/NavbarContext";

const Users = () => {
  const { isNavbarCollapsed } = useNavbar();

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alanya",
      username: "Qumral Mahmudova",
      phone: "+994514753665",
      status: "Təsdiq gözlənilir",
      date: "24.11.2024",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const totalPages = 95;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = (values) => {
    handleModalClose();
  };

  const handleEditModalOpen = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleEditSave = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div
      className={`users-container ${
        isNavbarCollapsed ? "users-container--navbar-closed" : ""
      }`}
    >
      <div className="users-header">
        <div className="breadcrumb">
          <span>Əsas səhifə / </span>
          <span className="current-page">İstifadəçilər</span>
        </div>
        <button className="create-user-btn" onClick={handleModalOpen}>
          <img src={Newuser} alt="Yeni İstifadəçi" />
        </button>
      </div>

      <table className="users-table">
        <thead>
          <tr>
            <th>Ad Soyad</th>
            <th>İstifadəçi adı</th>
            <th>Telefon</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td className="actions">
                <button>
                  <img src={DeleteBtn} alt="Sil" />
                </button>
                <button onClick={() => handleEditModalOpen(user)}>
                  <img src={EditBtn} alt="Redaktə et" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          className={`page-btn ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        >
          &laquo;
        </button>
        {Array.from({ length: Math.min(5, totalPages) }, (_, index) => (
          <button
            key={index + 1}
            className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <span>...</span>
        <button
          className="page-btn"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
        <button
          className={`page-btn ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
        >
          &raquo;
        </button>
      </div>

      <NewUserModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleSubmit}
      />

      <EditUserModal
        isOpen={isEditModalOpen}
        onClose={handleEditModalClose}
        user={selectedUser}
        onSave={handleEditSave}
      />
    </div>
  );
};

export default Users;
