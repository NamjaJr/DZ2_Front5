import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import TabsSlice, {preloaderOff, preloaderOn, getPosts, getFrontend} from "../store/TabsSlice";




const Frontend = () => {

    const {preloader,arrState} = useSelector((state) => state.FrontendSlice);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFrontend());
    }, [dispatch]);

    console.log(getFrontend())
    console.log(arrState)
    return (
        <div>
                <h1>{TabsSlice}</h1>
            {arrState.map(() => {

                }

            )}
        </div>
    );
};

export default Frontend;