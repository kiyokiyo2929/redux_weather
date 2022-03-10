import React from "react";
import { useSelector } from "react-redux";

const Information = () => {
    const cityName = useSelector(state => state.cityReducer.name);
    const countryName = useSelector(state => state.cityReducer.country);
    const stateName = useSelector(state => state.cityReducer.state);
    return(
        <div>
            <h2>Information</h2>
            {(cityName)?
            <p>{cityName} / {countryName} , {stateName}</p>
            :
            <></>
            }
        </div>
    )
}

export default Information