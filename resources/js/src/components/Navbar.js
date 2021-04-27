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
    },
    title: {
        color: 'white',
        fontWeight: 500,
    },
    subtitle: {
        color: 'white',
        fontWeight: 300,
    },
    tabs: {
        flexGrow: 1,
    }
}));

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                        value={value}
                        onChange={handleChange}
                        centered
                    >
                        <Tab label="Gerenciar" />
                        <Tab label="Projetos" />
                        <Tab label="Relatórios" />
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
                    value={value}
                    onChange={handleChange}
                    aria-label=""
                >
                    <Tab label="Aluno" href="/unidocs/alunos" />
                    <Tab label="Professor" />
                    <Tab label="Semestre" />
                    <Tab label="Áreas do Conhecimento" />
                    <Tab label="Disciplina" />
                    <Tab label="Curso" />
                </Tabs>
            </AppBar>
        </div>
    );
}