import './App.css';
import Landingpage from './Landingpage';
import Info from './Components/infopage/Info';
import Imageviewer from './Components/Imageviewer';
import Map from './Components/Map';
import Verification from './Components/Admin-pages/Verification';
import Dashboard from './Components/Admin-pages/Dashboard';

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom'
// import Butterfly from './Components/Canvas/Butterfly';
import { Butterflybg } from "./Components/Canvas";


function App() {
  return (
    
    <Router>
       <Routes>
       <Route exact path='/' element={<Landingpage/>} ></Route>
        {/* <Route path="Home" element={<Home/>} /> */}
        <Route path="/Info" element={<Info/>} />
        <Route path="/imageview" element={<Imageviewer/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/admin" element={<Verification/>} />
        <Route path="/admin/Dashboard" element={<Dashboard/>} />

      

      
      {/* <Countsection id="counts"/> */}

      {/* <About/> */}
      
      
      </Routes>
      </Router>
    
  );
}

export default App;
