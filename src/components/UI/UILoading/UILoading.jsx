import React, { useEffect, useState } from 'react';
import cn from 'classnames'
import styles from './UILoading.module.css';
import LoaderBlack from './img/loader-black.svg'
import LoaderWhite from './img/loader-white.svg'
import LoaderBlue from './img/loader-blue.svg'

const UILoading = ({theme="white", isShadow=true, classes}) => {
    const [loaderIcon, setLoaderIcon] = useState(null)

    useEffect(() => {
        switch (theme) {
            case 'black': setLoaderIcon(LoaderBlack); break;
            case 'white': setLoaderIcon(LoaderWhite); break;
            case 'blue': setLoaderIcon(LoaderBlue); break;
            default: setLoaderIcon(LoaderWhite);
        }
    }, [])

    return (
        <img className={cn(styles.loader, isShadow && styles.shadow, classes)} src={loaderIcon} alt='Loader'></img>
    )
}

export default UILoading;