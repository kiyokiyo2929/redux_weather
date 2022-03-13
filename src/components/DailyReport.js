import React, {useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";


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


const DailyReports = () => {

    const daily_report = useSelector(state => state.dailyReducer.dailyArray);
    const today_data = useSelector(state => state.todayReducer.todayData)
    let localtime = today_data.timezone;


    return (
        <div>
          
          {daily_report?
          <div>
            <h2>Daily Report</h2>
            <ul id="daily-report-wrapper">
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