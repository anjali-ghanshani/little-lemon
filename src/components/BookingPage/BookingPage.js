import React, { useReducer } from 'react'
import BookingForm from './BookingForm/BookingForm';
import "./BookingPage.css"
import BookingSlot from './BookingSlot/BookingSlot';
import { fetchAPI } from './api.js'




// const availableTimes = [
//     "select",
//     "5:00 pm",
//     "6:00 pm",
//     "7:00 pm",
//     "8:00 pm",
//     "9:00 pm",
//     "10:00 pm",
// ]


const initializeTimes = function () {
    const result = fetchAPI(new Date())
    return { availableTimes: result }
}
const updateTimes = function (state, action) {
    if (action.type === "UPDATE_TIMES") {

        const result = fetchAPI(action.payload)
        return {
            ...state,
            availableTimes: result,
        }
    }
}

function BookingPage() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
    console.log(availableTimes);
    return (
        <>
            <BookingForm availableTimes={availableTimes.availableTimes} dispatch={dispatch} />
            <BookingSlot />
        </>
    )
}

export default BookingPage