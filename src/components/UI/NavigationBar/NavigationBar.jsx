import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../button/MainButton';
import { AuthContext } from '../../../context/context';
import classes from './Link.module.css'

const NavigationBar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

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
            <MainButton style={{ marginLeft: 'auto' }} onClick={() => setIsAuth(false)}>
                Выход
            </MainButton>
        </div>
    )
}

export default NavigationBar;