import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Changepass from "./pages/Login/Changepass";
import Login from "./pages/Login/Login";
import Verifymail from "./pages/Login/Verifymail";
import Otp from "./pages/otp/Otp";
import Signup from "./pages/Signup/Signup";


function App() {
  return (
  <div>

<Routes>
<Route path="/" element={<Navbar/>}/>

  <Route path="/signup" element={<Signup/>}/>
  <Route path="/otp"  element={<Otp/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/verifymail" element={<Verifymail/>}/> 
  <Route path="/changepass" element={<Changepass/>}/> 

</Routes>
  </div>
  )
}
export default App;
