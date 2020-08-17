import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvier from "./_context/ContextProvider";
import App from './App';
import "./styles/reset.css";
import "./styles/globalStyles.css";

ReactDOM.render(
  <ContextProvier>
    <App />
  </ContextProvier>,
  document.getElementById('root')
);