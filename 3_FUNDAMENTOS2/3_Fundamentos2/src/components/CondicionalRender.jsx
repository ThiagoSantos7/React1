import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Thiago");

  return (
    <>
      <div>
        <h1>Isso será exibido?</h1>
        {x && <p>x é true!</p>}

        {/* Invertendo condição com !(diferente) então no caso ficará como true mesmo sendo falso pois foi invertido! */}

        {!x && <p>x é false!</p>}

        <h1>If ternário</h1>

        {name === "Thiago" ? (
          <div>
            <p>O nome é Thiago</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado!</p>
          </div>
        )}
      </div>

      <button onClick={() => setName("Thiago")}>Clique aqui!</button>
    </>
  );
};

export default CondicionalRender;
