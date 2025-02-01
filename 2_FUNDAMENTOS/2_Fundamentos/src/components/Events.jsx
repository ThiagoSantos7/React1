const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou o evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Retorne verdadeiro!</h1>;
    } else {
      return <h1>Retorne falso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Fui clicado!!!!")}>
          Clique novamente
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log("Não faça desta forma!!!!!!!");
            }
          }}
        >
          Clique so mais uma vez
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
