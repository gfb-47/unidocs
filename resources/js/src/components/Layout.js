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
import { Link } from "react-router-dom";
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';


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
        color: theme.palette.common.white,
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
    },
    menu: {
        zIndex: 1101,
    },
    footer: {
        marginTop: 112,
        left: 0,
        bottom: 0,
        width: '100%',
    }
}));

export default function Layout({ children }) {
    const classes = useStyles();
    const [topBar, setTopBar] = React.useState(false);
    const [bottomBarGerenciar, setBottomBarGerenciar] = React.useState(false);
    const [bottomBarProjetos, setBottomBarProjetos] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleTopBar = (event, newValue) => {
        setTopBar(newValue);
    };

    const handleBottomBarGerenciar = (event, newValue) => {
        setBottomBarGerenciar(newValue);
        setBottomBarProjetos(false);
    };

    const handleBottomBarProjetos = (event, newValue) => {
        setBottomBarProjetos(newValue);
        setBottomBarGerenciar(false);
    };


    function renderTabs(handleTopBar) {
        switch (handleTopBar) {
            case 0:
                return (
                    <Tabs
                        variant="fullWidth"
                        value={bottomBarGerenciar}
                        onChange={handleBottomBarGerenciar}
                        className={classes.tabs}
                    >
                        <Tab label="Aluno" to='/unidocs/students' component={Link} />
                        <Tab label="Professor" to='/unidocs/professors' component={Link} />
                        <Tab label="Semestre" to='/unidocs/semesters' component={Link} />
                        <Tab label="Áreas do Conhecimento" to='/unidocs/knowladgeareas' component={Link} />
                        <Tab label="Disciplina" to='/unidocs/subjects' component={Link} />
                        <Tab label="Curso" to='/unidocs/courses' component={Link} />
                    </Tabs>
                )

            case 1:
                return (
                    <Tabs
                        variant="fullWidth"
                        value={bottomBarProjetos}
                        onChange={handleBottomBarProjetos}
                        className={classes.tabs}
                    >
                        <Tab label="Bancas" to='/unidocs/professor/semesterjury' component={Link} />
                        <Tab label="Meus Projetos" to='/unidocs/student/processes' component={Link} />
                        <Tab label="Projetos Vinculados" to='/unidocs/professor/processes' component={Link} />
                        <Tab label="Semestre Ativo" to='/unidocs/professor/semesterprocesses' component={Link} />
                    </Tabs>
                )
            default:
                return (
                    <Tabs
                        variant="fullWidth"
                        value={false}
                        className={classes.tabs}
                    >
                    </Tabs>
                )
        }
    }

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
                        <Tab label="Relatórios" to='/unidocs/professor/reports' component={Link} />
                    </Tabs>


                    <IconButton
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <AccountCircleIcon fontSize="large" className={classes.icon}/>
                    </IconButton>
                    <Popper className={classes.menu} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper >
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>

                </Toolbar>
            </AppBar>

            <AppBar
                color="primary"
                position="relative"
            >
                {renderTabs(topBar)}
            </AppBar>

            <div>
                {children}
            </div>

            <div className={classes.footer}>
                <AppBar color="secondary" position="static">
                    <Toolbar>
                        Desenvolvido 2021
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}