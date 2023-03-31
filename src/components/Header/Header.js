import React from 'react'
import './Header.css'
import BookingPage from '../BookingPage/BookingPage'
import About from '../About/About.js'
import { Routes, Route, Link } from "react-router-dom"
import CallToAction from '../CallToAction/CallToAction'
import Specials from '../Specials/Specials'
import CustomersSay from '../CustomersSay/CustomersSay'

function Header() {
    return (
        <header>
            <div>
                <nav className='list'>
                    <div >
                        <Link to="/">
                            <img id='nav_logo' src='http://jordanbr.pythonanywhere.com/static/restaurant/img/logo.png' alt='lttle-lemon-logo' />
                        </Link>
                    </div>
                    <ul >
                        <li><Link to="/about">About</Link></li>
                        <li><a href="#">Menu</a></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={
                        <main>
                            <CallToAction />
                            <Specials />
                            <CustomersSay />
                        </main>
                    }
                    />
                    <Route path='/reservations' element={<BookingPage />} />
                    <Route path='/about' element={<About />} />
                </Routes>

            </div>
        </header>
    )
}

export default Header