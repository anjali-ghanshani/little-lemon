import React from 'react'
import { useState } from "react";
import { validateDate, validateEmail, validateNumberOfDinners } from "../../utlis";
import "./BookingPage.css"

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};


function BookingPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [numberOfDinners, setNumberofDinners] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    // const [password, setPassword] = useState({
    //     value: "",
    //     isTouched: false,
    // });
    const [occasion, setOccasion] = useState("occasion");
    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            validateNumberOfDinners(numberOfDinners) &&
            validateDate(date)
            // &&
            // password.value.length >= 8 &&
            // role !== "role"
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setNumberofDinners("")
        setOccasion("occasion")
        // setPassword({
        //     value: "",
        //     isTouched: false,
        // });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation(s) confirmed!");
        clearForm();
    };
    return (
        <div className='booking-page'>
            <div className='booking-form'>
                <form onSubmit={handleSubmit}>
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
                                // min={getToday()}
                                value={date}
                                type='date'
                                onChange={(e) => {
                                    setDate(e.target.value);
                                }}
                            />
                        </div>
                        <div className="Field" >
                            <label htmlFor='time'>
                                Time <sup>*</sup>
                            </label>

                            <select
                                id='time'
                                value={time}
                                type='time'
                                onChange={(e) => {
                                    setTime(e.target.value);
                                }}
                            >
                                <option>5:00 pm</option>
                                <option>6:00 pm</option>
                                <option>7:00 pm</option>
                                <option>8:00 pm</option>
                                <option>9:00 pm</option>
                                <option>10:00 pm</option>
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
                        {/* <div className="Field">
                            <label>
                                Password <sup>*</sup>
                            </label>
                            <input
                                value={password.value}
                                type="password"
                                onChange={(e) => {
                                    setPassword({ ...password, value: e.target.value });
                                }}
                                onBlur={() => {
                                    setPassword({ ...password, isTouched: true });
                                }}
                                placeholder="Password"
                            />
                            {password.isTouched && password.value.length < 8 ? (
                                <PasswordErrorMessage />
                            ) : null}
                        </div> */}
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
                        <button type="submit" disabled={!getIsFormValid()}>
                            reserve the table
                        </button>
                    </fieldset>
                </form>
            </div>


        </div>
    )
}

export default BookingPage