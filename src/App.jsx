import React from 'react';

import {
  Counter,
  ArrowCounter,
  Clock,
  Toggle,
  LoginControl,
  LoginControlArrow,
  Page,
  Blogpost,
  BlogpostDestructure,
} from './components/stable';

import {
  CounterHooks,
  ClockHooks,
  ToggleHooks,
  LoginControlHooks,
  PageHooks,
} from './components/hooks';



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
    <hr />
    <div><Blogpost /></div>
    <hr />
    <div><BlogpostDestructure /></div>
  </div>
