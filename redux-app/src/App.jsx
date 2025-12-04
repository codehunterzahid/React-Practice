import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index';

function App() {
  const myState = useSelector((state) => state.changeCounter);
  const dispatch = useDispatch();
  return (
    <>

      <div className='container'>

        <h1>This is a Counter App</h1>
        <h3>Using React Redux</h3>

        <div className='counter'>
          <button onClick={() => dispatch(decNumber())}>-</button>

          <input
            type="text"
            value={myState}
            readOnly
          />

          <button onClick={() => dispatch(incNumber())}>+</button>
        </div>

      </div>

    </>
  )
}

export default App
