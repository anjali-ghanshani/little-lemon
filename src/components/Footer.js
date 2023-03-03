import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer>
            <img className='footer__logo' src='http://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png' alt='lttle-lemon-logo' />
            <div className='footer__section'>

                <section>
                    <h5>Doormat Nav</h5>
                    <li>Home</li >
                    <li> About</li >
                    <li> Menu</li >
                    <li> Reservations</li >
                    <li> Order Online</li >
                    <li> Login</li >
                </section >
                <section>
                    <h5>Contact</h5>
                    <li>Address</li >
                    <li> phone</li >
                    <li> email</li >
                </section >
                <section>
                    <h5>Connect on social media</h5>
                    <li>LinkedIn</li >
                    <li> Instagram</li >
                    <li> Facebook</li >
                    <li> Twitter</li >
                </section >

            </div>
        </footer>
    )
}

export default Footer