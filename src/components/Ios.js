import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {preloaderOn,preloaderOff,getIos} from "../store/IosSlice";


const Ios = () => {

    const { preloader, arrState } = useSelector((state) => state.IosSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIos());
    }, [dispatch]);
    return (
        <div>
            {arrState.map((item) => (
                <div key={item}>{item.url}</div>
            ))}
        </div>
    );
};

export default Ios;