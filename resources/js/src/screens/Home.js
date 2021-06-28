import React from 'react';
import { Chip, Container, Divider, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProcessCard from '../components/ProcessCard/ProcessCard'
import Carousel from 'react-material-ui-carousel'
import api from '../api/mainIndex';
import { is } from '../utils/permissions';
import { setLoading } from '../utils/actions';
import { Context } from '../components/Store';
import axios from 'axios';
import cheerio from 'cheerio';

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
    const [img, setImg] = React.useState([]);
    const [, dispatch] = React.useContext(Context);

    const fetchImages = async () => {
        const { data } = await axios.get('https://www.unitins.br/nPortal/', {
            transformRequest: (data, headers) => {
                delete headers.common['Authorization'];
                delete headers.common['X-CSRF-TOKEN'];
                delete headers.common['X-Requested-With'];
                return data;
            }
        });
        const $ = cheerio.load(data)
        const images = []
        $('div.carousel-item').each((index, element) => {
            const src = $(element).find('img').attr('src');
            images.push(src);
        });
        setImg(images)


    }

    const fetchStudents = async () => {
        try {
            dispatch(setLoading(true))

            const response = await api.getStudentMainProcess();
            const result = response.data.data;
            setProcesses(result)
            await fetchImages()
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
            fetchImages()

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
            fetchImages()

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
                        {img.map((src, index) => <img className={classes.img} key={index} src={src} />)}
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