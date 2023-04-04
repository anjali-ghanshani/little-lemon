import React, { useEffect, useState } from 'react'
import './CustomersSay.css'
import reviewerImage1 from '../../testimonial-images/reviewer1.jpg';
import reviewerImage2 from '../../testimonial-images/reviewer2.jpg';
import reviewerImage3 from '../../testimonial-images/reviewer3.jpg';
import reviewerImage4 from '../../testimonial-images/reviewer4.jpg';

function CustomersSay() {

    const customers = [
        {
            name: 'Zelma A. Ortiz',
            comment: 'Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. You should skip several meals before visiting this amazing restaurant. Everything is so tasty, you cannot restraint yourself from having all of the dishes.',
            image: reviewerImage1,
        },
        {
            name: 'Paul L. Hinkle',
            comment: 'A small local restaurant with great service, food, and overall experience! Definitely a go-to place for Lemon Dessert when you are in Chicago! Huge variety of Desserts to choose from & side dishes are delicious as well.',
            image: reviewerImage2,
        },
        {
            name: 'Jason R. Borders',
            comment: 'I have to say, I enjoyed every single bite of the meal in Little Lemon. I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. Ideal for those who want a romantic night out. There was also plenty of room for bigger groups.',
            image: reviewerImage3,
        },
        {
            name: 'Lily E. Webb',
            comment: 'It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.',
            image: reviewerImage4,
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === customers.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            carouselInfiniteScroll()
        }, 5000)
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })
    return (
        <div className='carousel-container'>
            {
                customers.map((customer, index) => {
                    return <div className='carousel-item'
                        key={customer.name}
                        style={{ transform: `translate(-${currentIndex * 100}%)` }}>
                        <div className='customer-name'>{customer.name}</div>
                        <div className='customer-comment'>{customer.comment}</div>
                        <img src={customer.image} alt="alt" className='customer-image'></img>
                    </div>
                })
            }

            {/* <section className='testimonials' >
                <h1>Testimonials</h1>

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
            </section> */}
        </div>
    )
}

export default CustomersSay