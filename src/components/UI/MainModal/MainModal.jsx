import React from 'react';
import classes from './MainModal.module.css'

const MainModal = ({children, visible, setVisible}) => {
    let rootClases = [classes.mainModal];

    if (visible){
        rootClases.push(classes.active);
    }

    return (
        <div className={rootClases.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.mainModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MainModal;