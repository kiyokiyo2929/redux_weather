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