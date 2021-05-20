import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import '../../../styles/profile_style.css';
import { List, ListItem, ListItemText, Divider, CardActions, ListItemIcon, IconButton } from '@material-ui/core';
import { formatDistance, format } from 'date-fns';
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
}));

export default function Section(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    title="Dados Pessoais"
                    subheader = {formatDistance(props.updated ? new Date(props.updated) : new Date(), new Date(), { locale: ptBR })}
                />
                <CardContent className={classes.cardContent}>
                    <div className={classes.userData}>
                        <List component="nav">
                            <ListItem >
                                <ListItemText primary="Email" className={classes.dataTitle}/>
                                <ListItemText primary={props.email} className={classes.data} />
                            </ListItem>
                            <Divider light />
                            <ListItem >
                                <ListItemText primary="Telefone" className={classes.dataTitle}/>
                                <ListItemText primary={props.telefone} className={classes.data} />
                                <ListItemIcon>
                                    <IconButton color="primary">
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
                    >
                        Alterar Senha
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}