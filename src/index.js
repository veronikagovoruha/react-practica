import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import 'normalize.css';
import CategoriesProvider from './context/CategoriesProvider';
import TransactionsProvider from './context/TransactionsProvider';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <TransactionsProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </TransactionsProvider>
    </BrowserRouter>
  </React.StrictMode>
);


