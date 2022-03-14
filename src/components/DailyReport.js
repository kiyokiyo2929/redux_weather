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
            <ul id="daily-report-wrapper">
                {daily_report.map((report, idx) =>(
                    <li key={idx}>
                        <h4>{get_local_day(report.dt, localtime)}</h4>
                        <img src={`${process.env.PUBLIC_URL}/${report.weather[0].main}.svg`} id="daily-report-icon"/> 
                        <p className="daily-weather-tmp">{report.weather[0].main}</p>
                        <p className="daily-weather-tmp">Max { Math.floor(report.temp.max)}° / Min  { Math.floor(report.temp.min)}°</p>
                        <p className="daily-sunrise-sunset">Sunrise {get_local_day_hour(report.sunrise, localtime)} </p>
                        <p className="daily-sunrise-sunset">Sunset {get_local_day_hour(report.sunset, localtime)}</p>
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