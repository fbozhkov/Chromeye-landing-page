import React from "react";
import { Typography, Button } from "@mui/material";
import styles from "./hero.module.scss";
import heroImage from "../../assets/chromeye_assignment_heroimg_v1.png";

const Hero = (props) => {
    return (
        <div className={styles['hero']}>
            <div className={styles['hero-container']}>
                <div className={styles['hero-text']}>
                    <div className={styles['hero-text-title']}>
                        <Typography variant="h1">{props.data.title}</Typography>
                    </div>
                    <div className={styles['hero-text-body']}>
                        <Typography variant="body1">{props.data.description}</Typography>
                    </div>
                    <div>
                        <Button variant="contained"
                            className={styles['hero-text-button']}>
                                {props.data.buttonLabel}
                        </Button>
                    </div>
                </div>
                <div className={styles['hero-image']}>
                    <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={heroImage} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;