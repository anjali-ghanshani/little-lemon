import { useState } from "react";

const useSubmit = () => {
    const [isLoading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const submit = async (url, data) => {
        const random = Math.random();
        setLoading(true);
        try {
            await wait(2000);
            if (random < 0.5) {
                throw new Error("somethibg went wrong");
            }
            setResponse({
                type: 'success',
                message: `Thanks for making reservations with us, ${data.firstName}, see you soon!!`,
            })
        } catch (error) {
            setResponse({
                type: "error",
                message: "something went wrong, please try again later!",
            })
        } finally {
            setLoading(false);
        }
    };
    return { isLoading, response, submit }
}

export default useSubmit;