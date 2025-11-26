import { useState, useEffect } from "react";

function MovingObject() {

    const [position, setPosition] = useState(0);
    const [moving, setMoving] = useState(true);

    useEffect(() => {
        if (!moving) return;

        const interval = setInterval(() => {
            setPosition(position + 5);
            console.log("Object is moving")
        }, 100);

        return () => clearInterval(interval);

    }, [position, moving]);

    const stopObject = () => {
        setMoving(false);
        console.log("Object stopped");
    }

    const startObject = () => {
        setMoving(true);
        console.log("Object Motion start")
    }

    return (
        <div>
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    position: "relative",
                    left: `${position}px`,
                }}
            ></div>

            <button onClick={() => { if (moving) { stopObject() } else { startObject() } }} style={{ marginTop: "20px" }}>
                Stop
            </button>
        </div>
    );
}

export default MovingObject;
