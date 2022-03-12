import React from "react";
import { useSelector } from "react-redux";
import ReactMapGl from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const token = process.env.REACT_APP_MAP_KEY;

const Map = () => {
    const lat = useSelector(state => state.cityReducer.lat);
    const lon = useSelector(state => state.cityReducer.lon);

    const viewport = {
      width: '42.5vw',
      height:'25vh',
      latitude:lat,
      longitude:lon, 
      zoom:5
    }
    
    return (
        <div>
          <ReactMapGl
                    {...viewport}
                    mapboxApiAccessToken={token} 
          ></ReactMapGl>
        </div>
    )
}

export default Map;