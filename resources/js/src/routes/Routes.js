import React from 'react';
import '../styles/style.css'
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Home from '../screens/Home'
import Students from '../screens/technician/Students'

const Path = "/home"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0E4DA4',
        },
        secondary: {
            main: '#263238',
        }
    },
    typography: {
        fontFamily: 'Montserrat',
        fontWeightLight: 300,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        h1: {
        }
    }
});


const App = () => {
    return (
        <Router className="App__container">
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route exact path={Path}>
                        <Home />
                    </Route>

                    <Route path={`${Path}/alunos`}>
                        <Students />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
}

ReactDom.render(<App />, document.getElementById('app'));