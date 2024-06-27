import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {preloaderOn,preloaderOff,getUxUi} from "../store/UxUiSlise";


const UxUi = () => {

    const { preloader, arrState } = useSelector((state) => state.UxUiSlise);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUxUi());
    }, [dispatch]);

    return (
        <div>
            {arrState.map((item) => (
                <div key={item}>{item.body}</div>
            ))}
        </div>
    );
};

export default UxUi;