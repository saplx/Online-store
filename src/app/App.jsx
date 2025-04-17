import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

import Header from "../components/Header";

import Home from "../pages/Home";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
