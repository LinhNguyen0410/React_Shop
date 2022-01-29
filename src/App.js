import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductFeature from "./feature/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* vừa load trang nó đã navigate đến /products */}
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products/*" element={<ProductFeature />} />
      </Routes>
    </div>
  );
}

export default App;
