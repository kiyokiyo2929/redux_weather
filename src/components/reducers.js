import { combineReducers } from "redux";
import { CHANGE_INPUT, NOT_FIND, CHANGE_CITY, CHANGE_LAT, CHANGE_LON, INITIALIZE_CITY, REQEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED, RECEIVE_DATA_RETURN, SELECT_CITY } from "./actions";

const initialState = {
    city:{
        name:"",
        lat:"",
        lon:"",
    },
    list:{
        isFetching:false,
        notFind:false,
        listArray:[],
        idx:""
    },
    input:{
        inputName:"",
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

const rootReducer = combineReducers({
    cityReducer,
    listReducer,
    inputReducer
})

export default rootReducer