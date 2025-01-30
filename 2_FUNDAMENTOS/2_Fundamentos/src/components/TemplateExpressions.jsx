const TemplateExprecions = () => {
  const name = "Thiago";

  const data = {
    age: 19,
    job: "Programer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
      <p>{console.log("JSX React")}</p>
    </div>
  );
};

export default TemplateExprecions;
