import React, {useState} from 'react';
import styles from './agency-services.module.scss';
import { Typography, Button, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AgencyServices = (props) => {
    const images = props.data.items.map((item) => {
        return item.image;
    });
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageChange = (index) => {
        setSelectedImage(images[index]);
    }

    return (
        <div className={styles['agency-service']}>
            <div className={styles['heading']}>
                <Typography variant="h2">{props.data.title}</Typography>
            </div>
            {props.data.items ? 
                <div className={styles['content']}>
                    <div className={styles['accordion-div']}>
                        {props.data.items.map((item, index) => { 
                            return (
                                <Accordion disableGutters className={styles['accordion']} key={index} onChange={() => handleImageChange(index)}>
                                <AccordionSummary className={styles['summary']} expandIcon={<ExpandMoreIcon fontSize='large' />}>
                                    <Typography variant="body1">{item.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2">{item.description}</Typography>
                                </AccordionDetails>
                            </Accordion>
                            )
                        })}
                    </div>
                    <div className={styles['image-div']}>
                        <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={selectedImage} alt="agency services" />
                    </div>
                </div>
                : null}
            
        </div>
    )
}

export default AgencyServices;