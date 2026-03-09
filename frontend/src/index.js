// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Success from './success';
// import Fail from './fail';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
 
//     // <App />

//     <BrowserRouter>
        
//         <Routes>
//                  <Route path='/' element={<App/>} > </Route>
//                  <Route path='/success' element={<Success/>} > </Route>
//                  <Route path='/fail' element={<Fail/>} > </Route>
//         </Routes>
    
//     </BrowserRouter>


// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


