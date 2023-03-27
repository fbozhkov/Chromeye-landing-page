import React, {useState} from "react";
import { Typography, Button, Icon, IconButton } from "@mui/material";
import styles from './service-highlight.module.scss';
import { ReactComponent as CheckIcon } from '../../assets/Icons/checkhighlights_blue.svg';
import { ReactComponent as PlusIcon } from '../../assets/Icons/chromeye_assignment_plus_v1.svg';
import { ReactComponent as MinusIcon } from '../../assets/Icons/chromeye_assignment_minus_v1.svg';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ServiceHighlight = (props) => {
    const { data, index, isExpanded, onExpand } = props;
    
    const handleExpanded = () => {
        onExpand(index);
    };
    
    return (
        <div className={styles['service-highlight']}>
            <div className={styles['service-highlight-icon-heading']}>
                <CheckIcon className={styles['check-icon']} />
                <div className={styles['service-highlight-heading']}>
                    <Typography variant="h3">{data.title}</Typography>
                </div> 
            </div>
            <div className={styles['service-highlight-see-more']}>
                <IconButton  onClick={handleExpanded}>
                    {isExpanded ? <RemoveIcon fontSize="large" /> :
                        <AddIcon fontSize="large" />}
                </IconButton>
                 <Typography
                    variant="body2"
                    className={`${styles['description']} ${isExpanded ? styles['description-expanded'] : ''}`}>
                    {data.description}
                </Typography> 
                
            </div>
        </div>
        
    )
}

export default ServiceHighlight;

