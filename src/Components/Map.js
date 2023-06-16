import React from "react";
import { MapInteractionCSS } from 'react-map-interaction';
import map from "./assets/map.png"


const Map = () => {




    return (
        <div>
            <div>
            
            <MapInteractionCSS>
                <img src={map} />
            </MapInteractionCSS>
            </div>

        </div>
    )
}
export default Map