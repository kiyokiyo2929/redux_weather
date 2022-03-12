import React from "react";
import { useSelector } from "react-redux";


const get_local_day_hour = (unix_timestamp, localtime)=>{
    let date = new Date((unix_timestamp + localtime) * 1000);
    let newhour = date.toGMTString().substr(17, 5)
    return newhour
}

const TodayReport = () => {
    const today_report = useSelector(state => state.todayReducer.todayData);
    const additional_today_report = useSelector(state => state.todayReducer.addtionalData);
    const local_Time = useSelector(state => state.todayReducer.localTime);
    const cityName = useSelector(state => state.cityReducer.name);
    const countryName = useSelector(state => state.cityReducer.country);
    const stateName = useSelector(state => state.cityReducer.state);
    let utc = new Date();
    let current_time;

    console.log(today_report)

    if(local_Time){
        current_time = utc.toLocaleString('en-GB', { timeZone: local_Time });
    }


    return(
        <div>
            {today_report?
            <div>
              <h2>Today Weather</h2>
              {stateName !== ""?
               <h3>{cityName} , {stateName} / {countryName}</h3>
              :
              <h3>{cityName} / {countryName}</h3>
              }
              <p>{current_time}</p>
              <p>{today_report.weather[0].main} / {today_report.weather[0].description}</p>
              <p>{ Math.floor(today_report.main.temp)}°</p>
              <p>feels {Math.floor(today_report.main.feels_like)}°</p>
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