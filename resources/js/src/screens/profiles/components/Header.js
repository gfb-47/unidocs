import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    header: {
        width: '100%',
        height: 200,
        marginBottom: 40,
        display: 'flex',
    },
    content: {
        alignItems: 'center',
        display: 'flex',
        alignSelf: 'center',
    },
    avatar: {
        width: '5rem',
        height: '5rem',
        fontSize: '3rem',
        fontWeight: 'bold',
        marginLeft: 240,
        marginRight: theme.spacing(5),
    },
    typography: {
        color: "#000",
        fontWeight: 600,
    }
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <div
            className={classes.header}
            style={{
                backgroundColor: `${props.cor}40`
            }}
        >
            <div className={classes.content}>
                <Avatar
                    className={classes.avatar}
                    style={{
                        backgroundColor: `${props.cor}66`,
                        color: `${props.cor}`
                    }}
                >
                    B
                </Avatar>

                <Typography variant="h4" className={classes.typography}>
                    {props.nome}
                </Typography>
            </div>
        </div>
    );
}