import React, { useState } from "react";
import { toast } from "react-toastify";

type FormData = {
  id: string;
  name: string;
  role: string;
  gender: string;
  age: number | undefined;
};

type AddUserFormProps = {
  closeModal: () => void;
  addNewUser: (newUser: FormData) => void;
};

const initFormData = {
  id: "",
  name: "",
  role: "",
  gender: "",
  age: undefined,
};

const AddUserForm = ({ closeModal, addNewUser }: AddUserFormProps) => {
  const [formData, setFormData] = useState<FormData>(initFormData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "age") {
      if (value === "") {
        setFormData((prev) => ({ ...prev, age: undefined }));
        return;
      }

      const num = Number(value);

      if (isNaN(num) || !Number.isInteger(num)) {
        return;
      }
      setFormData((prev) => ({ ...prev, age: num }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formData.id = generateId();
    if (isFormValid()) {
      addNewUser(formData);
      closeModal();
      toast.success("User Added Successfully!");
    }
  };

  const isFormValid = () => {
    const symbolLimit = 30;
    const errors: string[] = [];

    if (formData.name === "") errors.push("Fill Name input field");
    if (formData.name.length > symbolLimit)
      errors.push(`Name must be shorter than ${symbolLimit} characters`);
    if (formData.role === "") errors.push("Fill Role input field");
    if (formData.role.length > symbolLimit)
      errors.push(`Role must be shorter than ${symbolLimit} characters`);
    if (formData.gender === "") errors.push("Select Gender");
    if (formData.age === undefined) errors.push("Fill Age input field");

    if (errors.length > 0) {
      errors.forEach((err) => toast.warn(err));
      return false;
    }

    return true;
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
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            min={1}
            max={100}
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
