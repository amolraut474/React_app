import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header_Com/Header";
import Footer from "./components/Footer_Com/Footer";
import ProductDynamic from "./components/Product_Com/ProductDynamic";
import ProductList from "./components/Product_Com/ProductList";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <header><Header/></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Products/:productId" element={<ProductDynamic />} />
        </Routes>
        <footer><Footer/></footer>
      </div>
    </Router>
  );
}

export default App;
