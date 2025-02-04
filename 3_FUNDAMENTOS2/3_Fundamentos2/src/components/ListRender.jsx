import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Thiago", "Roberto", "Barbara", "Rodrigo"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Thiago", age: 19 },
    { id: 2, name: "Romário", age: 35 },
    { id: 3, name: "Barbara", age: 21 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>Meu nome é: {item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Meu nome é {user.name} e tenho {user.age} anos.
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete user</button>
    </div>
  );
};

export default ListRender;
