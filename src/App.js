import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Footer from "./Footer";
import Addtocart from "./Addtocart";
import Amazon from "./Amazon";
import Cart from "./Cart";
import Cards from "./Cards";
import Product5 from "./Product5";
import Product6 from "./Product6";


import Navbar from "./Navbar"
import Login from './Login';
import Home from "./Home";
import Signup from "./signup";
import './App.css';




export default function App() {
  return (

    <div>

          <header>      
      <Navbar />
</header>


<div>

      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Product1" element={<Product1/>}/>
          <Route path="/Product2" element={<Product2/>}/>
          <Route path="/Product3" element={<Product3/>}/>
          <Route path="/Product4" element={<Product4/>}/>
          <Route path="/Product5" element={<Product5/>}/>
          <Route path="/Product6" element={<Product6/>}/>

          <Route path="/Addtocart" element={<Addtocart/>}/>
          <Route path="/Amazon" element={<Amazon/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Cards" element={<Cards/>}/>




        </Routes>
      </BrowserRouter>
    </div>
    <Footer/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
