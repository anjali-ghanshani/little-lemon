import React from 'react'
import './Nav.css'
function Nav() {
    return (
        <nav>
            <img id='nav_logo' src='http://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png' alt='lttle-lemon-logo' />

            <ul className='list'>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Nav