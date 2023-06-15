// import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Tabcard from "./Tabcard";
import Carousel from "./Carousel";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const Tabular=()=> {
  let navigate = useNavigate();
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="360px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
      <div className='btnrow' style={{display:'flex',justifyContent:'center  '}}>
                <div >
                 <Button variant="contained" onClick={()=>{
            navigate("/imageview");
          }} style={{backgroundColor:'#252525',borderRadius:60,position:'absolute',position:'fixed',bottom:32,zIndex:10,padding:32,right:20}}>
                360°</Button>
               
                </div>
                 <Button variant="contained"  style={{backgroundColor:'#89B8A3',borderRadius:16, paddingLeft:24,paddingRight:24}}>Browse more</Button>
                 </div>

                 


                 
                 
    </div>
  );
}

export default Tabular;
