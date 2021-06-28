import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  Grid,
  Paper
} from '@material-ui/core';
import ProcessCardInfo from './ProcessCardInfo';
import ProcessCardTitle from './ProcessCardTitle';
import ProcessCardKnowladgeArea from './ProcessCardKnowladgeArea';

const useStyles = makeStyles((theme) => ({
  projectPaper: {
    margin: "8px 16px",
    padding: theme.spacing(2),

  },
}));

export default function ProcessCard({ userProcess }) {
  const classes = useStyles();
  
  return (
    <>
      <Paper elevation={1} className={classes.projectPaper}>
        <Grid container>
          <Grid item xs={8}>

            <ProcessCardTitle
              title={userProcess.title}
            />

            <Divider />

            <ProcessCardInfo
              advisor={userProcess.advise_professor.user.name}
              semester={userProcess.semester.name}
              student={userProcess.student.user.name}
            />

          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item xs={3}>

            <ProcessCardKnowladgeArea

            />

          </Grid>
        </Grid>
      </Paper>
    </>
  );
}