import "./App.css";

import TestComponent from "./Components/test";
import Test2Component from "./Components/test2";
import TestComponent3 from "./Components/test3";
<<<<<<< HEAD
import TestCompJurek from "./Components/jurektest";
=======
import Header from "./Components/header";
>>>>>>> 1898dda9b99ca82381542ae8d21a7344c039b88b

function App() {
  return (
    <div className="App">
      <Header className="headerStyles" />
      <TestComponent />
      <Test2Component />
      <TestComponent3 />
      <TestCompJurek />

    </div>
  );
}

export default App;
