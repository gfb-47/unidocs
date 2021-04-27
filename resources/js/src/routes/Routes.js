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

                    <Route path={`${Path}/alunos`}>
                        <Students />
                    </Route>

                    <Route path={`${Path}/professores`}>
                        {/* <Professors/> */}
                    </Route>

                    <Route path={`${Path}/semestres`}>
                        {/* <Semesters/> */}
                    </Route>

                    <Route path={`${Path}/areasdeconhecimento`}>
                        {/* <KnowladgeAreas/> */}
                    </Route>

                    <Route path={`${Path}/disciplinas`}>
                        {/* <Subjects/> */}
                    </Route>

                    <Route path={`${Path}/cursos`}>
                        {/* <Courses/> */}
                    </Route>

                    <Route path={`${Path}/perfil`}>
                        {/* <StudentProfile/> or <ProfessorProfile/> */}
                    </Route>

                    <Route path={`${Path}/meusprocessos`}>
                        {/* <StudentProcesses/> */}
                    </Route>

                    <Route path={`${Path}/processossemestre`}>
                        {/* <SemesterProcesses/> */}
                    </Route>

                    <Route path={`${Path}/processosvinculados`}>
                        {/* <LinkedProcesses/> */}
                    </Route>

                    <Route path={`${Path}/bancas`}>
                        {/* <JurySemester/> */}
                    </Route>

                    <Route path={`${Path}/relatorios`}>
                        {/* <Report/> */}
                    </Route>

                    <Route path={`${Path}/processo`}>
                        {/* <Process/> */}
                    </Route>

                    <Route path={`${Path}/processo/detalhes`}>
                        {/* <ProcessDetails/> */}
                    </Route>

                    <Route path={`${Path}/processo/documentos`}>
                        {/* <ProcessDocuments/> */}
                    </Route>

                    <Route path={`${Path}/processo/banca `}>
                        {/* <ProcessJury/> */}
                    </Route>

                    <Route path={`${Path}/processo/planodetrabalho `}>
                        {/* <ProcessWorkPlan/> */}
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
}

ReactDom.render(<App />, document.getElementById('app'));