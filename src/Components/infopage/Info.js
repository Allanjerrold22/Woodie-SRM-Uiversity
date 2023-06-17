import React from 'react';
import './Info.css';
import Alert from './Alertmsg'
import Speech from 'react-speech';
import TextToSpeech from './TextToSpeech';
import Marquee from "react-fast-marquee";
import Classification from './Classification';
import { Button } from "@mui/material";


// import Colors from './Colors'
import DetailsThumb from './DetailsThumb';
import Tabular from './Tabular';
import Chip from '@mui/material/Chip';
import Woodie from '../assets/woodie.png'
import Banner1 from '../assets/banner1.png';
import Banner2 from '../assets/banner2.png';
import Banner3 from '../assets/banner3.png';
import Banner4 from '../assets/banner4.png';
import Locationicon from '../assets/location.svg';





import Fab from '@mui/material/Fab';
import { v4 as uuidv4 } from "uuid";
import { Navigate, useNavigate } from 'react-router-dom';
// import Card from "../Card";
// import Carousel from "./Carousel";




class Info extends React.Component{
  

  
  

  state = {
    
    products: [
      {
        "_id": "1",
        "title": "PELTOPHORUM TREE",
        "src": [
            "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
            "https://images.unsplash.com/photo-1437964706703-40b90bdf563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
            "https://images.unsplash.com/photo-1429704658776-3d38c9990511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1679&q=80"
          ],
          "common name": "Yellow Flame",
          "tamil name":"Perunkondrai",
          "scientific name":"Peltophorum pterocarpum",
          "family":"Fabaceae",
          "description": "Peltophorum pterocarpum is used for fodder. The bark can also be used as dyes as it contains tannins, giving a light yellow colour to leather. Tannin is also present in leaves and wood. In Java, the dye is used for batik work.",
          "uses": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "location": "near University building",
        
        // "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };
  

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    
    const {products, index} = this.state;
    return(

      
      <div className="app" 
      >
        
       
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              
              <div className={'titleheader'} style={{position:'sticky', top:0,width:"100%",zIndex:8}}>
                <div style={{display:'flex',flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <img src={Woodie} style={{height:55,width:55,paddingRight:20}}/>
                <h3 style={{textAlign:'center'}}>{item.title}</h3>
                
              </div>
              <Alert/>
              
              </div>
              <div className="big-img">
                
              
                <img src={item.src[index]} alt=""/>
                
              </div>
              
              <div>
              <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef}/>
              
              </div>
              

              <div className="box">
                
                  
                  
                
                {/* <Colors colors={item.colors} /> */}
              

                 <div style={{display:'flex',alignItems:'center',justifyContent:'left',marginLeft:16}} >
                  <img src={Locationicon} style={{width:32,height:32}}/>
                 <p style={{fontSize:14,color:'#656565'}}>{item.location}</p>
                 </div>

                 <div className={'infobox'} style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap'}}>

                {/* <div className={'infocard'} style={{borderRadius:12,alignItems:'center', justifyContent:'space-between',height:300,display:'flex',width:260,marginLeft:20,marginRight:20}}>

                

                  <img src={Banner1}style={{width:150,height:100,objectFit:'cover',borderTopLeftRadius:12,borderBottomLeftRadius:12}}/>
                  <Chip label="Common Name" variant="contained" style={{fontSize:12,backgroundColor:'#fffff',color:'#252525',position:'relative',left:50,top:-48}}/> 
                   <p style={{fontSize:16,fontWeight:500,color:'#656565',textAlign:'center',position:'relative',left:0,top:-48}}>{item['common name']}</p>
                </div> */}
                 
                 
                 <div className={'infocard'} style={{borderRadius:12, justifyContent:'center',marginTop:32,height:200,width:160}}>
                 <img src={Banner1}style={{width:160,height:100,objectFit:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>
                 <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Chip label="Common Name" style={{fontSize:12,backgroundColor:'#EEEE',color:'#252525',position:'relative',top:-20}}/>
                  </div>
                  <p style={{fontSize:16,fontWeight:500,color:'#656565',textAlign:'center',position:'relative',top:-20}}> {item['common name']}</p>
                 </div>

                 <div className={'infocard'} style={{borderRadius:12, justifyContent:'center',marginTop:32,height:200,width:160}}>
                 <img src={Banner2}style={{width:160,height:100,objectFit:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>
                 <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Chip label="Tamil Name" style={{fontSize:12,backgroundColor:'#EEEE',color:'#252525',position:'relative',top:-20}}/>
                  </div>
                  <p style={{fontSize:16,fontWeight:500,color:'#656565',textAlign:'center',position:'relative',top:-20}}> {item['tamil name']}</p>
                 </div>

                 <div className={'infocard'} style={{borderRadius:12, justifyContent:'center',marginTop:32,height:200,width:160}}>
                 <img src={Banner3}style={{width:160,height:100,objectFit:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>
                 <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Chip label="Scientific Name" style={{fontSize:12,backgroundColor:'#EEEE',color:'#252525',position:'relative',top:-20}}/>
                  </div>
                  <p style={{fontSize:16,fontWeight:500,color:'#656565',textAlign:'center',position:'relative',top:-20}}> {item['scientific name']}</p>
                 </div>

                 <div className={'infocard'} style={{borderRadius:12, justifyContent:'center',marginTop:32,height:200,width:160}}>
                 <img src={Banner4}style={{width:160,height:100,objectFit:'cover',borderTopLeftRadius:12,borderTopRightRadius:12}}/>
                 <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Chip label="Family" style={{fontSize:12,backgroundColor:'#EEEE',color:'#252525',position:'relative',top:-20}}/>
                  </div>
                  <p style={{fontSize:16,fontWeight:500,color:'#656565',textAlign:'center',position:'relative',top:-20}}> {item['family']}</p>
                 </div>
 
                 {/* <div className={'infocard'} style={{borderRadius:12,display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column',marginTop:32}}>
                    <Chip label="Scientific Name" variant="contained" style={{fontSize:12,backgroundColor:'#fffff',color:'#252525',position:'relative',top:-10}}/>
                    <p style={{fontSize:16,fontWeight:500,color:'#656565'}}> {item['scientific name']}</p>
                 </div>

                 <div className={'infocard'} style={{borderRadius:12,display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column',marginTop:32}}>
                    <Chip label="Family" variant="contained"style={{fontSize:12,backgroundColor:'#fffff',color:'#252525',position:'relative',top:-10}}/>
                    <p style={{fontSize:16,fontWeight:500,color:'#656565'}}> {item['family']}</p>
                 </div> */}


                 </div>

                 

                
                 {/* <div style={{height:50,width:100,backgroundColor:'#252525'}}>
            <Speech 
                    //  styles={{}}
                    
                    textAsButton={true} 
                    displayText="Hello" 
                     text={item.description} 
                     pause={true} 
                     resume={true} 
                      voice="Google UK English Female"
                     />
            </div> */}

            
                 <div style={{marginRight:16,marginLeft:16,marginTop:32}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}> 
     
                    <p style={{fontSize:16,fontWeight:500,justifyItems:'center' }}>Description</p>
              
                    <TextToSpeech text={item.description}/>
                    </div>
                    <p style={{color:'#656565'}}>{item.description}</p>
                    <p style={{fontSize:16,fontWeight:500, }}>Uses</p>
                    <p style={{color:'#656565'}}>{item.uses}</p>
                 </div>
              </div>
            </div>
          ) )
          
        }
      
                <p style={{fontSize:18,fontWeight:600,marginLeft:20}}>Classification</p>
                <p style={{ fontSize:16,fontWeight:400,marginLeft:20,marginRight:20,color:'#656565'}}> Linnaeus' hierarchical system of classification includes seven levels. They are, from largest to smallest</p>

                {/* <Tabular/> */}
                <Marquee direction ="right" pauseOnClick= "True" style={{width:'100%',display:'flex',justifyContent:'space-evenly'}}>

                <Classification title='Kingdom' class='Plantae'/>
                <Classification title='Phylum' class='Tracheophytes'/>
                <Classification title='Class' class='Tracheophytes'/>
                <Classification title='Order' class='Tracheophytes'/>
                <Classification title='Family' class='Tracheophytes'/>
                <Classification title='Genus' class='Tracheophytes'/>
                <Classification title='Species' class='Tracheophytes'/>
               </Marquee>

               <Tabular/>
      </div>
    );
  };
  
  
  
}






export default Info;