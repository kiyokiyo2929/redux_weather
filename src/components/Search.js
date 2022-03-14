import React from "react";
import axios from "axios";

import { changeAdditional, changeToday, changeDaily, changeHourly, changeCity, changeCountry, changeState, requestData, receiveDataSuccess, receiveDataFailed, receiveDataReturn, changeLocalTime, selectCity, changeInput, changeLat, changeLon } from "./actions";
import { useSelector, useDispatch } from "react-redux";

let key = process.env.REACT_APP_API_KEY;

const Search = () => {
    const dispatch = useDispatch();
    const listArray = useSelector(state => state.listReducer.listArray)
    const inputName = useSelector(state => state.inputReducer.inputName);
    const isFetching = useSelector(state => state.listReducer.isFetching);
    const notFind = useSelector(state => state.listReducer.notFind)
    let geo_url=`http://api.openweathermap.org/geo/1.0/direct?q=${inputName}&limit=5&appid=${key}`

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(requestData())

        axios.get(geo_url)
        .then(response=>{
  
            let firtOne = { name: 'Please select City', selector: true,  lat: 19.7589387, lon: -19.9031635, country: '', state: ''}
            let listArray = response.data;
            listArray.unshift(firtOne)
            {(listArray.length === 1)?
            dispatch(receiveDataFailed())
            :
            dispatch(receiveDataSuccess(listArray))
            }
        })
        .catch(err=>{
            console.error(err);
            dispatch(receiveDataFailed())
        })
    }

    const select_number = (e) => {
        let selectedCity = listArray[e.target.value];
        dispatch(receiveDataReturn());
        getCity_data(selectedCity)
        getToday_data(selectedCity.lat, selectedCity.lon)
        getDaily_data(selectedCity.lat, selectedCity.lon)
        getHourly_data(selectedCity.lat, selectedCity.lon)
    }

    const getCity_data = (selectedCity) => {
        dispatch(changeCity(selectedCity.name));
        dispatch(changeCountry(selectedCity.country));
        dispatch(changeLat(selectedCity.lat));
        dispatch(changeLon(selectedCity.lon));
        (selectedCity.state)?dispatch(changeState(selectedCity.state)):dispatch(changeState(""))
    }

    const getToday_data = (lat_today, lon_today) => {
        let current_report_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat_today}&lon=${lon_today}&units=metric&appid=${key}`
        axios.get(current_report_url)
        .then(response =>{
            dispatch(changeToday(response.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const getDaily_data = (lat_daily, lon_daily) => {
        let daily_report_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat_daily}&lon=${lon_daily}&exclude=current,minutely,hourly&units=metric&appid=${key}`;
        axios.get(daily_report_url)
        .then(response => {
            let daily_data = response.data.daily
            let additioanl_today_data = daily_data.shift();
            dispatch(changeDaily(daily_data))
            dispatch(changeAdditional(additioanl_today_data))
            dispatch(changeLocalTime(response.data.timezone))
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getHourly_data = (lat_hourly, lon_hourly) => {
        let hourly_report_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat_hourly}&lon=${lon_hourly}&exclude=daily,minutely&units=metric&appid=${key}`
        axios.get(hourly_report_url)
        .then(response => {
            let hourly_data = (response.data.hourly).slice(0, 24);
            dispatch(changeHourly(hourly_data))
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
       
        <div>
            {isFetching?
             <form>
                    <select onChange={(e)=>select_number(e)}>
                            {listArray.map((listItem, idx )=>(
                                (idx == 0)?
                                <option key={listItem.lat} value={idx}>
                                {listItem.name}
                                </option>
                            :<option key={listItem.lat} value={idx}>
                                {listItem.name} / {listItem.country}  {listItem.state}
                                </option>
                            ))}
                    </select>
             </form>
            :
            <form onSubmit={e =>handleSubmit(e)} >
                    <input  onChange={e => dispatch(changeInput(e.target.value))}  type="text" id="search-input" />
                    <button type="Submit" id="search-btn">Search</button>
            </form>
            }
                      
            {notFind?
            <p>no result / {inputName}</p>
            : 
            <></>        
            }
       
        </div>
    )
}

export default Search;