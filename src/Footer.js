import React from 'react'
import "./Footer.css"
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightText = `© ${currentYear} ISMmart group of industries`;

  return (
   
      <div class='footer-container'>
        <div class='footer'>
          <img src="logo.jpg" ></img>
          <div class="footer-heading footer-1">
            <h2>ABOUT US</h2>
            <a href=" /">BLOGS</a>
            <a href=" /">Demo</a>
            <a href=" /">customers</a>
            <a href=" /">investors</a>
            <a href=" /">terms of services</a>

          </div>
          <div class="footer-heading footer-2">
            <h2>Contact US</h2>
            <a href=" /">jobs</a>
            <a href=" /">support</a>
            <a href=" /">contact</a>
            <a href=" /">sponserships</a>

        </div>
        <div class="footer-heading footer-3">
            <h2>JOIN US</h2>
            
            <a href=" /">Facebook</a>
            <a href=" /">Instagram</a>
            <a href=" /">twitter</a>
            <a href=" /">youtube</a>
            <p className="copyright">
          {copyrightText}
        </p>
</div>
<div class="footer-email-form">
  <h2>join our newsletter</h2>
<input type='email' placeholder='ENTER YOUR EMAIL ADDRESS' id="footer-email"></input>
  <input type='submit' value ="sign up" id="footer-email-btn"></input>
</div>
      </div>

    </div>
  )
}
