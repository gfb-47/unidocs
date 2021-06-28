import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import '../../../styles/profile_style.css';
import { List, ListItem, ListItemText, Divider, CardActions, ListItemIcon, IconButton, DialogContent, DialogTitle, Dialog, TextField, DialogActions, DialogContentText } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

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
    knowladgeAreas: {
        minWidth: '45%'
    },
    userData: {
        minWidth: '45%'
    },
    chips: {
        margin: '5px 40px',
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

export default function ProfessorSection(props) {
    const classes = useStyles();
    const [openChangePassword, setOpenChangePassword] = React.useState(false);
    const [openChangePhone, setOpenChangePhone] = React.useState(false);

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
                    subheader="Última Atualização: 23 setembro de 2021"
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
                                    primary="Curso"
                                    className={classes.dataTitle}
                                />
                                <ListItemText
                                    primary={props.curso}
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
                                    primary={props.telefone}
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
                        </List>
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <div className={classes.knowladgeAreas}>
                {/*
                        <Typography variant="h5" align="center">
                            Areas de Conhecimento
                        </Typography>

                        <div className={classes.chips}>
                            <Chip
                                label="Basic"
                                variant="outlined"
                                style={{
                                    fontWeight: 600,
                                    borderRadius: 4,
                                    color: '#f44336',
                                    border: '1px solid #f4433666',
                                    margin: '4px',
                                }}
                            />
                        </div>
                            */}
                    </div>

                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
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
                <DialogTitle id="form-dialog-title">Altere a sua senha</DialogTitle>
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
                <DialogTitle id="form-dialog-title">
                    Altere a seu telefone
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Preencha abaixo o seu número de telefone.
                    </DialogContentText>
                    <TextField
                        className={classes.margin}
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
                    <Button onClick={handleCloseChangePhone} color="primary">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}