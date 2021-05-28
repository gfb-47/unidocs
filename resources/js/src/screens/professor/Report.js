import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import BookIcon from '@material-ui/icons/Book';
import GroupIcon from '@material-ui/icons/Group';
import SchoolIcon from '@material-ui/icons/School';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { ptBR } from "date-fns/locale";
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Avatar, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tab: {
    width: 120,
    borderRadius: 4,
    background: "#fff",
  },
  tabs: {
    marginTop: 50,
    marginLeft: 50,
  },
  tabIcon: {
    fontSize: 25,
  },
  title: {
    fontSize: 15,
  },
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(4),
      width: 455,
    },
  },
  divCard: {
    marginTop: 5,
    marginLeft: 50,
    maxWidth: 1225,
    borderRadius: 20
  },
  card: {
    borderRadius: 10,
  },
  divButton: {
    position: "relative",
    marginTop: -15,
    marginLeft: 978,
    marginBottom: 50,
  },
  schoolIcon: {
    maxWidth: 40.5,
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 100,
    background: 'lightGrey'
  },
  cardContent: {
    marginLeft: 70,
    marginTop: -50,
  },
  typography: {
    fontSize: 12,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: -15,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  headerTitle: {
    paddingLeft: 16,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


export default function Report() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectValue, setSelectedValue] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChange1 = (date) => {
    setSelectedValue(date);
  };

  const [alignment, setAlignment] = React.useState('left');

  const handleFormat = (event, newFormats) => {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };


  return (
    <div>
      <Container>
        <div className={classes.tabs} >
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment">

            <ToggleButton variant="contained" style={{ color: grey[600] }}
              value={alignment}
              value="left" aria-label="left aligned"
              className={classes.tab}
            >
              <Typography component={'span'} paragraph={true}>
                <GroupIcon className={classes.tabIcon} />
                <Typography className={classes.typography} style={{ color: blue[800] }}>
                  Por Banca
                </Typography>
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment">

            <ToggleButton variant="contained"
              value="center" aria-label="centered"
              disabled
              className={classes.tab}
            >
              <Typography component={'span'} paragraph={true}>
                <BookIcon className={classes.tabIcon} />
                <Typography className={classes.typography} style={{ color: blue[800] }}>
                  -----
                </Typography>
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>

          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment">
            <ToggleButton
              variant="contained"
              value="right"
              aria-label="right aligned"
              disabled
              className={classes.tab}
            >
              <Typography component={'span'} paragraph={true} >
                <FavoriteBorderIcon className={classes.tabIcon} />
                <Typography className={classes.typography} style={{ color: blue[800] }}>
                  -----
                </Typography>
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className={classes.divCard}>
          <Card className={classes.card}>
            <CardContent >
              <div className={classes.header}>
                <Avatar className={classes.large}>
                  <SchoolIcon fontSize="large" />
                </Avatar>
                <div className={classes.headerTitle}>
                  <Typography variant="h4">
                    Gerar Relatório
                  </Typography>
                  <Typography variant="subtitle1">
                    Baixe um relatório com as informações que você precisa.
                  </Typography>
                </div>
              </div>

              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                <Grid container justify="space-around">
                  <FormControl className={classes.root}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      inputVariant="outlined"
                      format="dd/MM/yyyy"
                      maxDate={new Date()}
                      id="standard-required"
                      label="Data de Início do Relatório"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </FormControl>

                  <FormControl className={classes.root}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      inputVariant="outlined"
                      format="dd/MM/yyyy"
                      minDate={selectedDate}
                      maxDate={new Date()}
                      minDateMessage="Escolha uma Data Posterior à Data de Início"
                      locale='ptBR'
                      id="date-picker-inline"
                      label="Data de Fim do Relatório"
                      value={selectValue}
                      onChange={handleDateChange1}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </FormControl>
                </Grid>
              </MuiPickersUtilsProvider>
            </CardContent>
            <CardActions>
              <div className={classes.divButton}>
                <Button variant="contained" color="primary" className={classes.typography}>
                  Gerar Relatório
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
      </Container>
    </div>

  )
};
