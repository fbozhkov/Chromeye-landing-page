import React from "react";
import styles from './services.module.scss';
import { Typography, Button, Divider } from "@mui/material";
import ServiceHighlight from "../service-highlight/ServiceHighlight";
import AgencyServices from "../agency-services/AgencyServices";
import gridImage1 from "../../assets/chromeye_assignment_gridimage1_v1.png";
import gridImage2 from "../../assets/chromeye_assignment_gridimage2_v1.jpg";

const Services = (props) => {

    return (
        <div className={styles['wrapper']}> 
            <div className={styles['services']}>
                <div className={styles['services-heading-sub-div']}>
                    <div>
                        <Typography variant="h2">Our {props.data.services.title}</Typography>
                    </div>
                    <div>
                        <Typography variant="body1">{props.data.services.description}</Typography>
                    </div>
                </div>
                <div className={styles['services-icons-container']}>
                    {props.data.services.items.map((service, index) => {
                        return <ServiceHighlight
                            key={index}
                            data={service}
                            index={index}
                            isExpanded={props.expandedServices[index]}
                            onExpand={props.handleExpanded} />
                    })}
                </div>
                <div className={styles['services-button-div']}>
                    <Button
                        variant="contained"
                        className={styles['services-button']}>{props.data.services.buttonLabel}</Button>
                </div>
            </div>
            <div className={styles['work']}>
                <div className={styles['work-heading-sub-div']}>
                    <div>
                        <Typography variant="h2">Our work</Typography>
                    </div>
                    <div>
                        <Typography variant="body1">{props.data.portfolio.description}</Typography>
                    </div>
                </div>
                <div className={styles['work-items']}>
                    <div className={styles['work-items-top']}>
                        <div className={styles['work-top-left']}>
                            <div className={styles['top-left-content']}>
                                <Typography variant="h2">{props.data.portfolio.items[0].title} </Typography>
                                <Divider className={styles['divider']} />
                                <Typography sx={{ 'textAlign': 'right' }} variant="body1">{props.data.portfolio.items[0].description}</Typography>
                                <Button className={styles['btn-read-more']}>Read More</Button>
                            </div>
                        </div>
                        <div className={styles['work-top-right']}>
                            <div className={styles['grid-image']}>
                                <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={gridImage1} alt="img1" />
                            </div>
                        </div>
                    </div>
                    <div className={styles['work-items-bottom']}>
                        <div className={styles['work-bottom-left']}>
                            <div className={styles['grid-image']}>
                                <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={gridImage2} alt="img2" />
                            </div>
                        </div>
                        <div className={styles['work-bottom-right']}>
                            <div className={styles['bottom-right-content']}>
                                <Typography variant="h2">{props.data.portfolio.items[1].title} </Typography>
                                <Divider className={styles['divider']} />
                                <Typography sx={{ 'textAlign': 'left' }} variant="body1">{props.data.portfolio.items[1].description}</Typography>
                                <Button className={styles['btn-read-more']}>Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider className={styles['divider-work-agency']} />
            <AgencyServices data={props.data.agency_services} />
            
        </div>
    )
}

export default Services;