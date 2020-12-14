import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css';

const Header = () => {

    return(
        <div className="header">
            <div className="header-title">
                 <Link to="/">KEA BOOK</Link>
            </div>
            <div className="cart">
               <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}

export default Header