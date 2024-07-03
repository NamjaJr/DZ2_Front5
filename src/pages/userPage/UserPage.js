import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { preloaderOn, preloaderOff, getUser } from '../../store/UserSlice';
import { sendUserRequest } from '../../store/RequestSlice';

const UserPage = () => {
    const { preloader, arrState } = useSelector((state) => state.UserSlice);
    const dispatch = useDispatch();

    const handleRequest = () => {
        dispatch(getUser());
        dispatch(sendUserRequest());
    };

    return (
        <div>
            <button onClick={handleRequest}>Сделать запрос</button>
            {arrState.map((item) => (
                <div key={item.id}>{item.id}</div>
            ))}
        </div>
    );
};

export default UserPage;

