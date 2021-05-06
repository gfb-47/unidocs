import React from 'react'
import Header from './components/Header';
import Section from './components/Section';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';

const state = ({
    nome: 'Eduardo Rocha',
    email: 'dundun@unitins.com',
    curso: 'Sistemas de Informação',
    telefone: '(063)97777-5888',
    cor: '#009688'
})
const useStyles = makeStyles({

})

export default function Profile() {
    const classes = useStyles();

    return (
        <>
            <Header nome={state.nome} cor={state.cor} />

            <Container>
                <Section 
                    nome={state.nome} 
                    email={state.email} 
                    curso={state.curso} 
                    telefone={state.telefone} 
                />
            </Container>
        </>
    )
}