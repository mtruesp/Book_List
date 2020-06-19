import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './Components/App';
import Redux from './Components/Redux'
import reducers from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App/>
    {/* <Redux/> */}
  </Provider>,
  document.getElementById('root')
);