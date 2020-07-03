import React, { useState } from 'react';
import {
    Typography,
    FormControlLabel,
    Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';

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
        display: "flex",
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
        fontSize: "24px",
        marginTop: "4px",
        marginRight: "12px"
    },
    college: {
        marginLeft: "37px"
    }
}));

const Education = () => {
    const classes = useStyles();

    return (
        <Typography component="div" className={classes.root}>
            <Typography component="div" className={classes.heading}>EDUCATION</Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <Typography component="span" className={classes.skillHeader}><SchoolIcon className={classes.icon} />Master of Engineering (2013 - 2015)</Typography>
            </Typography>
            <Typography component="div" >
                <Typography component="span" className={classes.college}>University Visveswaraya College of Engineering, Department of CSE, KR Circle, Bangalore - 560001</Typography>
            </Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <Typography component="span" className={classes.skillHeader}><SchoolIcon className={classes.icon} />Bachelor of Engineering (2009 - 2013)</Typography>
            </Typography>
            <Typography component="div" >
                <Typography component="span" className={classes.college}>Channabasaveswara Institute of Technology (VTU), ISE branch, Gubbi, Tumkur, Karnataka - 572216</Typography>
            </Typography>
        </Typography>
    );
}

export default Education;
