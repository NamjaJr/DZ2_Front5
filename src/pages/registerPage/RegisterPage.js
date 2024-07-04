import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from "../../store/RegisterSlice";

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const alrdReg = useSelector((state) => state.registration?.alrdReg);
    const dispatch = useDispatch();

    const validRegister = () => {
        if (!username || !password || !confirmPassword) {
            return alert('Заполните все поля');
        }else if(password !== confirmPassword) {
            return alert('Пароли не совпадают')
        }else if(alrdReg) {
            return alert('Пользователь уже зарегистрирован')
        }else dispatch(register)
        return alert('Регистрация прошла успешно')
    }

    return (
        <div>
            <h2>RegisterPage</h2>
            <div>
                <input  type="text"
                        placeholder="Имя пользователя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <input type="password"
                       placeholder="Пароль"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}/>

            </div>
            <div>
                <input type="password"
                       placeholder="Подтвердите пароль"
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            <button onClick={validRegister}>Зарегистрировать пользователя</button>
        </div>
    );
};

export default RegisterPage;

