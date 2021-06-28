import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Header from './components/Header';
import Section from './components/Section';
import api from '../../api/profile';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import { setLoading } from '../../utils/actions';
import { Context } from '../../components/Store';

const useStyles = makeStyles({

})

export default function Profile() {
    const classes = useStyles();
    const [, dispatch] = React.useContext(Context);

    const history = useHistory();
    const [profile, setProfile] = React.useState([]);
    const fetchProfile = () => {
        dispatch(setLoading(true));

        api.getProfile().then(res => {
            const result = res.data.data;
            setProfile(result);
            dispatch(setLoading(false));

        });
        history.push('/unidocs/profile');
    };
    React.useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <>
            <Header nome={profile.name} cor={profile.color} />
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