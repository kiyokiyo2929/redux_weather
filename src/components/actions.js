export const CHANGE_CITY = "CHANGE_CITY";
export const CHANGE_COUNTRY = "CHANGE_COUNTRY";
export const CHANGE_STATE = "CHANGE_STATE";
export const CHANGE_LAT = "CHANGE_LAT";
export const CHANGE_LON = "CHANGE_LON"
export const INITIALIZE_CITY = "INITIALIZE_CITY";
export const REQEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA_SUCCESS = "RECEIVE_DATA_SUCCESS";
export const RECEIVE_DATA_FAILED = "RECEIVE_DATA_FAILED";
export const RECEIVE_DATA_RETURN = "RECEIVE_DATA_RETURN"
export const SELECT_CITY = "SELECT_CITY";
export const CHANGE_INPUT = "CHANGE_INPUT";
export const CHANGE_DAILY = "CHANGE_DAILY";
export const CHANGE_HOURLY = "CHANGE_HOURLY";
export const CHANGE_TODAY = "CHANGE_TODAY";
export const CHANGE_ADDITIONAL = "CHANGE_ADDITIONAL";
export const CHANGE_LOCALTIME = "CHANGE_LOCALTIME";


export const changeInput = (input) => ({
    type:CHANGE_INPUT,
    input
})

export const changeCity = (city) =>({
    type:CHANGE_CITY,
    city
})
export const changeCountry = (country) =>({
    type:CHANGE_COUNTRY,
    country
})
export const changeState = (state) =>({
    type:CHANGE_STATE,
    state
})

export const changeLat = (lat) =>({
    type:CHANGE_LAT,
    lat
})

export const changeLon = (lon) => ({
    type:CHANGE_LON,
    lon
})

export const initializeCity = () => ({
    type:INITIALIZE_CITY
})

export const requestData = () => ({
    type:REQEST_DATA
})

export const receiveDataSuccess = (listArray) =>({
    type:RECEIVE_DATA_SUCCESS,
    listArray
})

export const receiveDataFailed = () => ({
    type:RECEIVE_DATA_FAILED
})

export const receiveDataReturn = () => ({
    type:RECEIVE_DATA_RETURN
})

export const selectCity = (idx) => ({
    type:SELECT_CITY,
    idx
})

export const changeDaily = (dailyArray) => ({
    type:CHANGE_DAILY,
    dailyArray
})

export const changeHourly = (hourlyArray) => ({
    type:CHANGE_HOURLY,
    hourlyArray
})

export const changeToday = (todayData) => ({
    type:CHANGE_TODAY,
    todayData
})

export const changeAdditional = (addtionalData) => ({
    type:CHANGE_ADDITIONAL,
    addtionalData
})

export const changeLocalTime = (localTime) => ({
    type:CHANGE_LOCALTIME,
    localTime
})

