import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (

        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Redux Toolkit Counter</h1>
            <h2>Count: {count}</h2>


            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>

            <button onClick={() => dispatch(incrementByAmount(5))}>
                +5
            </button>
        </div>
    )
}

export default Counter;