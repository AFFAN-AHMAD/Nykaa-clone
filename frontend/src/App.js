
import Address from "../src/pages/addressPage/Address";

import Products from "../src/pages/products/Products";
import ProductDetails from "../src/pages/ProductDetails/ProductDetails"
import Navbar from "../src/components/Navbar/Navbar"
import {Routes, Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div style={{ background: "whitesmoke" }}>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/signup"} />
        <Route path={"/login"} />
        <Route path={"/products"} element={<Products/>} />
        <Route path={"/products/:id"} element={<ProductDetails />} />
        <Route path={"/address"} element={<Address />} />
        <Route path={"/payment"} />
        <Route path={"*"} />
        <Route />
      </Routes>
    <Footer/>
  </div>
  )
}
export default App;
