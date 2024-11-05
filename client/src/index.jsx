// Import React to enable the use of React components
import React from 'react';

// Import ReactDOM to interact with the DOM and render React components
import ReactDOM from 'react-dom/client';

// Import the CSS file for styling the application
import './index.css';

// Import the main App component that will be rendered
import App from './App';

// Import the reportWebVitals function to measure app performance
import reportWebVitals from './reportWebVitals';

// Create a root element using ReactDOM for the specified DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component inside the StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
