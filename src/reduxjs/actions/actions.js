import {json} from "react-router-dom";
import {useDispatch} from "react-redux";
import {types} from "../types/types";


function preloaderOn() {
    return{
        type: types.PRELOADER_ON
    }
}


function preloaderOff() {
    return{
        type: types.PRELOADER_OFF
    }
}

export function addUserAction(user) {
    return async function (dispatch) {
        dispatch(preloaderOn())
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://reqres.in/api/users',options)

        if (response.status >= 200 || response.status <= 204) {
            dispatch(preloaderOff())
        }else  if (response.status === 404) {
            dispatch(preloaderOff())
        }
    }
}