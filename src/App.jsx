import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";

function App() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
  }
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
