import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import "./Counter.css";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>

      <div className="counter-btns">
        <button className="btn-minus" onClick={() => dispatch(decrement())}>-</button>
        <button className="btn-plus" onClick={() => dispatch(increment())}>+</button>
        <button className="btn-add" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
    </div>
  );
}

export default Counter;
