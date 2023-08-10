import React from 'react';
import { Link } from 'react-router-dom'

import "./product1.css";
const Product1 = () => {
  return (
    <div class="small-container">

      <h1>PRODUCT DETAILS</h1>
      <div class="row">
        <div class="col-2">
            <img src="product1.png"></img>
            </div>
            <div class="col-2">
                <p>Home/books</p>
                <h1>FORTY RULES OF LOVE BY ELIF SHAFAK</h1>
                <h4>RS.500.00</h4>
                <select>
                <option>SELECT Quality</option>
                    <option>Hardcover pages</option>
                    <option>softcover pages</option>
                    <option>paper back books</option></select> 
                        <button class='class=btn'>
  <Link to="/Addtocart">Click ok for next step</Link></button>
                        <h3>PRODUCT DETAILS</h3>
                        <p>The Forty Rules of Love is a 2009 novel by Elif Shafak. The book tells the story of Ella Rubinstein, a woman in her late thirties who has settled into the complacency of her life. She exists without drive or passion. The narrative follows her unlikely escape from what at first appears to be inevitable unhappiness.
</p>

            </div>
            </div>
      </div>

  );
};

export default Product1;
