import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import '../../../styles/profile_style.css';
import { List, ListItem, ListItemText, Divider, CardActions, ListItemIcon, IconButton, DialogContent, DialogTitle, Dialog, TextField, DialogActions, DialogContentText } from '@material-ui/core';
import { formatDistance, format } from 'date-fns';
import { useHistory } from 'react-router-dom';
import api from '../../../api/profile';
import { Controller, useForm } from 'react-hook-form'
import * as validation from '../../../utils/validation';

import ptBR from 'date-fns/locale/pt-BR';

const useStyles = makeStyles((theme) => ({
    card: {
        minHeight: 450,
    },
    cardContent: {
        display: 'flex',
    },
    cardActions: {
        marginTop: theme.spacing(3),
        justifyContent: 'flex-end'
    },
    userData: {
        minWidth: '100%'
    },
    dataTitle: {
        opacity: 0.75,
    },
    data: {
        fontSize: '0.75rem',
        fontWeight: 400,
    },
    margin: {
        marginBottom: theme.spacing(2),
    }
}));

export default function Section(props) {
    const classes = useStyles();
    const [openChangePassword, setOpenChangePassword] = React.useState(false);
    const [openChangePhone, setOpenChangePhone] = React.useState(false);

    const { handleSubmit, control, reset } = useForm();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const onPhoneSubmit = async () => {
        setLoading(true);
        try {
            await api.updatePhone({ phone });
            history.push('/unidocs/profile');
        } catch (e) {
            console.log('error');
        }
        setLoading(false);
        setOpenChangePhone(false);
    }

    const onPasswordSubmit = async data => {
        setLoading(true);
        try {
            await api.updatePassword({ data });
            reset({
                password: '',
            });
            history.push('/unidocs/profile');
        } catch (e) {
            console.log('error');
        }
        setLoading(false);
        setOpenChangePassword(false);
    }

    useEffect(() => {
        api.getProfile().then(res => {
            const result = res.data.data;
            setPhone(result.phone);
        })
    }, []);

    const handleOpenChangePassword = () => {
        setOpenChangePassword(true);
    };

    const handleCloseChangePassword = () => {
        setOpenChangePassword(false);
    };

    const handleOpenChangePhone = () => {
        setOpenChangePhone(true);
    };

    const handleCloseChangePhone = () => {
        setOpenChangePhone(false);
    };

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    title="Dados Pessoais"
                    subheader={formatDistance(props.updated
                        ? new Date(props.updated)
                        : new Date(), new Date(), { locale: ptBR })}
                />
                <CardContent className={classes.cardContent}>
                    <div className={classes.userData}>
                        <List component="nav">
                            <ListItem >
                                <ListItemText
                                    primary="Email"
                                    className={classes.dataTitle}
                                />
                                <ListItemText
                                    primary={props.email}
                                    className={classes.data}
                                />
                            </ListItem>
                            <Divider light />
                            <ListItem >
                                <ListItemText
                                    primary="Telefone"
                                    className={classes.dataTitle}
                                />
                                <ListItemText
                                    primary={phone}
                                    className={classes.data}
                                />
                                <ListItemIcon>
                                    <IconButton
                                        color="primary"
                                        onClick={handleOpenChangePhone}
                                    >
                                        <CreateIcon />
                                    </IconButton>
                                </ListItemIcon>
                            </ListItem>
                            <Divider light />
                        </List>
                    </div>

                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        style={{
                            textTransform: 'none',
                        }}
                        onClick={handleOpenChangePassword}
                    >
                        Alterar Senha
                    </Button>
                </CardActions>
            </Card>

            <Dialog
                open={openChangePassword}
                onClose={handleCloseChangePassword}
                aria-labelledby="form-dialog-title"
            >
                <form onSubmit={handleSubmit(onPasswordSubmit)}>
                    <DialogTitle id="form-dialog-title">
                        Altere a sua senha
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Preencha ambos os campos abaixo.
                    </DialogContentText>

                        {/* <Controller
                            name="currentpassword"
                            control={control}
                            defaultValue=""
                            rules={validation.currentPasswordValidation}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (

                                <TextField
                                    className={classes.margin}
                                    autoFocus
                                    variant="outlined"
                                    label="Senha Atual"
                                    fullWidth
                                />
                            )}
                        /> */}

                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={validation.passwordValidation}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (

                                <TextField
                                    id="password"
                                    className={classes.margin}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    variant="outlined"
                                    label="Nova Senha"
                                    value={value}
                                    onChange={onChange}
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="password_confirmation"
                            control={control}
                            defaultValue=""
                            rules={validation.passwordConfirmValidation}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (

                                <TextField
                                    id="password_confirmation"
                                    className={classes.margin}
                                    variant="outlined"
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    label="Repetir Nova Senha"
                                    value={value}
                                    onChange={onChange}
                                    fullWidth
                                />
                            )}
                        />



                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseChangePassword} color="secondary">
                            Cancelar
                    </Button>
                        <Button disabled={loading} color="primary" type="submit" color="primary">
                            {loading ? 'Loading...' : 'Mudar senha'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

            <Dialog
                open={openChangePhone}
                onClose={handleCloseChangePhone}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Altere a seu telefone</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Preencha abaixo o seu número de telefone.
                    </DialogContentText>
                    <TextField
                        className={classes.margin}
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        autoFocus
                        variant="outlined"
                        label="Novo Telefone"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseChangePhone} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={onPhoneSubmit} disabled={loading} color="primary" type="button">
                        {loading ? 'Loading...' : 'Confirmar'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}