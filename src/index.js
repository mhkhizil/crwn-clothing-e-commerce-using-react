import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/contexts/user.contexts';

import { CartProvider } from './components/contexts/cart.context';
import { CategoriesProvider } from './components/contexts/categories.context';
import {Elements} from '@stripe/react-stripe-js';
import { stripePromise } from './util/stripe/stripe.util';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>

          </CartProvider>

        </CategoriesProvider>
      </UserProvider>


    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
