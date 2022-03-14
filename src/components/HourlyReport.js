import React, {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const get_local_day_hour = (unix_timestamp, localtime)=>{
    let date = new Date((unix_timestamp + localtime) * 1000);
    let newhour = date.toGMTString().substr(17, 5)
    return newhour
}

const HourlyReports = () => {
    const hourly_report = useSelector(state => state.hourlyReducer.hourlyArray);
    const date = new Date()
    const today = date.toGMTString().substr(4, 7)
    const today_data = useSelector(state => state.todayReducer.todayData)
    let localtime = today_data.timezone;

    return (
        <div>
            
            {hourly_report?
            <div>
                <ul id="hourly-report-wrapper">
                    {hourly_report.map((report, idx) => (
                        <li key={idx}>
                            <h4>{get_local_day_hour(report.dt, localtime )}</h4>
                            <img src={`${process.env.PUBLIC_URL}/${report.weather[0].main}.svg`} id="hourly-report-icon"/> 
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