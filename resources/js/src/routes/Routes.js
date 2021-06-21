import React from 'react';
import '../styles/style.css'
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, blueGrey } from '@material-ui/core/colors';
import Store from '../components/Store';
import Home from '../screens/Home'
import Students from '../screens/datatable/Students'
import Professors from '../screens/datatable/Professors';
import Semesters from '../screens/datatable/Semesters';
import KnowladgeAreas from '../screens/datatable/KnowladgeAreas';
import Subjects from '../screens/datatable/Subjects';
import Courses from '../screens/datatable/Courses';
import StudentProcesses from '../screens/student/StudentProcesses';
import SemesterProcesses from '../screens/professor/SemesterProcesses';
import LinkedProcesses from '../screens/professor/LinkedProcesses';
import SemesterJury from '../screens/professor/SemesterJury';
import Report from '../screens/professor/Report';
import Process from '../screens/process/Process';
import DocumentSign from '../screens/process/DocumentSign';
import ProcessDetails from '../screens/process/ProcessDetails';
import ProcessDocuments from '../screens/process/ProcessDocuments';
import ProcessJury from '../screens/process/ProcessJury';
import ProcessWorkPlan from '../screens/process/ProcessWorkPlan';
import Profile from '../screens/profiles/Profile'
import ProfileProfessor from '../screens/profiles/ProfessorProfile'
import ModalProfessorProfile from '../screens/profiles/ModalProfessorProfile'

import Layout from '../components/Layout'
import ProcessEdit from '../screens/process/ProcessEdit';

const Path = "/unidocs"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[900],
        },
        secondary: {
            main: blueGrey[900],
        }
    },
    typography: {
        fontFamily: 'Montserrat',
        fontWeightLight: 300,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
});


const App = () => {
    return (
        <Store>
            <ThemeProvider theme={theme}>
                <Router className="App__container">
                    <Layout>
                        <Switch>
                            <Route exact path={Path}>
                                <Home />
                            </Route>

                            <Route path={`${Path}/students`}>
                                <Students />
                            </Route>

                            <Route path={`${Path}/professors`}>
                                <Professors />
                            </Route>

                            <Route path={`${Path}/semesters`}>
                                <Semesters />
                            </Route>

                            <Route path={`${Path}/knowladgeareas`}>
                                <KnowladgeAreas />
                            </Route>

                            <Route path={`${Path}/subjects`}>
                                <Subjects />
                            </Route>

                            <Route path={`${Path}/courses`}>
                                <Courses />
                            </Route>

                            {/* ALTERAR DEPOIS PARA DETECTAR TIPO DE USUARIO */}
                            <Route path={`${Path}/profile`}>
                                <Profile />
                            </Route>

                            <Route path={`${Path}/professorprofile`}>
                                <ProfileProfessor />
                            </Route>

                            <Route path={`${Path}/modalprofessorprofile`}>
                                <ModalProfessorProfile />
                            </Route>
                            {/* --------- */}

                            <Route path={`${Path}/student/processes`}>
                                <StudentProcesses />
                            </Route>

                            <Route path={`${Path}/professor/semesterprocesses`}>
                                <SemesterProcesses />
                            </Route>

                            <Route path={`${Path}/professor/processes`}>
                                <LinkedProcesses />
                            </Route>

                            <Route path={`${Path}/professor/semesterjury`}>
                                <SemesterJury />
                            </Route>

                            <Route path={`${Path}/professor/reports`}>
                                <Report />
                            </Route>

                            <Route exact path={`${Path}/process`}>
                                <Process />
                            </Route>

                            <Route exact path={`${Path}/process/edit/:id`}>
                                <ProcessEdit />
                            </Route>

                            <Route exact path={`${Path}/process/details/:id`}>
                                <ProcessDetails />
                            </Route>

                            <Route exact path={`${Path}/process/documents/:id`}>
                                <ProcessDocuments />
                            </Route>

                            <Route exact path={`${Path}/process/jury`}>
                                <ProcessJury />
                            </Route>

                            <Route exact path={`${Path}/process/workplan`}>
                                <ProcessWorkPlan />
                            </Route>

                            <Route exact path={`${Path}/process/documentsign`}>
                                <DocumentSign />
                            </Route>
                        </Switch>
                    </Layout>
                </Router>
            </ThemeProvider>
        </Store>
    );
}

ReactDom.render(<App />, document.getElementById('app'));