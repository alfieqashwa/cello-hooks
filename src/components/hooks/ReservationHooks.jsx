import React, { useState } from 'react';

function ReservationHooks() {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  return (
    <form>
      <label>
        <input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          onChange={e => setIsGoing(e.target.checked)} />
      </label>
      <br />
      <label>
        Number of Guests:
        <input
          name="numberOfGuests"
          type="number"
          value={numberOfGuests}
          onChange={e => setNumberOfGuests(e.target.value)} />
      </label>
    </form>
  );
}

export default ReservationHooks;
