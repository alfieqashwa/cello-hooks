import React from 'react';
import Counter from './components/stable/Counter';
import ArrowCounter from './components/stable/ArrowCounter';
import CounterHooks from './components/hooks/CounterHooks';
import Clock from './components/stable/Clock';
import ClockHooks from './components/hooks/ClockHooks';
import Toggle from './components/stable/Toggle';
import ToggleHooks from './components/hooks/ToggleHooks';


export default () =>
  <div>
    <div>
      <Counter />
      <ArrowCounter />
      <CounterHooks />
    </div>
    <div>
      <Clock />
      <ClockHooks />
    </div>
    <div>
      <Toggle />
    </div>
    <div>
      <ToggleHooks />
    </div>
  </div>
