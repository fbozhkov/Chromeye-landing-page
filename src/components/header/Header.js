import React from 'react';
import styles from './header.module.scss';
import axios from 'axios';
import { Button } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/chromeye_logo_v1.svg'

const Header = () => {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get('https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return(
        <div className={styles['header-wrapper']}>
            <div className={styles['header-container']}>
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
        </div>
    )
}

export default Header;