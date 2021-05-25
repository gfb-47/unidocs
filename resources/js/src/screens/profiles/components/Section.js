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

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updateProfile({ phone });
            history.push('/unidocs/profile');
        } catch (e) {
            console.log('error');
        }
        setLoading(false);
        setOpenChangePhone(false);
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
                <DialogTitle id="form-dialog-title">
                    Altere a sua senha
                    </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Preencha ambos os campos abaixo.
                    </DialogContentText>
                    <TextField
                        className={classes.margin}
                        autoFocus
                        variant="outlined"
                        label="Senha Atual"
                        fullWidth
                    />
                    <TextField
                        className={classes.margin}
                        variant="outlined"
                        label="Nova Senha"
                        fullWidth
                    />
                    <TextField
                        className={classes.margin}
                        variant="outlined"
                        label="Repetir Nova Senha"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseChangePassword} color="secondary">
                        Cancelar
                    </Button>
                    <Button onClick={handleCloseChangePassword} color="primary">
                        Trocar Senha
                    </Button>
                </DialogActions>
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
                    <Button onClick={onEditSubmit} disabled={loading} color="primary" type="button">
                        {loading ? 'Loading...': 'Confirmar'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}