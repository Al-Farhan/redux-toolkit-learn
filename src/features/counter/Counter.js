import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>Counter</div>
  )
}

export default Counter