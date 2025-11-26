import { useState } from "react";
import './Counter.css'

function Counter() {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count === 0) {
            alert("Can not Count in negeative")
        } else {
            setCount(count - 1);
        }
    }

    const resetCount = () => {
        setCount(0);
    }

    return (

        <div className="counter">

            <button onClick={increaseCount}>Increase</button>

            <p className="count">{count}</p>

            <button onClick={decreaseCount}>Decrease</button>
            <button className="reset" onClick={resetCount} disabled={count === 0}>Reset</button>

        </div>

    );
}

export default Counter;