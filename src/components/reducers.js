import { combineReducers } from "redux";
import { CHANGE_INPUT, CHANGE_CITY, CHANGE_COUNTRY, CHANGE_STATE, CHANGE_LAT, CHANGE_LON, INITIALIZE_CITY, REQEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED, RECEIVE_DATA_RETURN, SELECT_CITY, CHANGE_DAILY, CHANGE_HOURLY, CHANGE_TODAY} from "./actions";

const initialState = {
    city:{
        name:"",
        lat:52.519334503212846,
        lon:13.415270749959939,
        country:"",
        state:"",
    },
    list:{
        isFetching:false,
        notFind:false,
        listArray:[],
        idx:""
    },
    input:{
        inputName:"",
    },
    dailyWeather:{
        dailyArray:[],
    },
    hourlyWeather:{
        hourlyArray:[]
    },
    todayWeather:{
        todayArray:"",
    }

}

const inputReducer = (state = initialState.input, action) => {
    switch(action.type){
        case CHANGE_INPUT:
            return {
                ...state,
                inputName:action.input
            }
        default:
                return state
    }
}

const cityReducer = (state = initialState.city, action) => {
    switch(action.type){
        case CHANGE_CITY:
            return {
                ...state,
                name:action.city
            }
        case CHANGE_COUNTRY:
            return {
                ...state,
                country:action.country
            }
        case CHANGE_STATE:
            return {
                ...state,
                state:action.state
            }
        case CHANGE_LAT:
            return {
                ...state,
                lat:action.lat
            }
        case CHANGE_LON:
            return {
                ...state,
                lon:action.lon
            }
        case INITIALIZE_CITY:
            return initialState.city
        default:
            return state
    }
}


const listReducer = (state =initialState.list, action) => {
   switch (action.type){
       case REQEST_DATA:
           return{
               ...state,
               isFetching:true
           }
        case RECEIVE_DATA_SUCCESS:
            return{
                ...state,
                listArray:action.listArray,
                notFind:false,
            }
        case RECEIVE_DATA_FAILED:
            return{
                ...state,
                isFetching:false,
                notFind:true,
            }
        case RECEIVE_DATA_RETURN:
            return {
                ...state,
                isFetching:false
            }
        case SELECT_CITY:
            return{
                ...state,
                idex:action.idx
            }
      
       default:
           return state
   }
}


const dailyReducer = (state = initialState.dailyWeather, action ) => {
        switch(action.type){
            case CHANGE_DAILY:
                return {
                    ...state,
                    dailyArray:action.dailyArray
                }
            default:
                 return state
        }
}

const hourlyReducer = (state = initialState.hourlyWeather, action ) => {
        switch(action.type){
            case CHANGE_HOURLY:
                return {
                    ...state,
                    hourlyArray:action.hourlyArray
                }
            default:
                 return state
        }
}

const todayReducer = (state = initialState.todayWeather, action) => {
    switch(action.type){
        case CHANGE_TODAY:
            return {
                ...state,
                todayArray:action.todayArray
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cityReducer,
    listReducer,
    inputReducer,
    dailyReducer,
    hourlyReducer,
    todayReducer,
})

export default rootReducer