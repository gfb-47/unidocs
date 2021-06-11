import React from 'react';
import { Chip, Container, Divider, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProcessCard from '../components/ProcessCard/ProcessCard'
import Carousel from 'react-material-ui-carousel'
import api from '../api/mainIndex';
import { is } from '../utils/permissions';
import { setLoading } from '../utils/actions';
import { Context } from '../components/Store';
const useStyles = makeStyles((theme) => ({
    divimg: {
        height: 'auto',
        backgroundColor: '',
        marginBottom: '10px'
    },
    img: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: '100%',
        height: 'auto',

        color: '#000',
        fontSize: 75,
    },
    paper: {
        minHeight: 520,
    },
    title: {
        marginBottom: '5px'
    },
}));
export default function Home() {
    const classes = useStyles();
    const [processes, setProcesses] = React.useState([]);
    const [, dispatch] = React.useContext(Context);

    const fetchStudents = async () => {
        try {
            dispatch(setLoading(true))

            const response = await api.getStudentMainProcess();
            const result = response.data.data;
            setProcesses(result)
            dispatch(setLoading(false))

        } catch (error) {
            console.log(error)
        }
    };
    const fetchProfessor = async () => {
        try {
            dispatch(setLoading(true))

            const response = await api.getProfessorMainProcess();
            const result = response.data.data;
            setProcesses(result)
            dispatch(setLoading(false))

        } catch (error) {
            console.log(error)
        }
    };
    const fetchAdmin = async () => {
        try {
            dispatch(setLoading(true))

            const response = await api.getMainProcess();
            const result = response.data.data;

            setProcesses(result)
            dispatch(setLoading(false))

        } catch (error) {
            console.log(error)
        }
    };

    React.useEffect(() => {
        if (is('administrador')) {
            fetchAdmin();
        } else if (is('professor_orientador | professor_disciplina')) {
            fetchProfessor();
        } else {
            fetchStudents();
        }

    }, []);

    return (
        <div>
            <Container>
                <div className={classes.divimg}>
                    <Carousel navButtonsAlwaysVisible={true}>
                        <img className={classes.img} src={`${asset('img/banner.png')}`} />
                        <img className={classes.img} src={`${asset('img/banner1.png')}`} />
                        <img className={classes.img} src={`${asset('img/banner2.jpg')}`} />
                    </Carousel>
                </div>
                <Paper className={classes.paper}>
                    <Container>

                        <Typography className={classes.title} variant="h4">
                            Projetos Ativos
                        </Typography>
                        {processes.map((row, index) => <ProcessCard userProcess={row} key={index} />)}
                    </Container>
                </Paper>
            </Container>
        </div>
    )
}