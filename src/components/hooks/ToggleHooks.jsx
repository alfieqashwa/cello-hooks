// source: https://reactjs.org/docs/handling-events.html
import React, { useState } from 'react';

const ToggleHooks = () => {
    const [isToggleOn, setIsToggleOn] = useState( true );

    return (
      <button onClick={() => setIsToggleOn(!isToggleOn)}>
        { isToggleOn ? "HOOKS-ON" : "HOOKS-OFF" }
      </button>
    );
  }

export default ToggleHooks;
