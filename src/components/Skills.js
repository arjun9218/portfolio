import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Typography,
    FormControlLabel,
    Switch
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as Constants from "../common/Constants";
import { connect } from 'react-redux';
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

const Skills = (props) => {
    const classes = useStyles();
    const [themeType, setThemeType] = useState(props.darkMode ? "dark" : "light");

    return (
        <Typography component="div" className={classes.root}>
            <Typography component="div" className={classes.heading}>SKILLS</Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <Typography component="span" className={classes.skillHeader}>Job related</Typography>
            </Typography>
            <Typography component="div" className={classes.skillBullets}>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />Owning a task end to end and driving it to completion either individually or along with a team.</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />Gathering requirements, conducting requirements workshop, sprint planning, standup meetings and demo sessions. Basically following Agile practices.</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />Knowledgeable in using the JIRA tool for managing backlogs, creating User stories & bugs, tracking the burndown charts and adding tests.</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />Proficient in demonstrating the developed application features to customers and stakeholders.</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />Experienced in using the GitHub from creating a repository, reviewing teammates' pull requests to adding hooks for automating builds using CI CD.</Typography>
                <Typography component="span" className={classes.checkList} ><DoneIcon className={classes.checkIcon} />Capable in adapting to work with any new cutting edge technology.</Typography>
            </Typography>
            <Typography component="div" className={classes.skillHeaderDiv}>
                <Typography component="span" className={classes.skillHeader}>Technologies</Typography>
            </Typography>
            <Hidden xsDown implementation="css">
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />JavaScript</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={75} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>React JS, Node JS, Angular JS and Cypress test framework.</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />HTML/CSS</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={75} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>HTML5, CSS in JS, Sass & SCSS</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />Java EE</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={85} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>Core Java, Spring boot, Hibernates and JUnit unit test framework</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />Database</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={65} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>Mongo DB, MySQL and Oracle DB.</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBulletLast}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />Deployment</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={80} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWith}>AWS Kubernetes and Openshift.</Typography></Typography>
                </Typography>
            </Hidden>
            <Hidden smUp implementation="css">
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />JavaScript</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={75} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>React JS, Node JS, Angular JS and Cypress test framework.</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />HTML/CSS</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={75} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>HTML5, CSS in JS, Sass & SCSS</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />Java EE</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={85} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>Core Java, Spring boot, Hibernates and JUnit unit test framework</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBullets}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />Database</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={65} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>Mongo DB, MySQL and Oracle DB.</Typography></Typography>
                </Typography>
                <Typography component="div" className={classes.skillBulletLast}>
                    <Typography component="div" className={classes.programHeader} ><DoneIcon className={classes.checkIconBig} />Deployment</Typography>
                    <Typography component="div" className={classes.programContent} >Level:<LinearProgress variant="determinate" value={80} className={classes.level} /></Typography>
                    <Typography component="div" className={classes.programContent} >Experience with:<Typography component="span" className={classes.expWithMobile}>AWS Kubernetes and Openshift.</Typography></Typography>
                </Typography>
            </Hidden>
        </Typography>
    );
}

const mapStateToProps = (state) => {
    return {
        darkMode: state.darkMode
    }
}

export default connect(mapStateToProps)(Skills);
