import React, { useReducer } from 'react'
import BookingForm from './BookingForm/BookingForm';
import "./BookingPage.css"
import BookingSlot from './BookingSlot/BookingSlot';
import { fetchAPI } from '../../api/api.js'




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

export { updateTimes, initializeTimes }