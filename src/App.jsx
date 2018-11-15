import React from 'react';
import Counter from './components/stable/Counter';
import ArrowCounter from './components/stable/ArrowCounter';
import CounterHooks from './components/hooks/CounterHooks';
import Clock from './components/stable/Clock';
import ClockHooks from './components/hooks/ClockHooks';
import Toggle from './components/stable/Toggle';
import ToggleHooks from './components/hooks/ToggleHooks';
import LoginControl from './components/stable/LoginControl';
import LoginControlArrow from './components/stable/LoginControlArrow';
import LoginControlHooks from './components/hooks/LoginControlHooks';
import Page from './components/stable/Page';
import PageHooks from './components/hooks/PageHooks';


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
    <div><LoginControl /></div>
    <div><LoginControlArrow /></div>
    <div><LoginControlHooks /></div>
    <div><Page /></div>
    <div><PageHooks /></div>
  </div>
