import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Carousel } from "./components/carousel/Carousel";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductsList from "./components/products/ProductsList";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/:id" element={<ProductsList />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
