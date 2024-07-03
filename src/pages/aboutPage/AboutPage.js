import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { preloaderOn, preloaderOff, getAbout } from '../../store/AboutSlice';
import { sendAboutRequest } from '../../store/RequestSlice';

const AboutPage = () => {
    const { preloader, arrState } = useSelector((state) => state.AboutSlice);
    const dispatch = useDispatch();

    const handleRequest = () => {
        dispatch(getAbout());
        dispatch(sendAboutRequest());
    };

    return (
        <div>
            <button onClick={handleRequest}>Сделать запрос</button>
            {arrState.map((item) => (
                <div key={item.id}>{item.body}</div>
            ))}
        </div>
    );
};

export default AboutPage;







