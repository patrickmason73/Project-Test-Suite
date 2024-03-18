import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <UserProvider>
    <App />
    </UserProvider>
  </Router>
);

