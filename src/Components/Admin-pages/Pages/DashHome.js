import React from "react";
import Woodie from '../assets/woodie.png'
import Tree from '../assets/tree-icon.svg'
import QR from '../assets/QR.svg'
import Palm from '../assets/3Dtree.png'
import Heart from '../assets/heart.svg'
import CountUp from 'react-countup';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TreeTable from "./TreeTable";
import QRgenerator from "../QRgenerator";
import { auth, db } from "../../../FirebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";



const DashHome = () => {


  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  const [treeList, setTreeList] = React.useState([])
  const [commentList, setCommentList] = React.useState([])

  async function fetchTrees() {
    let temp = []
    const querySnapshot = await getDocs(collection(db, "trees"));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    setTreeList(temp)
  }

  async function fetchComments() {
    console.log("Started Fetching trees")
    let temp = []
    const querySnapshot = await getDocs(collection(db, "feedbacks"));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    setCommentList(temp)
  }

  React.useEffect(()=>{
    fetchComments()
    fetchTrees()
  },[])

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };


  if (isMobile) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontSize: 20, fontWeight: 600, color: '#65656565', textAlign: 'center', margin: 32 }}>
          Sorry, this page is only available on desktop devices and be accessible only by the department.</p></div>)
  }

  return (

    <div style={{
      width: "100%", height: '780px',
      backgroundImage: "url(/forest.jpg)",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }} >

      <div className="contentContainer" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 60 }}>

        <div className="titleBox" style={{ display: 'flex', justifyContent: 'center', alignItems: 'left', flexDirection: 'column' }}>
          <div style={{ marginBottom: 50 }}>



            <p style={{ fontSize: 18, fontWeight: 400, color: '#fff', textAlign: 'left', margin: 0 }}>Welcome admin</p>
            <p style={{ fontSize: 42, fontWeight: 800, color: '#fff', textAlign: 'left', margin: 0, lineHeight: 1, marginTop: 16 }}>Have a track of <br />the Floras</p>
            <p style={{ fontSize: 14, fontWeight: 400, color: '#fff', textAlign: 'left', margin: 0, marginTop: 16 }}>As a admin you can add or edit or <br />remove the content of woodie</p>
          </div>
        </div>

        <div className="DashCards" style={{ width: 600, height: 720 }}>

          <div className="box1" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', height: 720 }}>

            <div className="UploadBox" style={{ width: 550, height: 280, borderRadius: 32 }}>
              <div style={{
                width: "100%", height: '100%',
                backgroundImage: "url(/IMG_8092.JPG)",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat', borderRadius: 32
              }}>

                <img src={Woodie} style={{ width: 72, height: 72, position: 'relative', top: 20, left: 20 }} />
                <div style={{ position: 'relative' }}>
                  <img src={Tree} style={{ width: 100, height: 100, position: 'absolute', top: 0, left: 140 }} />

                </div>


                <div style={{ position: 'relative', top: -52, left: 330, width: 200 }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'right', flexDirection: 'column' }}>
                    <p style={{ margin: 0, fontSize: 16, color: '#fff', fontWeight: 400, textAlign: 'left' }}>Total datas uploaded</p>
                    <CountUp end={treeList.length} enableScrollSpy duration={5} style={{ fontSize: 46, fontWeight: 500, fontWeight: 800, color: '#fff', margin: 0 }} />
                    <button style={{ width: 120, height: 45, fontSize: 18, fontWeight: 500, backgroundColor: '#252525', color: '#fff', borderRadius: 12, marginTop: 16 }}> Upload </button>
                  </div>

                </div>

                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', marginBottom: 20 }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: 400 }}>
                    <Chip label="Today" variant="outlined" onClick={handleClick} style={{ borderColor: '#ffff', color: '#fff', textAlign: 'center' }} />
                    <Chip label="This week" variant="outlined" onClick={handleClick} style={{ borderColor: '#ffff', color: '#fff', textAlign: 'center' }} />
                    <Chip label="This month" variant="outlined" onClick={handleClick} style={{ borderColor: '#ffff', color: '#fff', textAlign: 'center', padding: 0 }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ margin: 0, fontWeight: 500, color: '#829D94' }}>6000</p>
                  </div>
                </div>


              </div>

            </div>
            <div className="small-container" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', width: 550, height: 480 }}>

              <div className="row-1" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', width: 550, height: 380, marginBottom: 70 }}>

                <div style={{ width: 260, height: 160, backgroundColor: '#F6C161', borderRadius: 20 }}>

                  <div className="" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 160 }}>
                    <img src={QR} style={{ width: 80, height: 80 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 120 }}>
                      <p style={{ margin: 0, fontSize: 16, fontWeight: 400, textAlign: 'center', lineHeight: 1.2 }}>
                        Generate QR <br />for uploaded datas
                      </p>
                      <QRgenerator />
                      {/* <button style={{width:100,height:35,fontSize:16,fontWeight:500,backgroundColor:'#252525',color:'#fff',borderRadius:8,marginTop:16}}> Generate </button> */}


                    </div>

                  </div>
                </div>
                <div style={{ width: 260, height: 160, backgroundColor: '#ABA0A4', borderRadius: 20 }}>
                  <div className="" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 160 }}>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 120 }}>
                      <p style={{ margin: 0, fontSize: 16, fontWeight: 400, textAlign: 'center', lineHeight: 1.2, color: '#fff' }}>
                        You have  <br />{commentList.length}<br />feedback
                      </p>
                      <button style={{ width: 100, height: 35, fontSize: 16, fontWeight: 500, backgroundColor: '#252525', color: '#ffff', borderRadius: 8, marginTop: 16 }}> View </button>


                    </div>
                    <img src={Heart} style={{ width: 80, height: 80 }} />

                  </div>





                </div>

              </div>

              <div className="row-2" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', width: 550, height: 380, marginBottom: 70 }}>


                <div style={{
                  width: 260, height: 340, borderRadius: 20,
                  backgroundImage: "url(/IMG_8094.JPG)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                }} >

                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

                    <p style={{ textAlign: 'left', color: '#fff', fontWeight: 600, fontSize: 20 }}>Most scanned <br />Floras</p>
                    <img src={Palm} style={{ width: 60, height: 60, objectFit: 'contain' }} />

                  </div>

                  <Divider style={{ backgroundColor: '#fff', borderWidth: 1 }} />
                  <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                      <ListItemText primary="Pheltaphorum" style={{ color: '#fff' }} />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                      <ListItemText primary="Banyan" style={{ color: '#fff' }} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Coconut" style={{ color: '#fff' }} />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText primary="Amla" style={{ color: '#fff' }} />
                    </ListItem>
                  </List>

                </div>



                {/* <div style={{width:260,height:160,backgroundColor:'lavender',borderRadius:20}}>

                        </div> */}

              </div>

            </div>

          </div>





        </div>

      </div>
      <div style={{ backgroundColor: '#EEEE' }}>

{ treeList.length !== 0 &&
        <TreeTable treeList={treeList} />
}      </div>


    </div>


  );
}
const style = {
  width: '100%',
  maxWidth: 360,

};
export default DashHome;
