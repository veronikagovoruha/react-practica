import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import 'normalize.css';
import CategoriesProvider from './context/CategoriesProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </React.StrictMode>
);


