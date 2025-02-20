import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <>
      {/* CSS Golbal */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragrafo é do app.jsx</p>
      {/* Inline css */}
      <p
        style={{
          color: "blueviolet",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        este elemento foi estilizado em forma inline
      </p>
    </>
  );
}

export default App;
