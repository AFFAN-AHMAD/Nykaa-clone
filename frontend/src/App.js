
import Login from "./pages/Login/Login";
import Verifymail from "./pages/Login/Verifymail";
import Otp from "./pages/otp/Otp";
import Signup from "./pages/Signup/Signup";
import Address from "../src/pages/addressPage/Address";
import Products from "../src/pages/products/Products";
import ProductDetails from "../src/pages/ProductDetails/ProductDetails"
import Navbar from "../src/components/Navbar/Navbar"
import {Routes, Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import Payment from "./pages/PaymentPage/Payment"

function App() {
  return (
    <div style={{background:"whitesmoke"}} >
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/signup"} />
        <Route path={"/login"} />
        <Route path={"/products"} element={<Products/>} />
        <Route path={"/products/:id"} element={<ProductDetails />} />
        <Route path={"/address"} element={<Address />} />
        <Route path={"/payment"} element={<Payment/>} />
        <Route path={"*"} />
        <Route />
      </Routes>
  </div>
  )
}
export default App;
