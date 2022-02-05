import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductFeature from "./feature/Products";
import CardFeature from "./feature/Products/pages/CartPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products/*" element={<ProductFeature />} />
        <Route path="/cart" element={<CardFeature />} />
      </Routes>
    </div>
  );
}

export default App;
