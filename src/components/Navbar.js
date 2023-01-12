import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
        <div className="nav_box">
            <span className="my_shop">
                My Shopping
            </span>
            <div className="cart">
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
            </div>
        </div>
    </nav>
    );
  }
  
  export default Navbar;

