import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    logo: {
        margin: theme.spacing(2),
        color: theme.palette.primary.main,
        fontSize: 75,
    },
    iconbutton: {
        marginRight: theme.spacing(0),
    },
    icon: {
        fontSize: 36,
    },
    link: {
        textDecoration: "none",
    },
    title: {
        textDecoration: "none",
        color: 'white',
        fontWeight: 500,
    },
    subtitle: {
        textDecoration: "none",
        color: 'white',
        fontWeight: 300,
    },
    tabs: {
        flexGrow: 1,
    }
}));

export default function Navbar() {
    const classes = useStyles();
    const [topBar, setTopBar] = React.useState(0);
    const [bottomBar, setBottomBar] = React.useState(0);

    const handleTopBar = (event, newValue) => {
        setTopBar(newValue);
    };

    const handleBottomBar = (event, newValue) => {
        setBottomBar(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar
                color="secondary"
                position="static"
            >
                <Toolbar>
                    <ExitToAppIcon
                        className={classes.logo}
                        size='large'
                    />
                    <div>
                        <a href="/unidocs" className={classes.link}>
                            <Typography
                                variant="h4"
                                className={classes.title}
                            >
                                UniDocs
                            </Typography>

                            <Typography
                                variant="body2"
                                className={classes.subtitle}
                            >
                                Gerenciamento de PCC e TCC
                            </Typography>
                        </a>
                    </div>

                    <Tabs
                        className={classes.tabs}
                        value={topBar}
                        onChange={handleTopBar}
                        centered
                    >
                        <Tab label="Gerenciar" />
                        <Tab label="Projetos" />
                        <Tab label="Relatórios" to='/unidocs/professor/reports' component={Link}/>
                    </Tabs>

                    <IconButton
                        className={classes.iconbutton}
                        color="inherit"
                    >
                        <AccountCircleIcon
                            className={classes.icon}
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <AppBar
                color="primary"
                position="relative"
            >
                <Tabs
                    variant="fullWidth"
                    value={bottomBar}
                    onChange={handleBottomBar}
                    className={classes.tabs}
                >
                    <Tab label="Aluno" to='/unidocs/students' component={Link}/>
                    <Tab label="Professor" to='/unidocs/professors' component={Link}/>
                    <Tab label="Semestre" to='/unidocs/semesters' component={Link}/>
                    <Tab label="Áreas do Conhecimento" to='/unidocs/knowladgeareas' component={Link}/>
                    <Tab label="Disciplina" to='/unidocs/subjects' component={Link}/>
                    <Tab label="Curso" to='/unidocs/courses' component={Link}/>
                </Tabs>
            </AppBar>
        </div>
    );
}