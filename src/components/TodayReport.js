import React, {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { changeToday } from "./actions";

let key = process.env.REACT_APP_API_KEY;
let current_report_url;
let todaytData;
let localtime


const get_local_day_hour = (unix_timestamp, localtime)=>{
    let date = new Date((unix_timestamp + localtime) * 1000);
    let newhour = date.toGMTString().substr(17, 5)
    return newhour
}

const getCurrentData = () => {
    axios.get(current_report_url)
    .then(response => {
        localtime = response.data.timezone
        todaytData = response.data
    })
    .catch(err =>{
        console.log(err)
    })
}

const TodayReport = () => {
    const lat = useSelector(state => state.cityReducer.lat);
    const lon = useSelector(state => state.cityReducer.lon);
    const today_report = useSelector(state => state.todayReducer.todayArray);
    const additional_data = useSelector(state => state.dailyReducer.dailyArray)
    current_report_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`

    console.log(additional_data)

    useEffect(()=>{
        getCurrentData()
    }, [current_report_url])

    const dispatch = useDispatch();
    dispatch(changeToday(todaytData))

    console.log(today_report)
    
    return(
        <div>
            {today_report?
            <div>
              <h2>Today Weather</h2>
              <p>{get_local_day_hour(today_report.dt, localtime)}</p>
              <p>{today_report.weather[0].main} / {today_report.weather[0].description}</p>
              <p>{ Math.floor(today_report.main.temp)}°</p>
            </div>
            :
            <></>
            }       
        </div>
    )
}


export default TodayReport;