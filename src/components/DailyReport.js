import React from "react";
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
        <div id="daily-report-section">
          
          {daily_report?
          <div>
            <div id="daily-report-title"><p>7 Days Weather Reports</p></div>
            <ul id="daily-report-wrapper">
                {daily_report.map((report, idx) =>(
                    <li key={idx}>
                        <div id="daily-date-part">
                           <h4>{get_local_day(report.dt, localtime)}</h4>
                        </div>
                        <div id="icon-temp-info-flex">
                            <img src={`${process.env.PUBLIC_URL}/${report.weather[0].main}.svg`} id="daily-report-icon"/> 
                            <div id="weather-tmp-part-right">
                                <p className="daily-weather-tmp">Max { Math.floor(report.temp.max)}° </p>
                                <p className="daily-weather-tmp">Min  { Math.floor(report.temp.min)}°</p>
                            </div>
                        </div>
                        <p id="daily-weather-info">{report.weather[0].main}</p>
                        <div id="daily-sunrise-sunset-part">
                            <p className="daily-sunrise-sunset">Sunrise {get_local_day_hour(report.sunrise, localtime)} </p>
                            <p className="daily-sunrise-sunset">Sunset {get_local_day_hour(report.sunset, localtime)}</p>
                        </div>
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