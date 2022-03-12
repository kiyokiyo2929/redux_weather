import React, {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { changeToday, changeAdditional, changeLocaltime  } from "./actions";


const get_local_day_hour = (unix_timestamp, localtime)=>{
    let date = new Date((unix_timestamp + localtime) * 1000);
    let newhour = date.toGMTString().substr(17, 5)
    return newhour
}

const TodayReport = () => {
    const today_report = useSelector(state => state.todayReducer.todayData);
    const additional_today_report = useSelector(state => state.todayReducer.addtionalData)
    const local_Time = useSelector(state => state.todayReducer.localTime)
    let utc = new Date();
    let current_time;

    if(local_Time){
        current_time = utc.toLocaleString('en-US', { timeZone: local_Time });
    }


    return(
        <div>
            {today_report?
            <div>
              <h2>Today Weather</h2>
              <p>{current_time}</p>
              <p>{today_report.weather[0].main} / {today_report.weather[0].description}</p>
              <p>{ Math.floor(today_report.main.temp)}°</p>
              <p>Sunrise {get_local_day_hour(additional_today_report.sunrise, today_report.timezone)}</p>
              <p>Sunset {get_local_day_hour(additional_today_report.sunset, today_report.timezone)}</p>
            </div>
            :
            <></>
            }       
        </div>
    )
}


export default TodayReport;