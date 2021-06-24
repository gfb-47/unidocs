import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  status: {
    display: 'flex',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: theme.spacing(1),
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 500,
  },
}));

export default function KnowladgeAreaBadge(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.status}>
        <AssignmentIcon style={{ color: '#FF9900' }} />
        <Typography className={classes.statusText} style={{ color: '#FF9900' }}>
          Em Desenvolvimento
        </Typography>
      </div>
      <Typography className={classes.title} variant="h6">
        {props.title}
      </Typography>
    </div>
  );
}