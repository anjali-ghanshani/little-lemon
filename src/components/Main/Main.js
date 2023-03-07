import React from 'react'
import './Main.css'
import reviewerImage1 from '../../testimonial-images/reviewer1.jpg';
import reviewerImage2 from '../../testimonial-images/reviewer2.jpg';
import reviewerImage3 from '../../testimonial-images/reviewer3.jpg';
import reviewerImage4 from '../../testimonial-images/reviewer4.jpg';
import dish1 from '../../testimonial-images/greek_salad.jpg';
import dish2 from '../../testimonial-images/bruchetta.jpg';
import dish3 from '../../testimonial-images/lemon_dessert.jpg';
import Hero from './Hero.js'
function Main() {
    return (
        <main>
            <Hero />
            {/* <div>Features</div> */}
            <section className='features'>
                <ul className="list-type">
                    <li className="dish-card">
                        <img className='dish-image' src={dish1} alt='Greek Salad' />
                        <h6 className="dish-name">Greek Salad</h6>
                        <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    </li>
                    <li className="dish-card">
                        <img className='dish-image' src={dish2} alt='Bruschetta' />
                        <h6 className="dish-name">Bruschetta</h6>
                        <p className="dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta. </p>
                    </li>
                    <li className="dish-card">
                        <img className='dish-image' src={dish3} alt='Lemon Dessert' />
                        <h6 className="dish-name">Lemon Dessert</h6>
                        <p className="dish-description">Lemon Desserts are the perfect way to celebrate summer with food!</p>
                    </li>

                </ul>
            </section>

            {/* <div>Testimonials</div> */}
            <section className='testimonials' >
                <h2>Testimonials</h2>

                <ul className='list-type'>
                    <li className='testimonial-card'>
                        <img className='testimonial-image' src={reviewerImage1} alt="Avatar" />
                        <div className="container">
                            <h4><b>Zelma A. Ortiz</b></h4>
                            <p>Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. You should skip several meals before visiting this amazing restaurant. Everything is so tasty, you cannot restraint yourself from having all of the dishes.</p>
                        </div>
                    </li>
                    <li className='testimonial-card'>
                        <img className='testimonial-image' src={reviewerImage2} alt="Avatar" />
                        <div className="container">
                            <h4><b>Paul L. Hinkle</b></h4>
                            <p>A small local restaurant with great service, food, and overall experience! Definitely a go-to place for Lemon Dessert when you are in Chicago! Huge variety of Desserts to choose from & side dishes are delicious as well.</p>
                        </div>
                    </li>
                    <li className='testimonial-card'>
                        <img className='testimonial-image' src={reviewerImage3} alt="Avatar" />
                        <div className="container">
                            <h4><b>Jason R. Borders</b></h4>
                            <p>I have to say, I enjoyed every single bite of the meal in Little Lemon. I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. Ideal for those who want a romantic night out. There was also plenty of room for bigger groups.</p>
                        </div>
                    </li>
                    <li className='testimonial-card'>
                        <img className='testimonial-image' src={reviewerImage4} alt="Avatar" />
                        <div className="container">
                            <h4><b>Lily E. Webb</b></h4>
                            <p>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* <div>About the restaurant</div> */}

        </main>
    )
}

export default Main