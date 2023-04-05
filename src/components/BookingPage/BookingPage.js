import React from 'react'
import { useState } from "react";
import { validateEmail, validateNumberOfDinners } from "../../utlis";
import "./BookingPage.css"

// const PasswordErrorMessage = () => {
//     return (
//         <p className="FieldError">Password should have at least 8 characters</p>
//     );
// };


function BookingPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [numberOfDinners, setNumberofDinners] = useState("")
    const [dateAndTime, setDateAndTime] = useState("")
    // const [password, setPassword] = useState({
    //     value: "",
    //     isTouched: false,
    // });
    const [occasion, setOccasion] = useState("occasion");

    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            validateNumberOfDinners(numberOfDinners)
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
                            <label>
                                First name <sup>*</sup>
                            </label>
                            <input
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                placeholder="First name"
                            />
                        </div>
                        <div className="Field">
                            <label>Last name</label>
                            <input
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                placeholder="Last name"
                            />
                        </div>
                        <div className="Field">
                            <label>
                                Email address <sup>*</sup>
                            </label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Email address"
                            />
                        </div>
                        <div className="Field" >
                            <label>
                                Date and time of reservation <sup>*</sup>
                            </label>

                            <input
                                value={dateAndTime}
                                onChange={(e) => {
                                    setDateAndTime(e.target.value);
                                }}
                                placeholder="dd/mm/yyyy" />
                        </div>
                        <div className="Field">
                            <label>
                                Number of Dinners <sup>*</sup>
                            </label>
                            <input
                                value={numberOfDinners}
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
                            <label>
                                Occasion <sup>*</sup>
                            </label>
                            <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="occasion">Occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="engagement">Engagement</option>
                                <option value="anniversary">Anniversary</option>

                            </select>
                        </div>
                        <button className="Button" type="submit" disabled={!getIsFormValid()}>
                            reserve the table
                        </button>
                    </fieldset>
                </form>
            </div>


        </div>
    )
}

export default BookingPage