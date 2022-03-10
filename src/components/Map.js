import React from "react";
import { useSelector } from "react-redux";
import ReactMapGl, {Marker, Popup} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import {changeMap} from "./actions"



const Map = () => {
    const lat = useSelector(state => state.cityReducer.lat);
    const lon = useSelector(state => state.cityReducer.lon);


    return (
        <div>
          <p>{lat}</p>
          <p>{lon}</p>
        </div>
    )
}


export default Map;