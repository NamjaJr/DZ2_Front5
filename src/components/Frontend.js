import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {preloaderOff,preloaderOn,getPosts, getFrontend} from "../store/FrontendSlice";


const Frontend = () => {
    const {preloader,arrState} = useSelector((state) => state.FrontendSlice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFrontend());
    }, [dispatch]);


    return (
        <div>
            {arrState.map((item) => (
                    <div key={item}>{item.name}</div>
                )
            )}
        </div>
    );
};

export default Frontend;