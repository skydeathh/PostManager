import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='navigation__bar'>
            <div className='.navigation__bar__links'>
                <Link to='/about'>О сайте</Link>
                <Link to='/posts'>Посты</Link>
            </div>
        </div>
    )
}

export default NavigationBar;