import React from "react";
// import { Butterfly } from "../Components/Canvas/Butterfly";
import { Butterflybg } from "./Canvas";
import Pagination from '@mui/material/Pagination';
import { Button } from "@mui/material";
import tree from "./assets/treebg.jpg";
import Woodie from '../Components/assets/woodie.png'
import Card from './Card';
import Responsive from './Responsivecard';
import { useMediaQuery } from 'react-responsive'
import Responsivecard from "./Responsivecard";
import { DeviceSize } from "../Responsive/index";
import arrow from "./assets/arrow.svg"





const Home=()=>{
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const isDesktop = useMediaQuery({ maxWidth: DeviceSize.desktop });

    

    return(
        
        <div >
           <Butterflybg/>
           
           

           <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:20, flexWrap:'wrap'}}>
           <Button variant="contained" style={{borderRadius:20 ,backgroundColor:'#252525',marginRight:20,marginLeft:20,marginTop:20}}>Trees</Button>
           <Button variant="outlined" style={{borderRadius:20 ,borderColor:'#767676',color:'#767676',marginRight:20,marginTop:20}}>Plams</Button>
           <Button variant="outlined" style={{borderRadius:20 ,borderColor:'#767676',color:'#767676',marginRight:20,marginTop:20}}>Climbers</Button>
           <Button variant="outlined" style={{borderRadius:20 ,borderColor:'#767676',color:'#767676',marginRight:20,marginTop:20}}>Creepers</Button>
           <Button variant="outlined" style={{borderRadius:20 ,borderColor:'#767676',color:'#767676',marginRight:20,marginTop:20}}>Flowering Shrubs</Button>
           <Button variant="outlined" style={{borderRadius:20 ,borderColor:'#767676',color:'#767676',marginRight:20,marginTop:20}}>Foliage Shrubs</Button>
           <Button variant="outlined" style={{borderRadius:20 ,borderColor:'#767676',color:'#767676',marginRight:20,marginTop:20}}>Medicinal plants</Button>
           <Button variant="outlined" style={{borderRadius:20 ,borderColor:'#767676',color:'#767676',marginRight:20,marginTop:20}}>Indoor plants</Button>
           </div>

           <div style={{justifyContent:'center',display:'flex',alignItems:'center',marginTop:32,}}>
           <Pagination count={10} variant="outlined"color="primary" />
           </div>

           <div className="card-container" style={{display:'flex',flexDirection:'row',marginTop:32, justifyContent:'space-evenly', alignItems:'center',flexWrap:'wrap'}}>
             
               
           {isMobile &&  <Responsivecard/>}
           {isMobile &&  <Responsivecard/>}
           {isMobile &&  <Responsivecard/>}
           {isMobile &&  <Responsivecard/>}
          
           

           {!isDesktop &&  <Card/>}
           {!isDesktop &&  <Card/>}
           {!isDesktop &&  <Card/>}
           {!isDesktop &&  <Card/>}
           
           

           </div>


           <div style={{alignItems:'center',justifyContent:'center',display:'flex',marginTop:32}} >
           <Button variant="contained"  style={{backgroundColor:'#252525',borderRadius:20}} >
           View more
            <img src={arrow} style={{height:24,width:24}}/>
            
            </Button>
            </div>
               
          
               
              
                
                


        
        
            
        </div>
    )

    

    
    
}




// const myStyle = {
//     bg:{
//     backgroundImage: "url('treebg.jpg')",
//     display: "flex",
//     fontSize: "50px",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     justifyContent: "center",
//     alignItems: "center",
//     height:600,
//     paddingTop: 80,
//   }
// };




export default Home;