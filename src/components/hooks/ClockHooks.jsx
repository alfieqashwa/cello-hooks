import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timerID);
  },[]) // I'm not sure, but in the docs I should passing '[date]' as the 2nd argument
        // only if I need the 'componentDidUpdate()' life-cycle

  return <FormattedDate date={date} />;
}

const FormattedDate = ({ date }) =>
  <div>
    <h2>Cello React Hooks!</h2>
    <h3>It is {date.toLocaleTimeString()} now.</h3>
  </div>
