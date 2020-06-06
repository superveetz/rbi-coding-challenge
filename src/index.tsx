import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app-container';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// app setup
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
