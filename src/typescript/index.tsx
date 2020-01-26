import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Main           from '@pipeline/main';
import configureStore from '@pipeline/configureStore';

const history = createBrowserHistory();
const store = configureStore(history, window.__INITIAL_STATE__);

ReactDOM.render(<Main store={store} history={history}/>, document.getElementById('root'));
