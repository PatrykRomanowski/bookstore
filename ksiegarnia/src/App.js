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
import ShoppingCartComponent from "./Components/shoppingCartComponent";
import LoginComponent from "./Components/login";
import TestCompJurek from "./Components/jurektest";
import RegisterComponent from "./Components/registerComponent";
import UserNameBarComponent from "./Components/userNameBarComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="headerStyles" />
        <UserNameBarComponent />

        <Routes>
          <Route exact path="/" element={<TestComponent />} />
          <Route path="/test2" element={<TestComponent3 />} />
          <Route path="/test3" element={<Test2Component />} />
          <Route path="/shoppingCart" element={<ShoppingCartComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
