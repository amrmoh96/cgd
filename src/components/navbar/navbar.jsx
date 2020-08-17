import React from 'react';
import './navbar.css'


const Navbar = ({onSignOut}) => {
    return(
        <div className="navbar">
            <h2>Welcome</h2>
            <button className='navbar__signout' onClick={onSignOut}>Sign Out</button>
        </div>
    )
}

export default Navbar;