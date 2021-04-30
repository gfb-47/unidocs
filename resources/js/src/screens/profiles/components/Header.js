import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const userStyles = makeStyles({
    header:{
        width:'100%',
        height:'25vh',
        marginTop:'-64px',
        marginBottom:'65px',
        opacity:'0.4',
    },
    content:{
        padding:'40px',
        marginLeft:'3%',
        display:'flex',
        alignItems:'center'
    },
    avatar:{
        width:'75px',
        height:'75px',
        fontSize:"25pt",
        fontStyle:'bold',
        color:"blue"
    },
    typography:{
        color:"#fff"
    }
});

export default function TopContent(props){
    const classes = userStyles();
    return(
        <div className={classes.header} style={{backgroundColor:props.cor}}>
            <div className={classes.content}>
                <Avatar alt={props.nome} src="/" className={classes.avatar} style={{marginRight:'10px'}}/>
                <Typography variant="h4" className={classes.typography}>
                    {props.nome}
                </Typography>
            </div>
        </div>
    );
}