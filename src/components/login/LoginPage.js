import React, {useState} from 'react';
import classes from './LoginPage.module.css';
import Card from "../card/Card";
import {Button, Grid, TextField} from "@mui/material";
import {Send} from "@mui/icons-material";
import {connect} from "react-redux";
import * as actions from "../redux/actions";

// See: https://github.com/SaintAmeN/arppl4_react_rental_ui/blob/master/src/components/carform/CarForm.js
const LoginPage = () => {
    const [authorization, setAuthorization] = useState({});

    const updateValue = (event, name) => {
            authorization[name] = event.target.value;

            const authorizationCopy = {...authorization};
            setAuthorization(authorizationCopy)
    }

    const sendForm = () => {

    }

    return (
        <div className={classes.LoginPage}>
            <Card cardTitle={"Login Page"}>
                <Grid container>
                    <Grid item xs={12} className={classes.FormItem}>
                        <TextField
                            onChange={(event) => {
                                updateValue(event, "username")
                            }}
                            value={authorization.username}
                            label={"Username:"}
                            variant={"filled"}/>
                    </Grid>
                    <Grid item xs={12} className={classes.FormItem}>
                        <TextField
                            type={"password"}
                            onChange={(event) => {
                                updateValue(event, "password")
                            }}
                            value={authorization.password}
                            label={"Password:"}
                            variant={"filled"}/>
                    </Grid>
                    <Grid container className={classes.FormButtonPanel}>
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8}></Grid>
                        <Grid item xs={2}>
                            <Button className={classes.FormButtonSubmit}
                                    variant={"contained"}
                                    onClick={sendForm}
                                    endIcon={<Send/>}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (authorization) => dispatch(actions.authenticateUser(authorization))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
