import React, { useState } from 'react';

// Awesome!
const WarningBanner = ({ warn }) => warn && <h1 style={{color: 'tomato'}}>Warning Hooks!</h1>

export default function Page() {
  const [showWarning, setShowWarning] = useState(true);

  return (
    <div>
      <WarningBanner warn={showWarning} />
      <button onClick={() => setShowWarning(!showWarning)}>
        {showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
