import {observer} from 'mobx-react';
import React from 'react'
import {Store} from './modal';

type Props = {
  store: Store
}

function Hello({store}: Props) {
  return <div>
    <button onClick={() => store.counter.increase()}>+1</button>
    <div>Count: {store.counter.count}</div>
    <div>Double: {store.counter.double}</div>
  </div>
}

export default observer(Hello)
