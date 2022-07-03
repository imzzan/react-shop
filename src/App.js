import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Product from "./Component/Product";
import AboutUs from "./Component/AboutUs";
import Reviews from "./Component/Reviews";
import LogIn from "./Component/LogIn";
import { useState } from "react";
import SignIn from './Component/SignIn';
import Acount from "./Component/Acount";
import EditProfile from "./Component/EditProfile";

function App() {

  const [state, setState] = useState(0);

  const BeliKeranjang = () => {
    setState(state + 1)
  }

  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product state={state} BeliKeranjang={BeliKeranjang}/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path='/acount' element={<Acount/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
