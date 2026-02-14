import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetails from "@/pages/ProductDetails";
import HomePage from "@/pages/HomePage";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/ui/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products-page" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
