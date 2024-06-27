import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {preloaderOn,preloaderOff,getAndroid} from "../store/AndroidSlice";

const Android = () => {
    const { preloader, arrState } = useSelector((state) => state.AndroidSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAndroid());
    }, [dispatch]);


    return (
        <div>
            {arrState.map((item) => (
                <div key={item}>{item.id}</div>
            ))}
        </div>
    );
};

export default Android;