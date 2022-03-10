import React, {useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import { changeDaily} from "./actions";

let key = process.env.REACT_APP_API_KEY;
let daily_report_url;
let dailyData;
let localtime;
let additionalData_today;

const get_local_day_hour = (unix_timestamp, localtime)=>{
    let date = new Date((unix_timestamp + localtime) * 1000);
    let newhour = date.toGMTString().substr(17, 5)
    return newhour
}

const get_local_day = (unix_timestamp, localtime)=>{
    let date = new Date((unix_timestamp + localtime) * 1000);
    let newday = date.toGMTString().substr(4, 7)
    return newday
}

const getDailyData = () => {
    axios.get(daily_report_url)
    .then(response => {
        localtime = response.data.timezone_offset;
        dailyData = response.data.daily
        console.log(dailyData)
    })
    .catch(err =>{
        console.log(err)
    })
}

const DailyReports = () => {
    const lat = useSelector(state => state.cityReducer.lat);
    const lon = useSelector(state => state.cityReducer.lon);
    const daily_report = useSelector(state => state.dailyReducer.dailyArray);
    daily_report_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${key}`;


    useEffect(()=>{
        getDailyData()
    }, [daily_report_url])

    const dispatch = useDispatch();
    dispatch(changeDaily(dailyData))
    console.log(daily_report)


    return (
        <div>
          
          {daily_report?
          <div>
            <h2>Daily Report</h2>
            <ul>
                {daily_report.map(report =>(
                    <li key={report.sunrise}>
                        <h4>{get_local_day(report.dt, localtime)}</h4>
                        <p>{report.weather[0].main} /Max { Math.floor(report.temp.max)}° / Min  { Math.floor(report.temp.min)}°</p>
                        <p>Sunrise{get_local_day_hour(report.sunrise, localtime)}</p>
                        <p>Sunset{get_local_day_hour(report.sunset, localtime)}</p>
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

export default DailyReports