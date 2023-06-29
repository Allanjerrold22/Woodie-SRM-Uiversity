import React from "react";
import Coverimage from './assets/feedback.png'
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Downarrow from "../assets/down-arrow.svg";


const Feedbacks=()=>{

    const [scrollTop, setScrollTop] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 760,
            behavior: "smooth",
        });
    };

    return(
        <div>
            <Typography style={{fontWeight:500,paddingTop:20}}
                variant="h6"
                align="center"
                color="#252525"
                
                >
                Woodie
            </Typography>  
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:32}}>

            
            <div className="feedback-container" style={{width:'90%',height:600,backgroundColor:'#ADC1B5',borderRadius:32,display:'flex',justifyContent:'center',alignItems:'center'}}>

                <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'row'}}>

                 <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'left',flexDirection:'column'}}>   
                   
                   <p style={{fontSize:54,margin:0,fontWeight:600,color:'#252525'}}>Feedbacks</p>
                   <p style={{fontSize:16,margin:0,fontWeight:400,color:'#656565',marginTop:32}}>You can view the feedbacks you get from the <br/>users of Woodie here</p>
                   <p style={{fontSize:16,margin:0,fontWeight:400,color:'#656565',marginTop:32}}>Scroll down to view or edit the feedbacks</p>

                 </div>    

                

                <img src={Coverimage} style={{width:500,height:500,objectFit:'contain'}}/>




                </div>

                
                

            </div>

            </div>

            <p>hi</p>

        </div>
    )
}
export default Feedbacks;