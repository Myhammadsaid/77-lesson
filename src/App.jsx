import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
