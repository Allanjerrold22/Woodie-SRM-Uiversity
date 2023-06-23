import React from "react";
import './Dashboard.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../assets/menu.png'
import { Typography } from "@mui/material";
import Woodie from '../assets/woodie.png'
import './Dashboard.css'
import { Link } from "react-scroll";
import Countsection from '../Countsection';
import { Button } from "@mui/material";
import treeicon from '../assets/chrismas-tree.svg';
import Chip from '@mui/material/Chip';
import Viewsicon from '../assets/views.svg'
import CountUp from 'react-countup';




const Dashboard=()=>{

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    return(
        <div>
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
                            <Button variant="contained" style={{borderRadius:20,paddingRight:32,paddingLeft:32,background:'#252525'}}> Create</Button>
                            <Button variant="outlined" style={{borderRadius:20,paddingRight:20,paddingLeft:20,borderWidth:2,color:'#252525',borderColor:'#252525',marginLeft:20}}> Log out</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>


                        <div style={{ width: "100%",height:"40vh" ,
                                backgroundImage: "url(/counttree.jpg)",
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                }}>
                                    <div className="viewbox" style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>

                                        

                                        

                                        <div className="viewcard" style={{width:160,height:140,marginTop:32}}>

                                            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                <img src={treeicon} style={{width:64,height:64,position:'relative',top:-24}}/>
                                            </div>

                                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:-10}}>
                                                {/* <p style={{fontSize:16,fontWeight:500,color:'#2727',textAlign:'center',margin:0,marginTop:-16}}>Total</p> */}
                                                <Chip label="Total" variant="outlined" style={{fontWeight:500,color:'#fff',textAlign:'center',fontSize:12,marginTop:-10,borderColor:'#fff',width:80}}/>
                                                <p style={{fontSize:26,fontWeight:800,color:'#FFFF',textAlign:'center',margin:0,marginTop:10}}>1290</p>
                                            </div>

                                        </div>

                                        <div style={{width:320,height:180,marginTop:32,backgroundColor:'#ffff',borderRadius:20,}}>

                                            <div >
                                                <p style={{fontSize:16,fontWeight:400,textAlign:'left',color:'#656565',marginRight:32,marginLeft:32}}>Total number of People Visited Woodie </p>
                                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}> 
                                                <img src={Viewsicon} style={{width:80,height:80,objectFit:'contain'}}/>
                                                <CountUp end={2300} enableScrollSpy duration={5} style={{fontSize:32,fontWeight:'600',margin:0,color:'#2525',marginRight:32}}/>
                                                </div>
                                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'row'}}>
                                                    {/* <Button variant="contained" size="small" style={{background:'#252525',borderRadius:12}} >Today</Button>
                                                    <Button variant="contained" size="small" style={{background:'#252525',borderRadius:12}}>This Week</Button>
                                                    <Button variant="contained" size="small"  style={{background:'#252525',borderRadius:12}}>This Month</Button> */}


                                                </div>
                                            </div>



                                        </div>

                                    </div>


                        </div>


                        


          



        </div>
    )
}

export default Dashboard;