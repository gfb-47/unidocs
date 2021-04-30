import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import '../../../styles/profile_style.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const userStyles = makeStyles({
    section:{
        padding:'30px',
        height:'auto',
    },
    allContent:{
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap',
    },
    areas:{
        display:'grid',
        gridTemplateColumns:'auto auto auto',
        marginTop:'15%',
        fontSize:'14pt',
    },
    leftContent:{
        width:'50%',
        borderRight:'2px solid #f1f1f1', 
    },
    rightContent:{
        width:'40%',
    },
    spaceContent:{
        display:'grid', 
        gridTemplateColumns: '30% 1fr auto',
        marginBottom:'20px',
        borderBottom:'2px solid #f1f1f1',
    },
    buttonIcon:{
        cursor:'pointer',
        color:'blue',
        width:'30px',
        border:'2px solid blue',
        borderRadius:'5px',
        marginRight:'70px',
    },
    button:{
        backgroundColor:'#0E4DA4',
        textTransform:'none'
    },
    buttonBox:{
        marginTop:'40px',
        padding:'55px',
    },
})

export default function MainContent(props){
    const classes = userStyles();
    return(
        <Paper elevation={3}>
            <div className={classes.section}>
                <div className={classes.allContent}>
                    <div id="left" className={classes.leftContent}>
                        <Typography variant="h4">
                            Dados Pessoais
                        </Typography>
                        <Typography variant="caption">
                            Última Atualização: 23 setembro de 2021
                        </Typography>
                        <div>
                        <div style={{marginTop:'8%'}}>
                            <div className={classes.spaceContent}>
                                <label className={classes.label}>Email:</label>
                                <Typography variant="p" style={{textAlign:'left'}}>
                                    {props.email}
                                </Typography>
                            </div>
                            <div className={classes.spaceContent}>
                                <label className={classes.label} >Curso:</label>
                                <Typography variant="p" style={{textAlign:'left'}}>
                                    {props.curso}
                                </Typography>
                            </div>
                            <div className={classes.spaceContent}>
                                <label className={classes.label}>Telefone:</label>
                                <Typography variant="p" style={{textAlign:'left'}}>
                                    {props.telefone}
                                </Typography>
                                <CreateIcon className={classes.buttonIcon}></CreateIcon>
                            </div>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <div></div>
                                <div className={classes.buttonBox}>
                                    <Button variant="contained" size="medium" color="secondary" className={classes.button}>
                                        Alterar Senha
                                    </Button>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div id="right" className={classes.rightContent}>
                        <Typography variant="h4">
                            Areas de Conhecimento
                        </Typography>
                        <div className={classes.areas}>
                            <Typography variant="p" style={{border:'2px solid #f1f1f1', marginRight:'5px',color:"#A660CA"}}>
                                Java
                            </Typography>
                            <Typography variant="p" style={{border:'2px solid #f1f1f1',marginRight:'5px',color:"#961543"}} >
                               JavaScript
                            </Typography>
                            <Typography variant="p" style={{border:'2px solid #f1f1f1',marginRight:'10px',color:"#2595B3"}}>
                               Engenharia de Software
                            </Typography>
                            <Typography variant="p" style={{border:'2px solid #f1f1f1',marginRight:'5px',color:"#768B46"}}>
                               IA
                            </Typography>
                        </div>
                        <div style={{marginTop:'5px'}}>
                            <Fab color="primary" aria-label="add" size="small">
                                <AddIcon />
                            </Fab>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}