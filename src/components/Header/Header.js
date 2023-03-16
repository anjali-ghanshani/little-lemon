import React from 'react'
import './Header.css'
import Reservations from '../Reservations'
import { Routes, Route, Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div>
                <nav className='list'>
                    <div >
                        <img id='nav_logo' src='http://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png' alt='lttle-lemon-logo' />
                    </div>
                    <a href="#" className='toggle-button'>
                        <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z" fill="black" />
                        </svg>
                    </a>
                    <ul >
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/reservations' element={<Reservations />} />
                </Routes>

            </div>
        </header>
    )
}

export default Header