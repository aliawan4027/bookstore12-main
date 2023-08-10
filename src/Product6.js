import "./product6.css";
import { Link } from 'react-router-dom'

const Product6 = () => {
  return (
<div class="small-container">

      <h1>PRODUCT DETAILS</h1>
      <div class="row">
        <div class="col-2">
            <img src="product6.jpg"></img>
            </div>
            <div class="col-2">
                <p>Home/books</p>
                <h1>IF TRUTH BE TOLD</h1>
                <h4>$1600.00</h4>
                <select>
                <option>SELECT QUALITY</option>
                    <option>Hardcover pages</option>
                    <option>softcover pages</option>
                    <option>paper back books</option></select> 
                    <button class='class=btn'>
  <Link to="/Addtocart">Click ok for next step</Link></button>                        <h3>PRODUCT DETAILS</h3>
                 <p>   If Truth be Told is an extraordinary memoir of the making of a spiritual life in today's demanding, competitive, and baffling times. The book unravels the life story of Om Swami and his journey to becoming a monk. As an 18-year-old young boy, Om Swami headed to Australia to realize his worldly dreams and aspirations.
</p>
            </div>
            </div>
      </div>

  );
};

export default Product6;
