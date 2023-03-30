import React from 'react'
import './Specials.css'
import dish1 from '../../testimonial-images/greek_salad.jpg';
import dish2 from '../../testimonial-images/bruchetta.jpg';
import dish3 from '../../testimonial-images/lemon_dessert.jpg';
function Specials() {
    return (
        <>
            <div className='specials_heading'> Specials </div>
            <div className='specials'>

                <div className='dish-card card-shadow'>
                    <div className='card-header'>
                        <img src={dish1} alt='greek salad' />
                        <div className='card-name'>Greek Salad</div>
                    </div>
                    <p className='card-body'>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                    </p>
                    <div className='card-footer'>
                        <button className='btn'>Details</button>
                        <button className='btn btn-outline'>Add to Order</button>
                    </div>
                </div>
                <div className='dish-card card-shadow'>
                    <div className='card-header'>
                        <img src={dish2} alt='bruschetta' />
                        <div className='card-name'>Bruschetta</div>
                    </div>
                    <div className='card-body'>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.
                    </div>
                    <div className='card-footer'>
                        <button className='btn'>Details</button>
                        <button className='btn btn-outline'>Add to Order</button>
                    </div>
                </div>
                <div className='dish-card card-shadow'>
                    <div className='card-header'>
                        <img src={dish3} alt='lemon desserts' />
                        <div className='card-name'>Lemon Desserts</div>
                    </div>
                    <div className='card-body'>
                        Lemon Desserts are the perfect way to celebrate summer with food!
                    </div>
                    <div className='card-footer'>
                        <button className='btn'>Details</button>
                        <button className='btn btn-outline'>Add to Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Specials