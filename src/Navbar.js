import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
		

			<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
            <a class="navbar-brand" href="#">
              ISSMART
            </a>
           
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="./Home">Home</a></li>
      <li><a href="./login">Login account</a></li>
      <li><a href="./signup">Create account</a></li>
      <li><a href="/">About US</a></li>
      <li><a href="/">contact</a></li>
      <li><a href="/Addtocart">Products</a></li>

      
     
        
      

      
    </ul>
    </div>
  
</nav>
		</header>
	);
}

export default Navbar;