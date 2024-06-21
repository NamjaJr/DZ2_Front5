import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, moreIncrement, moreDecrement, reset } from "../store/CounterSlice";

function Counter() {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(moreIncrement())}>+10</button>
            <button onClick={() => dispatch(moreDecrement())}>-10</button>
            <button onClick={() => dispatch(reset())}>Сбросить</button>
        </div>
    );
}

export default Counter;
