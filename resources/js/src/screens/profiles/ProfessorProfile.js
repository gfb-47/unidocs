import React from 'react'
import Header from './components/Header';
import ProfessorSection from './components/ProfessorSection';
import NavBar from '../../components/Navbar'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const state =({
    nome:'Alex Coelho',
    email:'alex1234@unitins.com',
    curso:'Sistemas de Informação, Direito',
    telefone:'(063)98497-9022'
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

export default function ProfessorProfile(){
    const classes = useStyles();
    /*style={{ backgroundColor: '#cfe8fc', height: '30vh' }}*/
    return(
        <div className={classes.root}>
            <NavBar></NavBar>
            <div className={classes.grown}></div>
            <main className={classes.main}>
                <Header nome={state.nome} cor='#3E66FB'></Header>
                <Grid container justify="center">
                    <Grid sm={11} xl={10}>
                        <ProfessorSection nome={state.nome} email={state.email} curso={state.curso} telefone={state.telefone}/>
                    </Grid> 
                </Grid> 
            </main>
        </div>
    )
}