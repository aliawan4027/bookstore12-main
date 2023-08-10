import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';
import { useLocation } from 'react-router-dom';


export default function Home() {
  const location = useLocation();
  const showSuccessMessage = location.state && location.state.showSuccessMessage;
  
  return (
    

      <div className='Homes'>
        <div>
        
      {showSuccessMessage && (
        <div className='success-message'>
          Login successful! Welcome to the home page.
        </div>
      )}
          <div className="App">

            <h1>BOOK STORE</h1>
            <h2>EXPLORE WORLDCLASS SPIRITUAL BOOKS</h2>
          </div>

          <div class="gallary">
            {/* Book 1 */}
            <div class="content">
              <img src='product1.png' alt='Book 1'></img>
              <h3>FORTY RULES OF LOVES</h3>
              <p>The Forty Rules of Love is a 2009 novel by Elif Shafak. The book tells the story of Ella Rubinstein, a woman in her late thirties who has settled into the complacency of her life. She exists without drive or passion.</p>
              <h6>RS.500.00</h6>
              <ul>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
              <button className='buy-1'>
                <Link to="/product1">BUY NOW</Link>
              </button>
            </div>

            {/* Book 2 */}
            <div class="content">
              <img src='product22.png' alt='Book 2'></img>
              <h3>REVIVE YOUR HEART</h3>
              <p>Revive Your Heart is a call for spiritual renewal and an invitation to have a conversation with one of the world s most recognizable voices on Islam, Nouman Ali Khan.</p>
              <h6>RS.800.00</h6>
              <ul>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
              <button className='buy-2'>
                <Link to="/Product2">BUY NOW</Link>
              </button>
            </div>

            {/* Book 3 */}
            <div class="content">
              <img src='product3.jpg' alt='Book 3'></img>
              <h3>ASTROLOGY SECRETS</h3>
              <p>Whether you're new to the field, or have long been looking to the sky for answers, Astrology Secrets is the perfect way to understand how your stars align.</p>
              <h6>RS.2400.00</h6>
              <ul>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
              <button className='buy-3'>
                <Link to="/Product3">BUY NOW</Link>
              </button>
            </div>

            {/* Book 4 */}
            <div class="content">
              <img src='product4.jpg' alt='Book 4'></img>
              <h3>THE LIVING PRESENCE</h3>
              <p>Drawing on the work of the beloved Sufi poet, Rumi, as well as traditional material and personal experience, this book integrates the ancient wisdom of Sufism with the needs of contemporary life.</p>
              <h6>RS.600.00</h6>
              <ul>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
              <button className='buy-4'>
                <Link to="/Product5">BUY NOW</Link>
              </button>
            </div>
            <div class="content">
              <img src='product5.jpg' alt='Book 5'></img>
              <h3>THE SEVEN SPIRTUAL LAW OF SUCCESS</h3>
              <p>The work is divided into seven section, one chapter for each of the seven spiritual laws of success: The Law of Pure Potentiality, The Law of Giving and Receiving, The Law of Karma, The Law of Least Effort, The Law of Intention and Desire, The Law of Detachment, ....</p>
              <h6>RS.900.00</h6>
              <ul>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
              <button className='buy-5'>
                <Link to="/Product5">BUY NOW</Link>
              </button>
            </div> <div class="content">
              <img src='product6.jpg' alt='Book 6'></img>
              <h3>IF THRUTH BE TOLD</h3>
             <p> The book unravels the life story of Om Swami and his journey to becoming a monk. As an 18-year-old young boy, Om Swami headed to Australia to realize his worldly dreams and aspirations.If Truth be Told is an extraordinary memoir of the making of a spiritual life in today's demanding,.....</p>              <h6>RS.1600.00</h6>
              <ul>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star checked"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
                <li><i class="fa fa-star"></i></li>
              </ul>
              <button className='buy-6'>
                <Link to="/Product6">BUY NOW</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
}
