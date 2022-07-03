import React from 'react';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from './App';
import { createRoot } from 'react-dom/client';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
