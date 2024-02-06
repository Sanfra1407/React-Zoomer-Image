import React from 'react';
import ReactDOM from "react-dom/client"
import Avengers from './Avengers';
import './index.scss';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Avengers />
  </React.StrictMode>,
);