import "./product3.css";
import { Link } from 'react-router-dom'

const Product3 = () => {
  return (
<div class="small-container">

      <h1>PRODUCT DETAILS</h1>
      <div class="row">
        <div class="col-2">
            <img src="product3.jpg"></img>
            </div>
            <div class="col-2">
                <p>Home/books</p>
                <h1>ASTROLOGY SECRETS</h1>
                <h4>RS.2400.00</h4>
                <select>
                    <option>SELECT QUALITY</option>
                    <option>Hardcover pages</option>
                    <option>softcover pages</option>
                    <option>paper back books</option></select>  
                    <button class='class=btn'>
  <Link to="/Addtocart">Click ok for next step</Link></button>                        <h3>PRODUCT DETAILS</h3>
                       <p> Astrology is a range of divinatory practices, recognized as pseudoscientific since the 18th century, that claim to discern information about human affairs and terrestrial events by studying the apparent positions of celestial objects.</p>

            </div>
            </div>
      </div>

  );
};

export default Product3;
