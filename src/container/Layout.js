import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import {
    Typography,
    FormControlLabel,
    Switch
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AboutInfo from "../components/AboutInfo";
import { connect } from 'react-redux';
import * as profilePhoto from "../assets/profilePhoto.JPG";
import Skills from '../components/Skills';
import ContactInfo from '../components/ContactInfo';
import Education from '../components/Education';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Experience from '../components/Experience';
import Interests from '../components/Interests';
import Achievements from '../components/Achievements';

const drawerWidth = 281;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    profilePhotoDiv: {
        height: "384px",
        width: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        height: "95vh"
    },
    circle: {
        width: "172px",
        height: "172px",
        boxShadow: "0px 0px 0px 6px " + theme.palette.primary.lighterRgba
    },
    divider: {
        backgroundColor: theme.palette.primary.lighterRgba
    },
    listItem: {
        cursor: "pointer",
        color: theme.palette.primary.lighterRgba,
        "&:hover": {
            color: "#FFF"
        }
    },
    listItemText: {
        textAlign: "center",
    },
    listItemFont: {
        fontWeight: 640
    },
    selectedListItem: {
        backgroundColor: theme.palette.primary.main + " !important",
        color: "#FFF"
    },
    darkMode: {
        textAlign: "right"
    },
    transitionEnter: {
        opacity: 0,
        transform: "translateX(-100%)"
    },
    transitionEnterActive: {
        opacity: 1,
        transform: "translateX(0%)",
        transition: "opacity 400ms, transform 400ms"
    },
    transitionExit: {
        opacity: 1,
        transform: "translateX(0%)",
    },
    transitionExitActive: {
        opacity: 0,
        transform: "translateX(-100%)",
        transition: "opacity 400ms, transform 400ms"
    }
}));

const Layout = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = useState("about");

    const handleListItemClick = (id) => {
        setSelectedItem(id);
        handleDrawerClose();
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
        setMobileOpen(false);
    }

    const listItems = [{
        id: "about",
        label: "ABOUT"
    },
    {
        id: "skills",
        label: "SKILLS"
    },
    {
        id: "experience",
        label: "EXPERIENCE"
    },
    {
        id: "hobby",
        label: "INTERESTS"
    },
    {
        id: "education",
        label: "EDUCATION"
    },
    {
        id: "achievements",
        label: "ACHIEVEMENTS"
    },
    {
        id: "contact",
        label: "CONTACT INFO"
    }];

    const drawer = (
        <div>
            <div className={classes.profilePhotoDiv}>
                <Avatar alt="Arjun Gururajan" src={profilePhoto} className={classes.circle} />
            </div>
            {/* <Divider className={classes.divider} variant="middle" /> */}
            <List>
                {listItems.map((item) => (
                    <ListItem
                        alignItems="center"
                        className={classes.listItem}
                        key={item.id}
                        selected={selectedItem === item.id}
                        onClick={event => handleListItemClick(item.id)}
                        classes={{
                            selected: classes.selectedListItem
                        }}
                    >
                        <ListItemText
                            className={classes.listItemText}
                            classes={{
                                primary: classes.listItemFont
                            }}
                            primary={item.label}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Hidden smUp implementation="css">
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {listItems.find(listItem => listItem.id === selectedItem).label}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Hidden>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Hidden smUp implementation="css">
                    <div className={classes.toolbar} />
                </Hidden>
                <Typography component="div" className={classes.darkMode}>
                    <FormControlLabel
                        checked={props.darkMode}
                        onChange={event => props.setMode(event)}
                        control={<Switch color="primary" />}
                        label="Dark mode"
                        labelPlacement="start"
                    />
                </Typography>
                <SwitchTransition mode={"out-in"}>
                    <CSSTransition
                        key={selectedItem}
                        classNames={{
                            enter: classes.transitionEnter,
                            enterActive: classes.transitionEnterActive,
                            exit: classes.transitionExit,
                            exitActive: classes.transitionExitActive,
                        }}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                    >
                        {selectedItem === 'about' ? <AboutInfo setSelectedItem={setSelectedItem} />
                            : selectedItem === "skills" ? <Skills />
                                : selectedItem === "contact" ? <ContactInfo />
                                    : selectedItem === "education" ? <Education />
                                        : selectedItem === "experience" ? <Experience />
                                            : selectedItem === "hobby" ? <Interests setSelectedItem={setSelectedItem} />
                                                : selectedItem === "achievements" ? <Achievements />
                                                    : null
                        }
                    </CSSTransition>
                </SwitchTransition>
            </main>
        </div>
    );
}

Layout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        darkMode: state.darkMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMode: () => dispatch({ type: 'DARK_MODE' })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);