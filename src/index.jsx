import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import faqReducer from './services/reducers/faq';
import placemarkInfoReducer from './services/reducers/placemarkInfo';
import addPlacemarkFormReducer from './services/reducers/addPlacemarkForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    faq: faqReducer,
    placemarkInfo: placemarkInfoReducer,
    addPlacemarkForm: addPlacemarkFormReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
