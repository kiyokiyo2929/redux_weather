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
    const notFind = useSelector(state => state.listReducer.notFind)
    const inputName = useSelector(state => state.inputReducer.inputName);

    let utc = new Date();
    let current_time;

    if(local_Time){
        let current_time_data = utc.toLocaleString('en-GB', { timeZone: local_Time });
        current_time = current_time_data.slice(0, 17)

    }


    return(
        <div>
            {notFind?
            <p>No Result / {inputName}</p>
            : 
            <div>
                {today_report?
                <div id="today-information-wrapper">
                <div id="today-weather-left">
                    {stateName !== ""?
                    <div>
                        <div id="cityname-wrapper">
                            <h3>{cityName}</h3>
                        </div>
                        <p className="country-state-name">{stateName} / {countryName}</p>
                    </div>
                    :
                    <div>
                        <h3>{cityName}</h3>
                        <p className="country-state-name">{countryName}</p>
                    </div>
                    }
                    <p className="today-sunrise-sunset-current">{current_time}</p>
                    <p className="today-sunrise-sunset-current">Sunrise <span className="font-bold">{get_local_day_hour(additional_today_report.sunrise, today_report.timezone)}</span></p>
                    <p className="today-sunrise-sunset-current">Sunset <span className="font-bold"> {get_local_day_hour(additional_today_report.sunset, today_report.timezone)}</span></p>
                </div>
                <div id="today-weather-right">
                    <img src={`${process.env.PUBLIC_URL}/${today_report.weather[0].main}.svg`} id="today-report-icon"/> 
                    <p className="today-weather-tmp-feel">{today_report.weather[0].main} / {today_report.weather[0].description}</p>
                    <p className="today-weather-tmp-feel"><span className="font-bold">{ Math.floor(today_report.main.temp)}?? </span> / feels <span className="font-bold">{Math.floor(today_report.main.feels_like)}??</span></p>
                </div>
                </div>
                :
                <></>
                }       
            </div>
            }
        </div>
    )
}


export default TodayReport;