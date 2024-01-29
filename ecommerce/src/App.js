import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header_Com/Header";
import Footer from "./components/Footer_Com/Footer";
import ProductDynamic from "./components/Product_Com/ProductDynamic";
import ProductList from "./components/Product_Com/ProductList";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact Us";


// Components
function App() {
  return (
  <div className="App">
 <header><Header/></header>
 
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Pages' element={<Pages/>}></Route>
  <Route path='/Products' element={<Products/>}></Route>
  <Route path='/Shop' element={<Shop/>}></Route>
  <Route path='/Blog' element={<Blog/>}></Route>
  <Route path='/Contact us' element={<Contact us/>}></Route>
  <Route path="/" exact component={<ProductList/>}/>
  <Route path="/Products/:productId" element={<ProductDynamic/>}/>
</Routes>

<footer><Footer/></footer>
</div>

  );
 
}

export default App;

