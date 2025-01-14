import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainButton from '../button/MainButton';
import { AuthContext } from '../../../context/context';
import classes from './Link.module.css'

const NavigationBar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext); 
    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigate('/login');
    };

    return (
        <div className='navigation__bar'>
            <div className='.navigation__bar__links'>
                <Link to='/about' className={classes.NavigationLink}>
                    О сайте
                </Link>
                <Link to='/posts' className={classes.NavigationLink}>
                    Посты
                </Link>
            </div>
            <MainButton style={{ marginLeft: 'auto' }} onClick={logout}>
                Выход
            </MainButton>
        </div>
    )
}

export default NavigationBar;