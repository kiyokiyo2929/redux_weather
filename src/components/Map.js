import React from "react";
import { useSelector } from "react-redux";
import ReactMapGl, {Marker}  from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import {Room} from '@material-ui/icons'


const token = process.env.REACT_APP_MAP_KEY;

const Map = () => {
    const lat = useSelector(state => state.cityReducer.lat);
    const lon = useSelector(state => state.cityReducer.lon);

    const viewport = {
      width: '43.5vw',
      height:'35vh',
      latitude:lat,
      longitude:lon, 
      zoom:5
    }
    
    return (
        <div id="map-part">
          <ReactMapGl
                    {...viewport}
                    mapboxApiAccessToken={token} 
          >
             <Marker 
               key = {lat}
               latitude={lat}
               longitude={lon}
               offsetLeft={-15} 
               offsetTop={-35}
           > 
            <p><Room style={{fontSize:viewport.zoom*5, color:'black'}}/></p></Marker>
            </ReactMapGl>
        </div>
    )
}

export default Map;