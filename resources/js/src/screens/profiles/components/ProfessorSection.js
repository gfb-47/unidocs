import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import '../../../styles/profile_style.css';
import { List, ListItem, ListItemText, Divider, CardActions, ListItemIcon, IconButton } from '@material-ui/core';
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
        margin: '0 40px',
    },
    dataTitle: {
        opacity: 0.75,
    },
}));

export default function ProfessorSection(props) {
    const classes = useStyles();

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
                                <ListItemText primary="Email" className={classes.dataTitle}/>
                                <ListItemText primary={props.email} />
                            </ListItem>
                            <Divider light />
                            <ListItem >
                                <ListItemText primary="Curso" className={classes.dataTitle}/>
                                <ListItemText primary={props.curso} />
                            </ListItem>
                            <Divider light />
                            <ListItem >
                                <ListItemText primary="Telefone" className={classes.dataTitle}/>
                                <ListItemText primary={props.telefone} />
                                <ListItemIcon>
                                    <IconButton color="primary">
                                        <CreateIcon />
                                    </IconButton>
                                </ListItemIcon>
                            </ListItem>
                        </List>
                    </div>

                    <Divider orientation="vertical" flexItem />

                    <div className={classes.knowladgeAreas}>

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
                    </div>

                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button variant="contained" size="medium" color="primary">
                        Alterar Senha
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}