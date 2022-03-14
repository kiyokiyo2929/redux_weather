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

    if(local_Time){
        current_time = utc.toLocaleString('en-GB', { timeZone: local_Time });
    }


    return(
        <div>
            {today_report?
            <div id="today-information-wrapper">
              <div id="today-weather-left">
                {stateName !== ""?
                <div>
                    <div id="cityname-wrapper">
                         <h3>{cityName}</h3>
                    </div>
                    <p>{stateName} / {countryName}</p>
                </div>
                :
                <div>
                    <h3>{cityName}</h3>
                    <p>{countryName}</p>
                </div>
                }
                <p className="today-sunrise-sunset-current">{current_time}</p>
                <p className="today-sunrise-sunset-current">Sunrise {get_local_day_hour(additional_today_report.sunrise, today_report.timezone)}</p>
                <p className="today-sunrise-sunset-current">Sunset {get_local_day_hour(additional_today_report.sunset, today_report.timezone)}</p>
              </div>
              <div id="today-weather-right">
                <img src={`${process.env.PUBLIC_URL}/${today_report.weather[0].main}.svg`} id="today-report-icon"/> 
                <p className="today-weather-tmp-feel">{today_report.weather[0].main} / {today_report.weather[0].description}</p>
                <p className="today-weather-tmp-feel">{ Math.floor(today_report.main.temp)}° / feels {Math.floor(today_report.main.feels_like)}°</p>
              </div>
            </div>
            :
            <></>
            }       
        </div>
    )
}


export default TodayReport;