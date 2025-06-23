import React, { useState } from "react";

type FormData = {
  id: string;
  name: string;
  role: string;
  gender: string;
  age: number | undefined;
};

const initFormData = {
  id: "",
  name: "",
  role: "",
  gender: "",
  age: undefined,
};

const AddUserForm = ({
  closeModal,
  addNewUser,
}: {
  closeModal: () => void;
  addNewUser: (newUser: FormData) => void;
}) => {
  const [formData, setFormData] = useState<FormData>(initFormData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formData.id = generateId();
    if (isFormValid()) {
      addNewUser(formData);
      closeModal();
      alert("User Added Successfully!");
    } else {
      alert("Please fill in all fields!");
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.role.trim() !== "" &&
      formData.gender.trim() !== "" &&
      formData.age !== undefined
    );
  };

  const generateId = () => Date.now().toString();

  return (
    <div className="form-container">
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Fele</option>
          </select>
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            min={1}
            value={formData.age ?? ""}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <button type="button" className="close-btn" onClick={closeModal}>
        X
      </button>
    </div>
  );
};

export default AddUserForm;
