import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import TestComponent from "./Components/test";
import Test2Component from "./Components/test2";
import TestComponent3 from "./Components/test3";
import Header from "./Components/header";
import LoginComponent from "./Components/login";
import TestCompJurek from "./Components/jurektest";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="headerStyles" />
        <Routes>
          <Route exact path="/" element={<TestComponent />} />
          <Route path="/test2" element={<TestComponent3 />} />
          <Route path="/test3" element={<Test2Component />} />
          <Route path="/test3" element={<Test2Component />} />
          <Route path="/login" element={<TestCompJurek />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
