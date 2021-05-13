import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    }
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

                </Paper>
            </Container>
        </div>
    )
}