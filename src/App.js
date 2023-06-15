import './App.css';
import Landingpage from './Landingpage';
import Info from './Components/infopage/Info';
import Imageviewer from './Components/Imageviewer';

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
    
      

      
      {/* <Countsection id="counts"/> */}

      {/* <About/> */}
      
      
      </Routes>
      </Router>
    
  );
}

export default App;
