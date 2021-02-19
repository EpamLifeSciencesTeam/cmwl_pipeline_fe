import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import { rootReducer } from './store';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// ToDo: Add spinner
// ToDo: Add Error handling
// ToDo: Add Mock Auth (for local purposes)
// ToDo: Use the local store for keeping auth info
// ToDo: Improve performance via component's life-cycles (render them only when it's needed)
// ToDo: Make a presentable style
// ToDo: Add fp-ts to use functional approach for development
// ToDo: Add tests

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
