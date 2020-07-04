import React, { useState, useEffect } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Layout from './container/Layout';
import { connect } from 'react-redux';

const App = (props) => {
  const [themeType, setThemeType] = useState(props.darkMode ? "dark" : "light");

  useEffect(() => {
    setThemeType(props.darkMode ? "dark" : "light");
  }, [props.darkMode]);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: props.darkMode ? "#bd5d38" : "#2455d1",
        lighter: props.darkMode ? "#db9276" : "#96b4ff",
        lighterRgba: props.darkMode ? "rgba(219, 146, 118, 1)" : "rgba(150, 180, 255, 1)",
        textColorLight: "#e8e8e8",
        textColorDark: "#505050",
        textColor: props.darkMode ? "#e8e8e8" : "#505050"
      },
      type: themeType
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode
  }
}

export default connect(mapStateToProps)(App);
