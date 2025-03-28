import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

import Home from "../pages/Home";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
