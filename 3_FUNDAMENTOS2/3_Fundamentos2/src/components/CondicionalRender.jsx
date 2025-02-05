import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(false);

  return (
    <>
      <div>
        <h1>Isso será exibido?</h1>
        {x && <p>x é true!</p>}

        {/* Invertendo condição com !(diferente) então no caso ficará como true mesmo sendo falso pois foi invertido! */}

        {!x && <p>x é false!</p>}
      </div>
    </>
  );
};

export default CondicionalRender;
