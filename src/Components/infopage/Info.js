import React from 'react';
import './Info.css';
import Alert from './Alertmsg'

// import Colors from './Colors'
import DetailsThumb from './DetailsThumb';
import Tabular from './Tabular';
import Chip from '@mui/material/Chip';
import Woodie from '../assets/woodie.png'




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
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
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
              
              <div className={'titleheader'} style={{position:'sticky', top:0,backgroundColor:'white',width:"100%",borderRadius:20,zIndex:8}}>
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
              

                 
                 <span>{item.location}</span>

                 <div className={'infobox'} style={{marginTop:32}}>

                <div className={'infocard'} style={{borderRadius:12,display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
                   <Chip label="Common Name" variant="contained" style={{fontSize:12,backgroundColor:'#fffff',color:'#252525',position:'relative',top:-10}}/>
                   <p style={{fontSize:16,fontWeight:500,color:'#656565',paddingBottom:10}}>{item['common name']}</p>
                </div>
                 
                 
                 <div className={'infocard'} style={{borderRadius:12,display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column',marginTop:32}}>
                    <Chip label="Tamil Name" style={{fontSize:12,backgroundColor:'#fffff',color:'#252525',position:'relative',top:-10}}/>
                    <p style={{fontSize:16,fontWeight:500,color:'#656565'}}> {item['tamil name']}</p>
                 </div>
 
                 <div className={'infocard'} style={{borderRadius:12,display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column',marginTop:32}}>
                    <Chip label="Scientific Name" variant="contained" style={{fontSize:12,backgroundColor:'#fffff',color:'#252525',position:'relative',top:-10}}/>
                    <p style={{fontSize:16,fontWeight:500,color:'#656565'}}> {item['scientific name']}</p>
                 </div>

                 <div className={'infocard'} style={{borderRadius:12,display:'flex',alignItems:'center', justifyContent:'center',flexDirection:'column',marginTop:32}}>
                    <Chip label="Family" variant="contained"style={{fontSize:12,backgroundColor:'#fffff',color:'#252525',position:'relative',top:-10}}/>
                    <p style={{fontSize:16,fontWeight:500,color:'#656565'}}> {item['family']}</p>
                 </div>

                 </div>

                 <p style={{fontSize:16,fontWeight:500, }}>Description</p>
                
                 <p style={{color:'#656565'}}>{item.description}</p>

                 <p style={{fontSize:16,fontWeight:500, }}>Uses</p>

                
                 <p style={{color:'#656565'}}>{item.uses}</p>
                
                
                
                
                
                

              </div>
              
             
            </div>
            
            
          ) )
          
        }
      
                <p style={{fontSize:18,fontWeight:600,marginLeft:20}}>Classification</p>
                <p style={{ fontSize:16,fontWeight:400,marginLeft:20,marginRight:20,color:'#656565'}}> Linnaeus' hierarchical system of classification includes seven levels. They are, from largest to smallest</p>
                 <Tabular/>
                 
      </div>
    );
  };
}

export default Info;