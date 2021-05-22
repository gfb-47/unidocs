import React from 'react'
import Header from './components/Header';
import Section from './components/Section';
import api from '../../api/profile';
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
    
    const [profile, setProfile] = React.useState([]);
    const fetchProfile = () => {
        api.getProfile().then(res => {
            const result = res.data.data;
            setProfile(result);
        });
    };
    React.useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <>
            <Header nome={profile.name} cor={state.cor} />
            <Container>
                <Section 
                    updated={profile.updated_at}
                    nome={profile.name}
                    email={profile.email}
                    telefone={profile.phone}
                />
            </Container>
        </>
    )
}