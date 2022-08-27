
import Address from "../src/pages/addressPage/Address";

import Products from "../src/pages/products/Products";
import ProductDetails from "../src/pages/ProductDetails/ProductDetails"
import Navbar  from "../src/components/Navbar/Navbar"
function App() {
  return (
    <div style={{ background: "whitesmoke" }}>
      <Navbar/>
      {/* <Products/> */}
      <ProductDetails/>
      <Address />

  </div>
  )
}
export default App;
