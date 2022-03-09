export const CHANGE_CITY = "CHANGE_CITY";
export const CHANGE_LAT = "CHANGE_LAT";
export const CHANGE_LON = "CHANGE_LON"
export const INITIALIZE_CITY = "INITIALIZE_CITY";
export const REQEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA_SUCCESS = "RECEIVE_DATA_SUCCESS";
export const RECEIVE_DATA_FAILED = "RECEIVE_DATA_FAILED";
export const RECEIVE_DATA_RETURN = "RECEIVE_DATA_RETURN"
export const SELECT_CITY = "SELECT_CITY";
export const CHANGE_INPUT = "CHANGE_INPUT";
export const NOT_FIND = "NOT_FIND"

export const changeInput = (input) => ({
    type:CHANGE_INPUT,
    input
})

export const notFind = () => ({
    type:NOT_FIND
})

export const changeCity = (city) =>({
    type:CHANGE_CITY,
    city
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