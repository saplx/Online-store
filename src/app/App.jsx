import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

import Homepage from "../pages/Homepage";
import ProductPage from "../pages/ProductPage";
import NotFound from "../pages/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
