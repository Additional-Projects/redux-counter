import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';

import { Provider } from 'react-redux'
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
