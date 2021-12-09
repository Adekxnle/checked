import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TaskContextProvider from './context/TaskContext';
import ModalContextProvider from './context/ModalContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </TaskContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
