import "./product2.css";
import { Link } from 'react-router-dom'

const Product2 = () => {
  return (
<div class="small-container">

      <h1>PRODUCT DETAILS</h1>
      <div class="row">
        <div class="col-2">
            <img src="product22.png"></img>
            </div>
            <div class="col-2">
                <p>Home/books</p>
                <h1>REVIVE YOUR HEART </h1>
                <h4>RS.800.00</h4>
                <select>
                <option>SELECT QUALITY</option>
                    <option>Hardcover pages</option>
                    <option>softcover pages</option>
                    <option>paper back books</option></select>  
                    <button class='class=btn'>
                    <Link to="/Addtocart">Click ok for next step</Link></button>
                        <h3>PRODUCT DETAILS</h3>
                       <p> Revive Your Heart is a call for spiritual renewal and an invitation to have a conversation with one of the world s most recognizable voices on Islam, Nouman Ali Khan. This collection of essays is disarmingly simple, yet it challenges us to change.</p>

            </div>
            </div>
      </div>

  );
};

export default Product2;
