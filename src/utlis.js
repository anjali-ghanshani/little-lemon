export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const validateNumberOfDinners = (numberOfDinners) => {
    return Number(numberOfDinners) > 0;
}

export const validateDate = (date) => {
    const todayDate = new Date()
    const enteredDate = new Date(date)
    return enteredDate.getDate() >= todayDate.getDate()

}
