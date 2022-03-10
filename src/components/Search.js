import React from "react";
import axios from "axios";

import { changeCity, changeCountry, changeState, requestData, receiveDataSuccess, receiveDataFailed, receiveDataReturn, selectCity, changeInput, changeLat, changeLon } from "./actions";
import { useSelector, useDispatch } from "react-redux";

let key = process.env.REACT_APP_API_KEY;



const Search = () => {
    const dispatch = useDispatch();
    const listArray = useSelector(state => state.listReducer.listArray)
    const idx = useSelector(state => state.listReducer.idx)
    const name = useSelector(state => state.cityReducer.name);
    const inputName = useSelector(state => state.inputReducer.inputName);
    const isFetching = useSelector(state => state.listReducer.isFetching);
    const notFind = useSelector(state => state.listReducer.notFind)
    let geo_url=`http://api.openweathermap.org/geo/1.0/direct?q=${inputName}&limit=5&appid=${key}`
    console.log({notFind})

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
        dispatch(changeCity(selectedCity.name));
        dispatch(changeCountry(selectedCity.country));
        dispatch(changeLat(selectedCity.lat));
        dispatch(changeLon(selectedCity.lon));
        (selectedCity.state)?dispatch(changeState(selectedCity.state)):dispatch(changeState(""))

        console.log(selectedCity)
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
            <form onSubmit={e =>handleSubmit(e)}>
                    <label>
                         City:
                        <input  onChange={e => dispatch(changeInput(e.target.value))}/>
                    </label>
                   <button type="Submit">Search</button>
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