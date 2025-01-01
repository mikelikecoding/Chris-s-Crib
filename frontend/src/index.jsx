import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and above
import App from './App';
import './styles.css'; // If you have global CSS

const root = ReactDOM.createRoot(document.getElementById('root')); // This connects React to the root div in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
