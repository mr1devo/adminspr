import './App.css';
import React, { useEffect, useState } from 'react'
import Topbar from './components/adminpanel/Topbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Registration from "./components/view/Registration";
import Places from "./components/view/Places";
import Home from "./components/adminpanel/Home";
import PlaceView from './components/view/PlaceView';
import Hotel from './components/view/Hotel';
import Restra from './components/view/Restra';
import HotelView from './components/view/HotelView';


function App() {
  const [isloggedin,setIsloggedin] =useState(false);

  useEffect(()=>{
  const storevalue =localStorage.getItem("isloggedin");
  if(storevalue==="1")
   {
    setIsloggedin(true); 
  }
  },[])
  
  const Logincheck =() =>{
  localStorage.setItem("isloggedin",'1')
  setIsloggedin(true);
  }
  const Logoutcheck =() =>{
  localStorage.removeItem("isloggedin")
  setIsloggedin(false);
  }

  
  return (
    <div >
     
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
     <Route path='/Places' element={<Places method='POST'/>}></Route>
     <Route path='/Hotel' element={<Hotel method='POST'/>}></Route>
     <Route path='/Restra' element={<Restra method='POST'/>}></Route>
     <Route path='/HotelView' element={<HotelView method='GET'/>}></Route>
     <Route path='PlaceView' element={<PlaceView method='GET'/>}> </Route>    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;