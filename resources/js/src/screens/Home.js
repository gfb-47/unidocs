import React from 'react';
import { Chip, Container, Divider, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProcessCard from '../components/ProcessCard/ProcessCard'

const useStyles = makeStyles((theme) => ({
    img: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: '#C4C4C4',
        width: '100%',
        height: 200,

        color: '#000',
        fontSize: 75,
    },
    paper: {
        minHeight: 520,
    },
    title: {

    },
}));
export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Container>
                <div className={classes.img}>
                    IMG
                </div>
                <Paper className={classes.paper}>
                    <Container>

                        <Typography className={classes.title} variant="h4">
                            Projetos Ativos
                        </Typography>

                        {/*Map de cada projeto ativo*/}
                        <ProcessCard/>
                        
                        <ProcessCard/>

                    </Container>
                </Paper>
            </Container>
        </div>
    )
}