import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Typography,
    FormControlLabel,
    Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Constants from "../common/Constants";
import DoneIcon from '@material-ui/icons/Done';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        height: "100%",
        paddingLeft: "16px",
        marginTop: "-4px"
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
        paddingTop: "16px",
        display: "flex",
        flexDirection: "column"
    },
    designation: {
        fontSize: "22px",
        fontWeight: 500
    },
    checkList: {
        display: "flex",
        flexDirection: "row",
        alignItems: "top"
    },
    checkIcon: {
        fontSize: "16px",
        marginRight: "12px",
        marginTop: "4px"
    },
    checkIconBig: {
        fontSize: "16px",
        marginRight: "12px",
        marginTop: "10px"
    },
    programHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "top",
        fontSize: "24px",
        fontWeight: 500
    },
    programContent: {
        marginLeft: "28px",
        display: "flex",
        alignItems: "top"
    },
    level: {
        width: "100px",
        height: "12px",
        marginLeft: "12px",
        marginTop: "6px"
    },
    expWith: {
        color: theme.palette.primary.main,
        marginLeft: "12px"
    },
    expWithMobile: {
        color: theme.palette.primary.main,
        marginLeft: "12px",
        maxWidth: "216px"
    },
    skillBulletLast: {
        paddingTop: "16px",
        paddingBottom: "36px",
        display: "flex",
        flexDirection: "column"
    }
}));

const Skills = () => {
    const classes = useStyles();

    return (
        <Typography component="div" className={classes.root}>
            <Typography component="div" className={classes.heading}>SKILLS</Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <Typography component="span" className={classes.skillHeader}>Job related</Typography>
            </Typography>
            <Typography component="div" className={classes.skillBullets}>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />{Constants.JOB_SKILL1}</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />{Constants.JOB_SKILL2}</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />{Constants.JOB_SKILL3}</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />{Constants.JOB_SKILL4}</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />{Constants.JOB_SKILL5}</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />{Constants.JOB_SKILL6}</Typography>
            </Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <Typography component="span" className={classes.skillHeader}>Technologies</Typography>
            </Typography>
            <Hidden xsDown implementation="css">
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY1}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={75} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>{Constants.EXP_WITH1}</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY2}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={75} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>{Constants.EXP_WITH2}</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY3}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={85} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>{Constants.EXP_WITH3}</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY4}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={65} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>{Constants.EXP_WITH4}</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBulletLast}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY5}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={80} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>{Constants.EXP_WITH5}</Typography></Typography>
                </Typography>
            </Hidden>
            <Hidden smUp implementation="css">
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY1}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={75} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>{Constants.EXP_WITH1}</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY2}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={75} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>{Constants.EXP_WITH2}</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY3}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={85} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>{Constants.EXP_WITH3}</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY4}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={65} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>{Constants.EXP_WITH4}</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBulletLast}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />{Constants.TECHNOLOGY5}</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={80} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>{Constants.EXP_WITH5}</Typography></Typography>
                </Typography>
            </Hidden>
        </Typography>
    );
}

export default Skills;
