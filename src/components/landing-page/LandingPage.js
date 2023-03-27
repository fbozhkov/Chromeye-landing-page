import React, {useEffect, useState} from "react";
import styles from './landing-page.module.scss'
import { apiCall } from "../../apiCall";
import Hero from "../hero/Hero";
import Services from "../services/Services";
import Banner from "../banner/Banner";

const LandingPage = () => {
    const [data, setData] = useState(null);
    const [expandedServices, setExpandedServices] = useState({});

    useEffect(() => {
        apiCall()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleExpanded = (index) => {
        setExpandedServices((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div>
            {data ? 
                <div className={styles['page']}>
                    <Hero data={data.hero} />
                    <Services data={data} expandedServices={expandedServices} handleExpanded={handleExpanded} />
                    <div>
                        <Banner />   
                    </div>
                </div>
                : null}
            
        </div>
    );
}

export default LandingPage;