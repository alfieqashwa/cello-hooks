import React, { useState } from 'react';

// Simple Counter
export default function  CounterHooks() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Hooks Count: {count}</p>
      <button type="button" disabled={count === 0} onClick={() => setCount(0)}>Reset</button>
      <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
      <button type="button" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
