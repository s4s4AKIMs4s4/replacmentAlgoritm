import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { listSlice } from './store/reducers/listSlice';
import { setupStore } from './store/store';
import {createRoot} from 'react-dom/client';
const store = setupStore()
//@ts-ignore
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>,
  </React.StrictMode>
);