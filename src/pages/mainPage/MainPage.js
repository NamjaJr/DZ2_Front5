import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { preloaderOn, preloaderOff, getMain } from '../../store/MainSlice';
import { sendMainRequest } from '../../store/RequestSlice';

const MainPage = () => {
    const { preloader, arrState } = useSelector((state) => state.MainSlice);
    const dispatch = useDispatch();

    const handleRequest = () => {
        dispatch(getMain());
        dispatch(sendMainRequest());
    };

    return (
        <div>
            <button onClick={handleRequest}>Сделать запрос</button>
            {arrState.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default MainPage;











