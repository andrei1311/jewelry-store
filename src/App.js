import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
        <Route path="/category/:id" element={<Category />} />
        <Route path="/products/:categoryId" element={<ProductsList />} />
        <Route path="products/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
