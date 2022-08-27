import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Otp from "./pages/otp/Otp";
import Signup from "./pages/Signup/Signup";


function App() {
  return (
  <div>

<Routes>
<Route path="/" element={<Navbar/>}/>

  <Route path="/signup" element={<Signup/>}/>
  <Route path="/otp"  element={<Otp/>}/>
</Routes>
  </div>
  )
}
export default App;
