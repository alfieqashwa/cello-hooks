import React from 'react';

import {
  Counter,
  CounterArrow,
  Clock,
  Toggle,
  LoginControl,
  LoginControlArrow,
  Page,
  Blogpost,
  BlogpostDestructure,
  Reservation
} from './components/stable';

import {
  CounterHooks,
  ClockHooks,
  ToggleHooks,
  LoginControlHooks,
  PageHooks,
  ReservationHooks
} from './components/hooks';



export default () =>
  <div>
    <div>
      <Counter />
      <CounterArrow />
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
    <div>
      <h2>Reservation</h2>
      <Reservation />
    </div>
    <div>
      <h2>ReservationHooks</h2>
      <ReservationHooks />
    </div>
  </div>
