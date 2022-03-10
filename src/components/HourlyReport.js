import React, {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { changeHourly} from "./actions";

let key = process.env.REACT_APP_API_KEY;
let hourly_report_url;
let hourlyData;
let localtime;


const get_local_day_hour = (unix_timestamp, localtime)=>{
    let date = new Date((unix_timestamp + localtime) * 1000);
    let newhour = date.toGMTString().substr(17, 5)
    return newhour
}


// const get_local_day = (unix_timestamp, localtime)=>{
//     let date = new Date((unix_timestamp + localtime) * 1000);
//     let newday = date.toGMTString().substr(4, 7)
//     return newday
// }

  


const getHourlyData = () => {
    
    axios.get(hourly_report_url)
    .then(response => {
        console.log(response.data)
        localtime = response.data.timezone_offset;
        hourlyData = response.data.hourly.slice(0, 23);
        console.log(hourlyData)
     
    })
    .catch(err => {
        console.log(err)
    })
}

const HourlyReports = () => {
    const lat = useSelector(state => state.cityReducer.lat);
    const lon = useSelector(state => state.cityReducer.lon);
    const hourly_report = useSelector(state => state.hourlyReducer.hourlyArray);
    const date = new Date()
    const today = date.toGMTString().substr(4, 7)
    console.log(today)
    hourly_report_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely&units=metric&appid=${key}`

    useEffect(()=>{
        getHourlyData()
    }, [hourly_report_url])

    const dispatch = useDispatch();
    dispatch(changeHourly(hourlyData))

    return (
        <div>
            
            {hourly_report?
            <div>
                <h2>Hourly Report</h2>
                <h3>{today}</h3>
                <ul>
                    {hourly_report.map((report, idx) => (
                        <li key={idx}>
                            <h4>{get_local_day_hour(report.dt, localtime )}</h4>
                            <p>{report.weather[0].main} / { Math.floor(report.temp)}°</p>
                        </li>
                    ))}

                </ul>
            </div>
            :
            <></>
            }
        </div>
    )
}

export default HourlyReports;