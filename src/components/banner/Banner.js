import React from 'react';
import styles from './banner.module.scss';
import data from '../../banner-data.json';
import { Typography, Button } from '@mui/material';

const Banner = (props) => {
    return (
        <div className={styles['banner']}>
            <div className={styles['banner-container']}>
                <div className={styles['banner-content']}>
                    <div className={styles['banner-text']}>
                        <div className={styles['banner-text-title']}>
                            <Typography variant="h1">{data.title}</Typography>
                        </div>
                        <div className={styles['banner-text-body']}>
                            <Typography variant="body1">{data.description}</Typography>
                        </div>
                    </div>
                    <Button className={styles['banner-button']} variant="contained">{data.buttonLabel}</Button>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Banner;