import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../Components/assets/menu.png'
import { Typography } from "@mui/material";
import Woodie from '../Components/assets/woodie.png'
import './Nav.css'
import { Link } from "react-scroll";
import Countsection from './Countsection';
import { Button } from "@mui/material";
import Info from './infopage/Info';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="blureffect" style={{}}>
      <div className="container">
        <div className="logocenter">
        <div className="logo" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          {/* <p style={{fontSize:18,fontFamily:'Helvetica',fontWeight:600}}>Woodie</p> */}
          <Typography style={{fontWeight:600}}
  variant="h6"
  align="left"
  color="grey.700"
  sx={{
    backgroundcolor: "primary",
    backgroundImage: `linear-gradient(45deg, #90BBA1, #437137)`,
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}
>
  Woodie
</Typography>   
          
        <img src={Woodie} style={{ width: 55, height: 55 }} />
        </div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img src={Menu} style={{ width: 55, height: 55 }} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul style={{alignItems:'center'}}>
            <li>
            <Link activeClass="active" smooth spy to={Countsection}>Home </Link>
            </li>
            <li>
              <NavLink to="/blog">Stats</NavLink>
            </li>
            
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

            <li>
              <Button variant="contained" className='mapbtn' style={{background:'#252525',borderRadius:20,paddingRight:32,paddingLeft:32}} >
                Map
              </Button>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  )

  

  
}


export default Navbar