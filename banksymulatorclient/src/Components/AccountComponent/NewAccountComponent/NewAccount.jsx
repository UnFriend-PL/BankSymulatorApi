import React, { useContext, useState } from "react";
import "./NewAccount.scss";
import apiService from "../../../Services/ApiService";
import { NotificationContext } from "../../../Providers/NotificationProvider/NotificationProvider";
function NewAccount({ refresh, onClose }) {
  const { showNotification } = useContext(NotificationContext);
  const [formData, setFormData] = useState({
    currency: "PLN",
    name: "Additional Account",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await apiService(
      "post",
      "/api/Accounts/Create",
      formData,
      true
    );
    if (result.success === true) {
      showNotification([{ message: "Account created", type: "info" }]);
      refresh((prev) => !prev);
      onClose();
    } else {
      showNotification(result);
      onClose();
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Currency:
          <input
            type="text"
            name="currency"
            placeholder="Currency PLN, USD, EUR, etc."
            value={formData.currency}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Account</button>
        <button onClick={() => onClose()}>Cancel</button>
      </form>
    </div>
  );
}

export default NewAccount;
