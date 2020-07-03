import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Typography,
    Hidden
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Constants from "../common/Constants";
import Resume from "../assets/Resume.pdf";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        paddingLeft: "16px"
    },
    greetings: {
        color: theme.palette.primary.textColor,
        width: "100%",
        fontWeight: 600,
        fontSize: "24px"
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
    designationDiv: {
        paddingTop: "24px",
    },
    designation: {
        fontSize: "22px",
        fontWeight: 500
    },
    link: {
        color: theme.palette.primary.main,
        fontSize: "24px",
        fontWeight: 500,
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline"
        }
    },
    spaceBetween: {
        color: theme.palette.primary.main,
        fontSize: "24px",
        fontWeight: 500
    },
    linksDiv: {
        paddingTop: "48px"
    },
    fnlnMobileDiv: {
        display: "flex",
        flexDirection: "column"
    },
    firstName2: {
        color: theme.palette.primary.textColor,
        fontSize: "48px",
        fontWeight: 600
    },
    lastName2: {
        color: theme.palette.primary.main,
        fontSize: "48px",
        fontWeight: 600
    },
    linksDivMobile: {
        paddingTop: "48px",
        display: "flex",
        flexDirection: "column"
    }
}));

const AboutInfo = (props) => {
    const classes = useStyles();

    const navigateToContactInfo = () => {
        props.setSelectedItem("contact");
    }

    const downloadCV = () => {
        var link = document.createElement("a");
        link.download = "Resume.pdf";
        link.href = Resume;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <Typography component="div" className={classes.root}>
            <Typography component="div" className={classes.greetings}>HI THERE! I'M</Typography>
            <Hidden smUp implementation="css">
                <Typography component="div" className={classes.fnlnMobileDiv}>
                    <Typography component="span" className={classes.firstName2}>{Constants.FIRST_NAME}</Typography><Typography component="span" className={classes.lastName2}>{Constants.LAST_NAME}</Typography>
                </Typography>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Typography component="div">
                    <Typography component="span" className={classes.firstName}>{Constants.FIRST_NAME}</Typography>&nbsp;&nbsp;&nbsp;&nbsp;<Typography component="span" className={classes.lastName}>{Constants.LAST_NAME}</Typography>
                </Typography>
            </Hidden>
            <Typography component="div" className={classes.designationDiv}>
                <Typography component="span" className={classes.designation}>{Constants.DESIGNATION}</Typography>
            </Typography>
            <Typography component="div" className={classes.designationDiv}>
                <Typography component="span">{Constants.OBJECTIVE}</Typography>
            </Typography>
            <Hidden xsDown implementation="css">
            <Typography component="div" className={classes.linksDiv}>
                <Typography component="span" className={classes.link} onClick={navigateToContactInfo}>CONTACT ME</Typography><Typography component="span" className={classes.spaceBetween}>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;</Typography><Typography component="span" className={classes.link} onClick={downloadCV}>DOWNLOAD CV</Typography>
            </Typography>
            </Hidden>
            <Hidden smUp implementation="css">
            <Typography component="div" className={classes.linksDivMobile}>
                <Typography component="span" className={classes.link} onClick={navigateToContactInfo}>CONTACT ME</Typography><Typography component="span" className={classes.spaceBetween}></Typography><Typography component="span" className={classes.link} onClick={downloadCV}>DOWNLOAD CV</Typography>
            </Typography>
            </Hidden>
        </Typography>
    );
}

export default AboutInfo;
