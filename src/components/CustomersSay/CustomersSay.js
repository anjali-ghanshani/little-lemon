import React, { Fragment, useEffect, useState } from 'react'
import './CustomersSay.css'
import reviewerImage1 from '../../testimonial-images/reviewer1.jpg';
import reviewerImage2 from '../../testimonial-images/reviewer2.jpg';
import reviewerImage3 from '../../testimonial-images/reviewer3.jpg';
import reviewerImage4 from '../../testimonial-images/reviewer4.jpg';

function CustomersSay() {

    const customers = [
        {
            name: 'Zelma A. Ortiz',
            comment: '"Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. You should skip several meals before visiting this amazing restaurant. Everything is so tasty, you cannot restraint yourself from having all of the dishes."',
            image: reviewerImage1,
        },
        {
            name: 'Paul L. Hinkle',
            comment: '"A small local restaurant with great service, food, and overall experience! Definitely a go-to place for Lemon Dessert when you are in Chicago! Huge variety of Desserts to choose from & side dishes are delicious as well."',
            image: reviewerImage2,
        },
        {
            name: 'Jason R. Borders',
            comment: '"I have to say, I enjoyed every single bite of the meal in Little Lemon. I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. There was also plenty of room for bigger groups."',
            image: reviewerImage3,
        },
        {
            name: 'Lily E. Webb',
            comment: '"It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations."',
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
            <h1 className='carousel-container-heading'>What our customers have to say..</h1>
            <div className='carousel-container-inner'>
                {
                    customers.map((customer, index) => {
                        return <div className='carousel-item'
                            key={customer.name}
                            style={{ transform: `translate(-${currentIndex * 100}%)` }}>
                            <img src={customer.image} alt="alt" className='customer-image'></img>
                            <div className='customer-name'>{customer.name}</div>
                            <div className='customer-comment'>{customer.comment}</div>
                        </div>
                    })
                }


            </div>
        </div>
    )
}

export default CustomersSay