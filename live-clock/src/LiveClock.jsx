import { useState, useEffect } from "react";

function LiveClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
    
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, []);

    return (
        <div>
            <h1>Live CLock App</h1>

            <h4>Current Time: {time.toLocaleTimeString()}</h4> <br />

        </div>

    )

}

export default LiveClock;