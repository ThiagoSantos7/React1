//styles
import "./App.css";

import City from "./assets/city.jpg";
import MenageData from "./components/MenageData";

function App() {
  return (
    <div className="App">
      <h1>Avançando em react</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <MenageData />
    </div>
  );
}

export default App;
