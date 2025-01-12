import React, {useContext} from 'react';
import MainInput from "../components/UI/input/MainInput";
import MainButton from "../components/UI/button/MainButton";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MainInput type="text" placeholder="Введите логин"/>
                <MainInput type="password" placeholder="Введите пароль"/>
                <MainButton>Войти</MainButton>
            </form>
        </div>
    );
};

export default Login;