import React from 'react'
import './CallToAction.css'

function CallToAction() {
  return (
    <>
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

    </>
  )
}

export default CallToAction