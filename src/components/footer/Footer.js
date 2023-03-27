import React, {useState, useEffect} from 'react';
import styles from './footer.module.scss'
import { apiCall } from '../../apiCall';
import { Typography, Button, IconButton } from '@mui/material';
import { ReactComponent as Logo } from '../../assets/chromeye_logo_v1.svg'
import  FacebookIcon  from '../../assets/Icons/facebook.png';
import TwitterIcon from '../../assets/Icons/twitter.png';
import LinkedinIcon from '../../assets/Icons/linkedin.png';

const Footer = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        apiCall()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    
    const footerMenuItems = data?.footer_menu.map((item, index) => {
        return item;
    });

    const leftMenuItems = footerMenuItems?.slice(0,4);
    const middleMenuItems = footerMenuItems?.slice(4,8);

    return (
        <div className={styles['footer']}>
            {data ? 
            <div className={styles['footer-container']}>
                <div className={styles['logo-button']}>
                    <div className={styles['logo']}>
                        <Logo className={styles['logo-svg']} />
                    </div>
                    <Button className={styles['button']} variant="contained">Request a call</Button>
                </div>
                <div className={styles['footer-group']}>
                   <div className={styles['group-left']}>
                        {leftMenuItems.map((item, index) => {
                            return (
                                <Button
                                    key={index}
                                    variant='text'
                                    className={styles['group-left-button']}>
                                    {item.name}
                                </Button>
                            )
                        })}
                        <Typography variant="body2" className={styles['group-left-text']}>{data?.company_data.intro}</Typography>
                    </div> 
                    <div className={styles['group-middle']}>
                        {middleMenuItems.map((item, index) => {
                            return (
                                <Button
                                    key={index}
                                    variant='text'
                                    className={styles['group-middle-button']}>
                                    {item.name}
                                </Button>
                            )
                        })}
                    </div>
                    <div className={styles['group-right']}>
                        <div className={styles['follow-us-group']}>
                            <Typography 
                                variant="subtitle1" 
                                className={styles['group-right-text']}>
                                    Follow us:
                            </Typography>
                            <div className={styles['social-link-buttons']}>
                                <IconButton className={styles['social-link-icon']}> 
                                    <img src={FacebookIcon} />
                                </IconButton>
                                <IconButton className={styles['social-link-icon']}> 
                                    <img src={TwitterIcon} />
                                </IconButton>
                                <IconButton className={styles['social-link-icon']}> 
                                    <img src={LinkedinIcon} />
                                </IconButton>
                            </div>
                        </div>
                        <div className={styles['contact-group']}>
                            <Typography 
                                variant="subtitle1"
                                className={styles['group-right-text']}>
                                    Contact
                            </Typography>
                            <div className={styles['contacts']}>
                                <Typography variant="subtitle2">{data?.company_data.address}</Typography>
                                <Typography variant="subtitle2">Phone: {data?.company_data.phone}</Typography>
                                <Typography variant="subtitle2">
                                    Web: <a href={`mailto:${data?.company_data.email}`} 
                                            className={styles['contacts']} 
                                            style={{ textDecoration: 'underline' }}>
                                                {data?.company_data.email}</a>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            : null}
            
        </div>
    )
}

export default Footer;
