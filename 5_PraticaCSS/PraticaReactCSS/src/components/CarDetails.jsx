import "./CarDetails.css";

const CarDetails = ({ brand, km, cor }) => {
  return (
    <div>
      <h3>{brand}</h3>
      <p>{km === 0 ? "Zero!" : km}</p>
      <p>{cor}</p>
    </div>
  );
};

export default CarDetails;
