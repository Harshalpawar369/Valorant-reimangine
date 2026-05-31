import React from 'react'
import '../css/footer.css'
function Footer() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
      <footer className="footer">
  <div className="footer-container">
    <p>valorant@website . All rights reserved.</p>
    <div className="social-links">
      <a href="https://facebook.com" target="_blank" aria-label="Facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
