
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

import Changepass from "./pages/Login/Changepass";
function App() {
  return (
    <div >
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path={"/products"} element={<Products/>} />
        <Route path={"/products/:id"} element={<ProductDetails />} />
        <Route path={"/address"} element={<Address />} />
        <Route path={"/payment"} />
        <Route path="/otp"  element={<Otp/>}/>
        <Route path="/verifymail" element={<Verifymail/>}/> 
        <Route path="/changepass" element={<Changepass/>}/> 
        <Route path={"*"} />
        <Route />
      </Routes>
  </div>
  )
}
export default App;
