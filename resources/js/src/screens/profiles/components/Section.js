import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';

const userStyles = makeStyles({
    top:{
        padding:'30px',
    },
    spaceContent:{
        display:'grid', 
        gridTemplateColumns: '30% 1fr auto',
        marginBottom:'20px',
        borderBottom:'1px solid #f1f1f1',
    },
    buttonIcon:{
        cursor:'pointer',
        color:'blue',
        width:'30px',
        border:'2px solid #000',
        borderRadius:'5px'
    },
    button:{
        backgroundColor:'#0E4DA4',
        textTransform:'none'
    },
    boxButton:{
        marginTop:'40px',
    },
})

export default function MainContent(props){
    const classes = userStyles();
    return(
        <Paper elevation={3}>
            <div className={classes.top}>
                <Typography variant="h4">
                    Dados Pessoais
                </Typography>
                <Typography variant="caption">
                    Última Atualização: 23 setembro de 2021
                </Typography>
                <div style={{marginTop:'20px'}}>
                    <div className={classes.spaceContent}>
                        <label className={classes.label}>Email:</label>
                        <p style={{textAlign:'left'}}>{props.email}</p>
                    </div>
                    <div className={classes.spaceContent}>
                        <label className={classes.label} >Curso:</label>
                        <p style={{textAlign:'left'}}>{props.curso}</p>
                    </div>
                    <div className={classes.spaceContent}>
                        <label className={classes.label}>Telefone:</label>
                        <p style={{textAlign:'left'}}>{props.telefone}</p>
                        <CreateIcon className={classes.buttonIcon}></CreateIcon>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div></div>
                    <div className={classes.boxButton}>
                        <Button variant="contained" size="medium" color="secondary" className={classes.button}>
                            Alterar Senha
                        </Button>
                    </div>
                </div>
            </div>
        </Paper>
    )
}