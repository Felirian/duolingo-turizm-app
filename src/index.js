import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/global";
import initializeTelegramSDK from "./features/_telegram_init_.ts";
import {BrowserRouter} from "react-router-dom";

initializeTelegramSDK();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <main>
    <GlobalStyle/>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </main>
);