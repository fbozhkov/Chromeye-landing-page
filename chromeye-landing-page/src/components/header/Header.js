import React from 'react';
import styles from './header.module.scss';
import { Button } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/chromeye_logo_v1.svg'

const Header = () => {

    return(
        <div className={styles['header-wrapper']}>
            <div className={styles['header']}>
                <div className={styles['logo']}>
                    <Logo />
                </div>
                <div className={styles['nav']}>
                    <Button
                        className={styles['nav-button-text']}
                        variant="text">Home</Button>
                    <Button
                        className={styles['nav-button-text']}
                        variant="text">Services</Button>
                    <Button
                        className={styles['nav-button-text']}
                        variant="text">Blog</Button>
                    <Button
                        className={styles['nav-button-text']}
                        variant="text">About</Button>
                    <Button
                        className={styles['nav-button-text']}
                        variant="text">Agency</Button>
                    <Button
                        className={styles['nav-button-contained']}
                        variant="contained">Get in touch</Button>
                </div>
            </div>
        </div>
    )
}

export default Header;