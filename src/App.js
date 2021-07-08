import React from 'react';
import './App.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled from 'styled-components';

import configureStore from './config/store';
const {store, persistor} = configureStore();


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
