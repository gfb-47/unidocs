import React from 'react'
import Header from './components/Header';
import ProfessorSection from './components/ProfessorSection';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';

const state = ({
    nome: 'Alex Coelho',
    email: 'alex1234@unitins.com',
    curso: 'Sistemas de Informação, Direito',
    telefone: '(063)98497-9022',
    cor: '#9c27b0'
})
const useStyles = makeStyles({

})

export default function ProfessorProfile() {
    const classes = useStyles();

    return (
        <>
            <Header nome={state.nome} cor={state.cor} />

            <Container>
                <ProfessorSection 
                    nome={state.nome} 
                    email={state.email} 
                    curso={state.curso} 
                    telefone={state.telefone} 
                />
            </Container>
        </>
    )
}