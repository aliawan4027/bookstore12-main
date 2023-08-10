import "./product5.css";
import { Link } from 'react-router-dom'

const Product5 = () => {
  return (
<div class="small-container">

      <h1>PRODUCT DETAILS</h1>
      <div class="row">
        <div class="col-2">
            <img src="product5.jpg"></img>
            </div>
            <div class="col-2">
                <p>Home/books</p>
                <h1>THE SEVEN SPIRTUAL LAW OF SUCCESS</h1>
                <h4>RS.900.00</h4>
                <select>
                <option>SELECT QUALITY</option>
                    <option>Hardcover pages</option>
                    <option>softcover pages</option>
                    <option>paper back books</option></select> 
                    <button class='class=btn'>
  <Link to="/Addtocart">Click ok for next step</Link></button>                        <h3>PRODUCT DETAILS</h3>
                  <p>      The Seven Spiritual Laws of Success – A Practical Guide to the Fulfillment of Your Dreams is a 1994 self-help, pocket-sized book by Deepak Chopra, published originally by New World Library, freely inspired in Hinduist and spiritualistic concepts, which preaches the idea that personal success is not the outcome of hard work, precise plans or a driving ambition, but rather of understanding our basic nature as HUMAN </p>
            </div>
            </div>
      </div>

  );
};

export default Product5;
