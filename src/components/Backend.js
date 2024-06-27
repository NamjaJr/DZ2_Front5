import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {preloaderOn,preloaderOff,getBackend} from "../store/BackendSlice";

const Backend = () => {
    const { preloader, arrState } = useSelector((state) => state.BackendSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBackend());
    }, [dispatch]);

    return (
        <div>

            {arrState.map((item) => (
                <div key={item}>{item.title}</div>
            ))}
        </div>
    );
};

export default Backend;