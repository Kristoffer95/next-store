'use client';
import { useDispatch, useSelector } from 'react-redux';

import { increment } from '@/redux/counter/counterSlice';
import { AppDispatch, RootState } from '@/redux/store';

function TestComp() {
  const { counterValue } = useSelector((state: RootState) => {
    return {
      counterValue: state.counter.value,
    };
  });

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <pre>{counterValue}</pre>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default TestComp;
