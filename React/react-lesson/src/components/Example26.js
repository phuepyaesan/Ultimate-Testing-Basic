"use client";

import styles from "./UserDataCreate.module.css";
import { useState } from "react";

export default function UserDataCreate() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    gender: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.address ||
      !formData.phone ||
      !formData.gender
    )
      return;

    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, formData]);
    }

    setFormData({ name: "", address: "", phone: "", gender: "" });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const handleCancel = () => {
    setFormData({ name: "", address: "", phone: "", gender: "" });
    setEditIndex(null);
  };

  return (
    <div className={styles.container}>
      <h2>User Information Form</h2>

      <div className={styles.formGroup}>
        <input
          name="name"
          className={styles.input}
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="address"
          className={styles.input}
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          name="phone"
          className={styles.input}
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <div className={styles.genderGroup}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            {editIndex !== null ? "Update" : "Create"}
          </button>
          {editIndex !== null && (
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </div>

      <ul className={styles.userList}>
        {users.map((user, index) => (
          <li key={index} className={styles.userItem}>
            <div>
              <strong>{user.name}</strong> - {user.address}, {user.phone} (
              {user.gender})
            </div>
            <div>
              <button
                className={styles.editBtn}
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
