import React from "react";
import {Routes,Route} from "react-router-dom"
import About from './components/About.jsx'
import Login from './components/Login.jsx'
import './App.css'
import Home from "./components/Home.jsx";
import Booking from "./components/Booking.jsx";
import Room from "./components/Room.jsx";
import Register from "./components/Register.jsx";

function App(){
  return(
    <>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Room" element={<Room />} />
      <Route path="/Booking" element={<Booking />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>

    </>
  )
}

export default App