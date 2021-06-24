import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import KnowladgeAreaBadge from '../KnowladgeAreaBadge';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  chips: {
    margin: '5px 16px',
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    paddingLeft: theme.spacing(2),
  },
  typography: {
    fontWeight: 400,
    fontSize: "1rem",
  },
}));

export default function ProcessCardKnowladgeArea(props) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {/*
      <Typography className={classes.typography}>
        Áreas de Conhecimento
      </Typography>
      */}
      <div className={classes.chips}>
        {/*Fazer um Map para preenchimento automatico*/}
        <KnowladgeAreaBadge
          knowladgeArea="IA"
          color="#673ab7"
        />
        <KnowladgeAreaBadge
          knowladgeArea="IA"
          color="#673ab7"
        />
        <KnowladgeAreaBadge
          knowladgeArea="IA"
          color="#673ab7"
        />
        <KnowladgeAreaBadge
          knowladgeArea="IA"
          color="#673ab7"
        />
      </div>
    </div>
  );
}