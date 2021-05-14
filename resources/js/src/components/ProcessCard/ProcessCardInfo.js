import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(2)
  },
  infoWrapper: {

  },
  infoTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  infoName: {
    paddingLeft: theme.spacing(4)
  },
}));

export default function KnowladgeAreaBadge(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.wrapper}>
      <div className={classes.infoWrapper}>
        <div className={classes.infoTitle}>
          <SupervisorAccountIcon />
          <Typography variant="body2">
            <b>Orientador</b>
          </Typography>
        </div>
        <div className={classes.infoName}>
          <Typography variant="body2">
            {props.advisor}
        </Typography>
        </div>
      </div>

      <div className={classes.infoWrapper}>
        <div className={classes.infoTitle}>
          <MenuBookIcon />
          <Typography variant="body2">
            <b>Semestre</b>
          </Typography>
        </div>
        <div className={classes.infoName}>
          <Typography variant="body2">
            {props.semester}
        </Typography>
        </div>
      </div>

      <div className={classes.infoWrapper}>
        <div className={classes.infoTitle}>
          <PersonIcon />
          <Typography variant="body2">
            <b>Aluno</b>
          </Typography>
        </div>
        <div className={classes.infoName}>
          <Typography variant="body2">
            {props.student}
        </Typography>
        </div>
      </div>
    </div>
    </div>
  );
}