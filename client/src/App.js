import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route, Redirect,Navigate
  } from "react-router-dom";

import Dashboard from "./Layouts/dashboard";

import Home from "./Pages/Home";
import Students from  "./Pages/Students";
import Courses from "./Pages/Courses";
import Results from "./Pages/Results";

import './App.css';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard title="Home" renderpage={<Home/>}/>} />
        <Route path="/students" element={<Dashboard title="Students" renderpage={<Students/>}/>} />
        <Route path="/courses" element={<Dashboard title="Courses" renderpage={<Courses/>}/>} />
        <Route path="/results" element={<Dashboard title="Results" renderpage={<Results/>}/>} />
    </Routes>
  );
}

export default App;
