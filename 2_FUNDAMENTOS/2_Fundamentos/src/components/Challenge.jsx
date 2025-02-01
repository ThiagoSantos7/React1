const Challenge = () => {
  const n1 = 10;
  const n2 = 20;

  const somaNum = () => {
    const result = n1 + n2;

    console.log("O resultado das somas é de: ", result);
  };

  return (
    <div>
      <p>Primeiro numero {n1}</p>
      <p>Segundo numero {n2}</p>
      <button onClick={somaNum}>Soma dos numeros</button>
    </div>
  );
};

export default Challenge;
