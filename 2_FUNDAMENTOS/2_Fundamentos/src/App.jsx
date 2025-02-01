// Components

import FirstComponents from "./components/FirstComponents";
import TemplateExprecions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";
//Styles

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Aula componentes</h1>
        <FirstComponents />
        <TemplateExprecions />
        <MyComponent />
        <Events />
        <Challenge />
      </div>
    </>
  );
}

export default App;
