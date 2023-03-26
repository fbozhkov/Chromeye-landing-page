import React, {useEffect, useState} from "react";
import styles from './landing-page.module.scss'
import { apiCall } from "../../apiCall";
import Hero from "../hero/Hero";

const LandingPage = () => {
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

    return (
        <div>
            {data ? 
                <div className={styles['page']}>
                    <Hero data={data.hero} />
                </div>
                : null}
            
        </div>
    );
}

export default LandingPage;