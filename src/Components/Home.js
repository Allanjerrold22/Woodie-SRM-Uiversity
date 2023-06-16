import React from "react";
// import { Butterfly } from "../Components/Canvas/Butterfly";
import { Butterflybg } from "./Canvas";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Button } from "@mui/material";
import tree from "./assets/treebg.jpg";
import Woodie from '../Components/assets/woodie.png'
import Card from './Card';
import Responsive from './Responsivecard';
import { useMediaQuery } from 'react-responsive'
import Responsivecard from "./Responsivecard";
import { DeviceSize } from "../Responsive/index";
import arrow from "./assets/arrow.svg"
import { useState } from "react";





const Home = () => {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const isDesktop = useMediaQuery({ maxWidth: DeviceSize.desktop });

    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const [stackIndex, setStackIndex] = useState(0)

    return (

        <div >
            <Butterflybg />



            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 20, flexWrap: 'wrap' }}>
                <Button onClick={() => setStackIndex(0)} variant={stackIndex === 0 ? "contained" : "outlined"} style={stackIndex === 0 ? styles.selected : styles.unSelected}>Trees</Button>
                <Button onClick={() => setStackIndex(1)} variant={stackIndex === 1 ? "contained" : "outlined"} style={stackIndex === 1 ? styles.selected : styles.unSelected}>Plams</Button>
                <Button onClick={() => setStackIndex(2)} variant={stackIndex === 2 ? "contained" : "outlined"} style={stackIndex === 2 ? styles.selected : styles.unSelected}>Climbers</Button>
                <Button onClick={() => setStackIndex(3)} variant={stackIndex === 3 ? "contained" : "outlined"} style={stackIndex === 3 ? styles.selected : styles.unSelected}>Creepers</Button>
                <Button onClick={() => setStackIndex(4)} variant={stackIndex === 4 ? "contained" : "outlined"} style={stackIndex === 4 ? styles.selected : styles.unSelected}>Flowering Shrubs</Button>
                <Button onClick={() => setStackIndex(5)} variant={stackIndex === 5 ? "contained" : "outlined"} style={stackIndex === 5 ? styles.selected : styles.unSelected}>Foliage Shrubs</Button>
                <Button onClick={() => setStackIndex(6)} variant={stackIndex === 6 ? "contained" : "outlined"} style={stackIndex === 6 ? styles.selected : styles.unSelected}>Medicinal plants</Button>
                <Button onClick={() => setStackIndex(7)} variant={stackIndex === 7 ? "contained" : "outlined"} style={stackIndex === 7 ? styles.selected : styles.unSelected}>Indoor plants</Button>
            </div>


            <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', marginTop: 32, }}>
                <Pagination
                    count={alphabet.length}
                    variant="outlined"
                    renderItem={(item) => (
                        <PaginationItem {...item} page={alphabet[item.page - 1]} />
                    )}
                />
            </div>

            <div className="card-container" style={{ display: 'flex', flexDirection: 'row', marginTop: 32, justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>


                {isMobile && <Responsivecard />}
                {isMobile && <Responsivecard />}
                {isMobile && <Responsivecard />}
                {isMobile && <Responsivecard />}



                {!isDesktop && <Card />}
                {!isDesktop && <Card />}
                {!isDesktop && <Card />}
                {!isDesktop && <Card />}



            </div>


            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 32 }} >
                <Button variant="contained" style={{ backgroundColor: '#252525', borderRadius: 20 }} >
                    View more
                    <img src={arrow} style={{ height: 24, width: 24 }} />

                </Button>
            </div>











        </div>
    )





}




const styles = {
    selected: {
        borderRadius: 20, 
        backgroundColor: '#252525', 
        marginLeft: 20, 
        marginTop: 20
    },
    unSelected:{
        borderRadius: 20, 
        borderColor: '#767676', 
        color: '#767676', 
        marginLeft: 20, 
        marginTop: 20
    }
};




export default Home;