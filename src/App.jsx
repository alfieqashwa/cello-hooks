import React from 'react';
import Counter from './components/stable/Counter';
import ArrowCounter from './components/stable/ArrowCounter';
import CounterHooks from './components/hooks/CounterHooks';
import Clock from './components/stable/Clock';
import ClockHooks from './components/hooks/ClockHooks';


export default () =>
  <div>
    <Counter />
    <ArrowCounter />
    <CounterHooks />
    <Clock />
    <ClockHooks />
  </div>
