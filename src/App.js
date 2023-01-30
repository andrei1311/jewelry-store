import "./App.css";
import { Carousel } from "./components/carousel/Carousel";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductsList from "./components/products/ProductsList";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Carousel /> */}
      <ProductsList />
      <Footer />
    </div>
  );
}

export default App;
