import React from 'react'
import './Hero.css'
import restaurantImage from '../restaurant_images/restauranfood.jpg'
function Hero() {
  return (
    <>
      {/* CallToAction */}
      {/* HomePage */}
      {/* Specials */}
      {/* CustomersSay */}
      {/* Chicago */}
      {/* BookingPage */}
      <section className='hero'>
        <div className='call_to_action'>
          <h1 className='title'>Little Lemon</h1>
          <span className='subtitle'>Chicago</span>
          <p className='rest_description'>We are a family owned Mediterranean restaurant, Focused on traditional recipes served with a modern twist.</p>
          <a href='#' className='button'>Order Now</a>
        </div>
        <div className='image_wrapper'>
          <div className='food_image'></div>
        </div>
      </section>

      {/* <div className='hero_left'>
          <h1 className='rest_name'>Little Lemon</h1>
          <h4 className='rest_location'>Chicago</h4>
          <p className='rest_description'>We are a family owned Mediterranean restaurant, Focused on traditional recipes served with a modern twist.</p>
          <button className='cta' type='button'>Reserve a table</button>
        </div>
        <div className='hero_right'>

          <img className='rest_image' src={restaurantImage} alt='rest_image'></img>
        </div> */}
    </>
  )
}

export default Hero