import React from 'react';
import classes from './AppHeader.module.css'
import {Link} from "react-router-dom";

const AppHeader = () => {
    return (
        <div className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>
                <p>ARP 4 - Security UI</p>
            </div>
            <div className={classes.HeaderRight}>
                <Link to={"/"}>
                    <div>Home</div>
                </Link>
                <Link to={"/list"}>
                    <div>List</div>
                </Link>
                <Link to={"/form"}>
                    <div>Form</div>
                </Link>
            </div>
        </div>
    );
};

export default AppHeader;