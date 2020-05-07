import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
      
import { PersistGate }from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
      <Suspense fallback={<div>...Loading</div>}>
      <App/>
      </Suspense>
     
      </PersistGate>
     
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

