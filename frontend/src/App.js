//USING POST METHOD - FRONTEND

// import logo from './logo.svg';
// import './App.css';
// import { useState } from "react";
// // import Success from "./success";
// // import Fail from "./fail";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function App() 
// {
//   const [user, setUser] = useState("")
//   const [pass, setPass] =  useState("")
//   const navigate = useNavigate()

//   function handleUser(event)
//   {
//     setUser(event.target.value)
//   }

//   function handlePass(event)
//   {
//     setPass(event.target.value)
//   }

//   function handleSubmit()
//   {
//         var loginDetails = axios.post("http://localhost:5000/login", {"username":user,"password":pass})
//         loginDetails.then(function(data)
//         {
//           // console.log(data)
//           if(data.data === true)
//           {
//             // console.log("Login Successful")
//             navigate("/success")
//           }
//           else
//           {
//             navigate("/fail")
//           }
//         }
//         )
//   }
  

//   return (
//     // <form action="http://localhost:5000/login" method="get">
//     // <form action="http://localhost:5000/login" method="post">
      
//     <div>
//       <input name="username" onChange={handleUser} placeholder="username"/>
//       <input name="password" onChange={handlePass} placeholder="password"/>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;