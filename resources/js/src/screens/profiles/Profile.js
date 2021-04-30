import React from 'react'
import Header from './components/Header';
import Section from './components/Section';
import NavBar from '../../components/Navbar'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const state =({
    nome:'Duardo Rocha',
    email:'dudurocha@unitins.com',
    curso:'Sistemas de Informação',
    telefone:'(063)98490-9022'
})
const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column',
    },
    main:{
        height:'100vh',
    },
    grown:{
        minHeight:'64px'
    }
})

export default function Profile(){
    const classes = useStyles();
    /*style={{ backgroundColor: '#cfe8fc', height: '30vh' }}*/
    return(
        <div className={classes.root}>
            <NavBar></NavBar>
            <div className={classes.grown}></div>
            <main className={classes.main}>
                <Header nome={state.nome} cor='#90EE90'></Header>
                <Grid container justify="center">
                    <Grid sm={11}>
                        <Section nome={state.nome} email={state.email} curso={state.curso} telefone={state.telefone}></Section>
                    </Grid> 
                </Grid> 
            </main>
        </div>
    )
}