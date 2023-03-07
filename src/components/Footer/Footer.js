import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src='http://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png' alt='lttle-lemon-logo' />
            <section className='footer__section'>
                <div className='doormat_nav'>
                    <h5>Doormat Nav</h5>
                    <li>Home</li >
                    <li> About</li >
                    <li> Menu</li >
                    <li> Reservations</li >
                    <li> Order Online</li >
                    <li> Login</li >
                </div>
                <div className='doormat_nav'>
                    <h5>Contact</h5>
                    <li>Address</li >
                    <li> phone</li >
                    <li> email</li >
                </div>
                <div className='doormat_nav'>
                    <h5>Connect on social media</h5>
                    <li>LinkedIn</li >
                    <li> Instagram</li >
                    <li> Facebook</li >
                    <li> Twitter</li >
                </div>
            </section >
        </footer>
    )
}

export default Footer