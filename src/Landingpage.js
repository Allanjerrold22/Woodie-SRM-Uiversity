import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Countsection from './Components/Countsection';
import About from './Components/About';
import Info from './Components/infopage/Info';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

 const Landingpage=()=>{
    return(
        <div>
        <Navbar/>
        <Home/>
        <Countsection/>
        <About/>
        </div>
    )
 }
 export default Landingpage;