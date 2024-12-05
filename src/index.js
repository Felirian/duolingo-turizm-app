
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/global";
import {miniApp} from '@telegram-apps/sdk';
import initializeTelegramSDK from "./features/telegram_init.ts";

initializeTelegramSDK();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle/>
    <App/>
  </>
);