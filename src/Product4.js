import "./product4.css";
import { Link } from 'react-router-dom'

const Product4 = () => {
  return (
<div class="small-container">

      <h1>PRODUCT DETAILS</h1>
      <div class="row">
        <div class="col-2">
            <img src="product4.jpg"></img>
            </div>
            <div class="col-2">
                <p>Home/books</p>
                <h1>THE LIVING PRESENCE</h1>
                <h4>RS.600.00</h4>
                <select>
                <option>SELECT QUALITY</option>
                    <option>Hardcover pages</option>
                    <option>softcover pages</option>
                    <option>paper back books</option></select> 
                    <button class='class=btn'>
  <Link to="/Addtocart">Click ok for next step</Link></button>                        <h3>PRODUCT DETAILS</h3>
                  <p>      The Living Presence, by Kabir Edmund Helminski,is a novel about spiritual psychology(Sufism)leading to presence in life.It integrates the wisdom of Sufism with the needs of everyday life. Living Presence offers wisdom that is both universal and practical.</p>

            </div>
            </div>
      </div>

  );
};

export default Product4;
