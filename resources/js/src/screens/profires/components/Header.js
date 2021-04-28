import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const userStyles = makeStyles({
    top:{
        width:'100%',
        height:'20vh',
        marginTop:'-63px',
        marginBottom:'65px',
    },
    content:{
        padding:'40px',
        marginLeft:'3%',
        display:'flex',
        alignItems:'center'
    },
    avatar:{
        width:'65px',
        height:'65px'
    }
});

export default function TopContent(props){
    const classes = userStyles();
    return(
        <div className={classes.top} style={{backgroundColor:props.cor}}>
            <div className={classes.content}>
                <Avatar alt={props.nome} src="/" className={classes.avatar} style={{marginRight:'10px'}}/>
                <Typography variant="h4">
                    {props.nome}
                </Typography>
            </div>
        </div>
    );
}