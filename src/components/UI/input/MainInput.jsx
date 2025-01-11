import React from 'react';
import classes from './MainInput.module.css'

const MainInput = React.forwardRef((props, ref) => {

    return (
        <input ref = {ref} {...props} className={classes.MainInput} />
    )
});

export default MainInput;