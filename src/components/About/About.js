import React from 'react'
import './About.css'
import aboutImage1 from '../restaurant_images/MarioAndAdrianA.jpg';
import aboutImage2 from '../restaurant_images/MarioAndAdrianB.jpg';
function About() {
    return (
        <>
            <div className='about'>
                <h1>About</h1>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                <div className='restaurant-image-wrapper'>
                    <img src={aboutImage1} className='restaurant-imageA'></img>
                    <img src={aboutImage2} className='restaurant-imageA'></img>

                </div>
            </div>
        </>
    )
}

export default About