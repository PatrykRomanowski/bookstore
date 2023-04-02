import "./App.css";

import TestComponent from "./Components/test";
import Test2Component from "./Components/test2";
import TestComponent3 from "./Components/test3";
import Header from "./Components/header";

function App() {
  return (
    <div className="App">
      <Header className="headerStyles" />
      <TestComponent />
      <Test2Component />
      <TestComponent3 />
    </div>
  );
}

export default App;
