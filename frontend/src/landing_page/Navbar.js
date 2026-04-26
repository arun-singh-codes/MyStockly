import React from 'react';
import {Link} from "react-router-dom"
function Navbar() {
    return (
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <a href="/" className='nav-logo-link button'><span><i class="fa-solid fa-wallet"></i>&nbsp;</span>MyStockly</a>
          </div>

          <div className="nav-links">
            <ul>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>

          <div className="nav-hamburger">
              <button><i className="fa-solid fa-bars"></i></button>
          </div>

        </div>
       </nav>
      );
}

export default Navbar;