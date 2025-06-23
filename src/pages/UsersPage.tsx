import { useState } from "react";

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

type User = {
  id: string;
  name: string;
  role: string;
  gender: string;
  age: number;
};

const UsersPage = () => {
  const [users, setUsers] = useState<User[] | []>(initUsersList);

  const UserRow = ({ user }: { user: User }) => {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>{user.gender}</td>
        <td>{user.age}</td>
        <th>
          <button onClick={() => {}}>Remove</button>
        </th>
      </tr>
    );
  };

  return (
    <section className="users-page">
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
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <button>Add New User</button>
    </section>
  );
};

export default UsersPage;
