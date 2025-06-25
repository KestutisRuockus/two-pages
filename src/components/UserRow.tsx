import type { User } from "../pages/UsersPage";

type UserRow = {
  user: User;
  removeUser: (id: string) => void;
};

const UserRow = ({ user, removeUser }: UserRow) => {
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

export default UserRow;
