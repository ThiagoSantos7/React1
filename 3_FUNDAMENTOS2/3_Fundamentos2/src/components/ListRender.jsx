import { use } from "react";
import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Thiago", "Roberto", "Barbara", "Rodrigo"]);

  const [users] = useState([
    { id: 1, name: "Thiago", age: 19 },
    { id: 1231443, name: "Romário", age: 35 },
    { id: 34785443, name: "Barbara", age: 21 },
    { id: 445566857, name: "Gustavo", age: 37 },
  ]);

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
            Olá, me chamo {user.name} e tenho {user.age} anos. <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
