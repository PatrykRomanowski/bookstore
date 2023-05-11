import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import ShopPromoComponent from "./Components/shopPromoComponent";
import ShopComponent from "./Components/shopComponent";
import Header from "./Components/header";
import ShoppingCartComponent from "./Components/shoppingCartComponent";
import LoginComponent from "./Components/login";
import RegisterComponent from "./Components/registerComponent";
import UserNameBarComponent from "./Components/userNameBarComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="headerStyles" />
        <UserNameBarComponent />

        <Routes>
          <Route exact path="/bookstore" element={<ShopComponent />} />
          <Route path="/shop" element={<ShopComponent />} />
          <Route path="/shopPromo" element={<ShopPromoComponent />} />
          <Route path="/shoppingCart" element={<ShoppingCartComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
