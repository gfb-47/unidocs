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
import Students from '../screens/datatable/Students'

const Path = "/unidocs"

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

                    <Route path={`${Path}/students`}>
                        <Students />
                    </Route>

                    <Route path={`${Path}/professors`}>
                        {/* <Professors/> */}
                    </Route>

                    <Route path={`${Path}/semesters`}>
                        {/* <Semesters/> */}
                    </Route>

                    <Route path={`${Path}/knowladgeareas`}>
                        {/* <KnowladgeAreas/> */}
                    </Route>

                    <Route path={`${Path}/subjects`}>
                        {/* <Subjects/> */}
                    </Route>

                    <Route path={`${Path}/courses`}>
                        {/* <Courses/> */}
                    </Route>

                    <Route path={`${Path}/profile`}>
                        {/* <Profile/> or <ProfessorProfile/> */}
                    </Route>

                    <Route path={`${Path}/student/processes`}>
                        {/* <StudentProcesses/> */}
                    </Route>

                    <Route path={`${Path}/semesterprocesses`}>
                        {/* <SemesterProcesses/> */}
                    </Route>

                    <Route path={`${Path}/professor/processes`}>
                        {/* <LinkedProcesses/> */}
                    </Route>

                    <Route path={`${Path}/semesterjury`}>
                        {/* <SemesterJury/> */}
                    </Route>

                    <Route path={`${Path}/reports`}>
                        {/* <Report/> */}
                    </Route>

                    <Route path={`${Path}/process`}>
                        {/* <Process/> */}
                    </Route>

                    <Route path={`${Path}/process/details`}>
                        {/* <ProcessDetails/> */}
                    </Route>

                    <Route path={`${Path}/process/documents`}>
                        {/* <ProcessDocuments/> */}
                    </Route>

                    <Route path={`${Path}/process/jury `}>
                        {/* <ProcessJury/> */}
                    </Route>

                    <Route path={`${Path}/process/workplan `}>
                        {/* <ProcessWorkPlan/> */}
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
}

ReactDom.render(<App />, document.getElementById('app'));