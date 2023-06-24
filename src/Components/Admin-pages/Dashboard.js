import React from "react";
import './Dashboard.css'

// import "./styles.css";

import AdminNav from "./AdminNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Uploaded from "./Pages/Uploaded";
import DashHome from "./Pages/DashHome";
import Create from "./Pages/Create";




const Dashboard=()=>{

    return(
      <div>
        
      
        <AdminNav/>
        <Routes>
          <Route exact path="/"  element={<DashHome/>} />
          <Route path="/products" element={<Uploaded/>} />
          <Route path="/reports" element={<Create/>} />
        </Routes>
        </div>
      
 
  );
}
    


export default Dashboard;