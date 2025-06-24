import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import AddUserForm from "../components/AddUserForm";

const initUsersList = [
  {
    id: "a1",
    name: "Jonas",
    role: "Manager",
    gender: "male",
    age: 40,
  },
  {
    id: "a2",
    name: "Monika",
    role: "Assistant",
    gender: "female",
    age: 29,
  },
  {
    id: "a3",
    name: "Petras",
    role: "Sales Assistant",
    gender: "male",
    age: 31,
  },
];

const sortOptions = [
  { value: "", label: "No Sorting" },
  { value: "name-asc", label: "Name A–Z" },
  { value: "name-desc", label: "Name Z–A" },
  { value: "role-asc", label: "Role A–Z" },
  { value: "role-desc", label: "Role Z–A" },
  { value: "age-asc", label: "Age: Low to High" },
  { value: "age-desc", label: "Age: High to Low" },
];

export type User = {
  id: string;
  name: string;
  role: string;
  gender: string;
  age: number | undefined;
};

const UsersPage = () => {
  const [users, setUsers] = useState<User[] | []>(initUsersList);
  const [isModalOpen, setModalOpen] = useState(false);
  const [sortValue, setSortValue] = useState<string>("");
  const [sortedList, setSortedList] = useState<User[] | []>([]);

  const UserRow = ({ user }: { user: User }) => {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>{user.gender}</td>
        <td>{user.age}</td>
        <th>
          <button onClick={() => removeUser(user.id)}>Remove</button>
        </th>
      </tr>
    );
  };
  const closeModal = () => setModalOpen(false);

  const removeUser = (id: string) => {
    const newList = users.filter((user) => user.id !== id);
    setUsers(newList);
  };

  const addNewUser = (newUser: User) => {
    setUsers((prev) => [...prev, newUser]);
  };

  useEffect(() => {
    if (sortValue) {
      const sorted = [...users];

      const getSortedUsers = () => {
        switch (sortValue) {
          case "name-asc":
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
          case "name-desc":
            return sorted.sort((a, b) => b.name.localeCompare(a.name));
          case "role-asc":
            return sorted.sort((a, b) => a.role.localeCompare(b.role));
          case "role-desc":
            return sorted.sort((a, b) => b.role.localeCompare(a.role));
          case "age-asc":
            return sorted.sort((a, b) => a.age! - b.age!);
          case "age-desc":
            return sorted.sort((a, b) => b.age! - a.age!);
          default:
            return users;
        }
      };

      const sortedResult = getSortedUsers();
      setSortedList(sortedResult);
    } else {
      setSortedList(users);
    }
  }, [sortValue, users]);

  return (
    <section className="page-container">
      <select
        onChange={(e) => setSortValue(e.target.value)}
        value={sortValue}
        className="sort-wrapper"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td>Users list is empty</td>
            </tr>
          )}
          {sortedList.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <button onClick={() => setModalOpen(true)}>Add New User</button>
      {isModalOpen && (
        <Modal>
          <AddUserForm closeModal={closeModal} addNewUser={addNewUser} />
        </Modal>
      )}
    </section>
  );
};

export default UsersPage;
