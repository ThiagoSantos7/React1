import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;
  const [name] = useState("Thiago");
  const redTitle = true;
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
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Thiago" ? { color: "green", backgroundColor: "#000" } : null
        }
      >
        Teste Nome
      </h2>
      {/* Classe dinamica */}
      <h1 className={redTitle ? "red-title" : "title"}>
        Este titulo contem classe dinamica
      </h1>
      {/* CSS modules */}
      <Title />
    </>
  );
}

export default App;
