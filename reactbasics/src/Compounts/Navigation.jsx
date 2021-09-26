import React from 'react';
import { Link } from "react-router-dom";

import styles from "./navigation.module.css";

function Navigation() {
    return (
        <div className={styles.navigation}>
            <h1>Navigation</h1>
            <div className={'${styles.navigationButtonContainer}'}>
                <Link to="/">
                <button className={styles.navigationButton}>Home</button>
                </Link>
                <Link to="/contact">
                <button className={styles.navigationButton}>Contact</button>
                </Link>
                <Link to="/addTwo">
                <button className={styles.navigationButton}>Add Two</button>
                </Link>
            </div>
        </div>
    );
}

export default Navigation
