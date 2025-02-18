const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? <p>Pode ser habilitado</p> : <p>Não pode ser habilitado</p>}
    </div>
  );
};

export default UserDetails;
