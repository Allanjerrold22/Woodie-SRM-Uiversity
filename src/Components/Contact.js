import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Pinky from "./assets/pinky.JPG";
import  Woodie from "./assets/woodie.png";

import '../App.css'
const Contact=()=>{
    return(
        <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <p style={{fontWeight:800,fontSize:'2em',color:'#CDCDCD',textAlign:'left',marginLeft:16}}>Give us Ideas</p>
                <div style={{backgroundColor:'#ADC1B5',width:80,height:20}}></div>
            </div>

            <div className="feedback-bg" style={{ width: "100%",height:640 ,
              backgroundImage: "url(/contactbg.jpg)",
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
              }}>

             

            

            <div className="feedbackbox" style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                <div style={{width:600,backgroundColor:'#fff',height:540,borderRadius:12,marginLeft:32,marginRight:32,marginTop:50}}>

               
                
               <img src={Pinky} style={{width:"100%",height:160,objectFit:'cover',position:'relative',top:0,borderTopLeftRadius:12,borderTopRightRadius:12}}/>
               <div style={{}}>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:-50}}>
                        <img src={Woodie} style={{width:72,height:72,position:'relative',top:0}}/>
                        </div>



                  <p style={{fontSize:20,fontWeight:500,color:'#252525',textAlign:'center'}}>Your feedback values</p>

                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

                        
                            <TextField
                                helperText="Please enter your name"
                                id="demo-helper-text-misaligned"
                                label="Name"
                                style={{width:280}}
                            />
                            <TextField
                                helperText="Please enter your E-mail"
                                id="demo-helper-text-misaligned"
                                label="E-mail"
                                
                                style={{width:280,marginTop:20,color:'#EEEE'}}
                            />
                            <Button variant="contained" style={{background:'#252525',borderRadius:10,marginTop:32,paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10}}> Submit</Button>
                    {/* <TextField id="demo-helper-text-misaligned-no-helper" label="Mail" style={{width:280}} /> */}
                    </div>
                    </div>

              
              </div>
              </div>
            </div>
        </div>
    )
}
export default Contact;