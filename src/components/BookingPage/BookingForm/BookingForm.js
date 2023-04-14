import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { validateDate, validateEmail, validateNumberOfDinners } from "../../../utlis";
import "./BookingForm.css"

function BookingForm({ availableTimes, dispatch }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [numberOfDinners, setNumberofDinners] = useState("")
    const [date, setDate] = useState("")
    const [occasion, setOccasion] = useState("occasion");
    const navigate = useNavigate()
    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            validateNumberOfDinners(numberOfDinners) &&
            validateDate(date)
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setNumberofDinners("")
        setOccasion("occasion")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation(s) confirmed!");
        navigate("/confirmed-booking")
        clearForm();
    };

    const updateAvailableTimes = (newDate) => dispatch({ type: "UPDATE_TIMES", payload: newDate })
    return (
        <div className='booking-page'>
            <div className='booking-form'>
                <form onSubmit={handleSubmit} aria-label="Make the table reservation(s) here:">
                    <fieldset>
                        <h1 className='booking-heading'>Make the table reservation(s) here:</h1>
                        <div className='Field'>
                            <label htmlFor='firstName'>
                                First name <sup>*</sup>
                            </label>
                            <input
                                id='firstName'
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                placeholder="First name"
                            />
                        </div>
                        <div className="Field">
                            <label htmlFor='lastName'>Last name</label>
                            <input
                                id='lastName'
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                placeholder="Last name"
                            />
                        </div>
                        <div className="Field">
                            <label htmlFor='email'>
                                Email address <sup>*</sup>
                            </label>
                            <input
                                id='email'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Email address"
                            />
                        </div>
                        <div className="Field" >
                            <label htmlFor='date'>
                                Date <sup>*</sup>
                            </label>

                            <input
                                id='date'
                                value={date}
                                type='date'
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    updateAvailableTimes(e.target.valueAsDate)
                                }}
                            />
                        </div>
                        <div className="Field" >
                            <label htmlFor='time'>
                                Time <sup>*</sup>
                            </label>
                            <select
                                id='time'
                                value={availableTimes.time}
                                type='time'
                                placeholder='select'
                            // onChange={(e) => {
                            //     setTimes(e.target.value);
                            // }}

                            >
                                {availableTimes.map(time => {
                                    return <option key={availableTimes.time}>{time}</option>

                                })}
                            </select>
                        </div>
                        <div className="Field">
                            <label htmlFor='numberOfDinners'>
                                Number of Dinners <sup>*</sup>
                            </label>
                            <input
                                id='numberOfDinners'
                                value={numberOfDinners}
                                min='1'
                                max='10'
                                onChange={(e) => {
                                    setNumberofDinners(e.target.value);
                                }}
                                placeholder="Number of dinners"
                            />
                        </div>
                        <div className="Field">
                            <label htmlFor='occasion'>
                                Occasion
                            </label>
                            <select id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="occasion">Occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="engagement">Engagement</option>
                                <option value="anniversary">Anniversary</option>

                            </select>
                        </div>
                        <button className='booking-button' type="submit" disabled={!getIsFormValid()}>
                            reserve the table
                        </button>
                    </fieldset>
                </form>
            </div>


        </div>
    )
}

export default BookingForm