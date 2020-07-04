import React, { useState } from 'react';
import {
    Typography,
    FormControlLabel,
    Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import * as Constants from "../common/Constants";
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        height: "100%",
        paddingLeft: "16px",
    },
    heading: {
        color: theme.palette.primary.textColor,
        width: "100%",
        fontWeight: 600,
        fontSize: "40px"
    },
    firstName: {
        color: theme.palette.primary.textColor,
        fontSize: "72px",
        fontWeight: 600
    },
    lastName: {
        color: theme.palette.primary.main,
        fontSize: "72px",
        fontWeight: 600
    },
    skillHeaderDiv: {
        paddingTop: "24px"
    },
    skillHeader: {
        fontSize: "24px",
        fontWeight: 600
    },
    skillBullets: {
        paddingTop: "24px",
        display: "flex",
        flexDirection: "column"
    },
    designation: {
        fontSize: "22px",
        fontWeight: 500
    },
    icon: {
        fontSize: "48px",
        cursor: "pointer",
        "&:hover": {
            color: theme.palette.primary.main
        }
    }
}));

const ContactInfo = () => {
    const classes = useStyles();
    const openNewTab = (url) => {
        window.open(url, '_blank');
    }

    return (
        <Typography component="div" className={classes.root}>
            <Typography component="div" className={classes.heading}>CONTACT INFO</Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <Typography component="span" className={classes.skillHeader}>Residence</Typography>
            </Typography>
            <Typography component="div" >
                <Typography component="span">{Constants.ADDRESS}</Typography>
            </Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <Typography component="span" className={classes.skillHeader}>Phone</Typography>
            </Typography>
            <Typography component="div" >
                <Typography component="span">{Constants.PHONE}</Typography>
            </Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <Typography component="span" className={classes.skillHeader}>Email</Typography>
            </Typography>
            <Typography component="div" >
                <Typography component="span">{Constants.EMAIL}</Typography>
            </Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <FacebookIcon fontSize="large" classes={{ fontSizeLarge: classes.icon }} onClick={() => openNewTab(Constants.FACEBOOK)} />&nbsp;&nbsp;&nbsp;<EmailIcon fontSize="large" classes={{ fontSizeLarge: classes.icon }} onClick={() => openNewTab("mailto:" + Constants.EMAIL)} />&nbsp;&nbsp;&nbsp;<GitHubIcon fontSize="large" classes={{ fontSizeLarge: classes.icon }} onClick={() => openNewTab(Constants.GITHUB)} />
            </Typography>
        </Typography>
    );
}

export default ContactInfo;
