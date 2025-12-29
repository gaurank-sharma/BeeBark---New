// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App'; // Main App component
// import './index.css'; // Tailwind CSS and custom styles


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
    
//     </BrowserRouter>
//   </React.StrictMode>
// );





import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; 
import './index.css'; 


import { ThemeProvider } from './context/ThemeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* --- 2. Wrap App with ThemeProvider --- */}
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);