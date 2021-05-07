import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: '0 8px',
  },
  container: {
    width: '100%',
    display: 'block',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    minHeight: 640,
    margin: '0 128px'
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  status: {
    display: 'flex',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: theme.spacing(1),
  },
  title: {
    fontSize: '2.25rem',
  },
  subtitle: {
    fontSize: '0.875rem',
    opacity: 0.5,
  },
  knowladgeArea: {
    display: 'flex',
    alignItems: 'center',
  },
  dataWrapper: {
  },
  dataHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  dataTitle: {
    opacity: 0.75,
  },
  data: {
    fontSize: '0.75rem',
    fontWeight: 400,
  },
  descriptionWrapper: {
    paddingLeft: theme.spacing(2),
  },
  description: {
    paddingLeft: theme.spacing(3),
  },
  footer: {
    margin: theme.spacing(3),
    textAlign: 'right'
  },

}));

export default function ProcessDetails() {
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular', color: '#673ab7' },
    { key: 1, label: 'jQuery', color: '#3f51b5' },
    { key: 2, label: 'Polymer', color: '#f44336' },
    { key: 3, label: 'React', color: '#8bc34a' },
    { key: 4, label: 'Vue.js', color: '#ff9800' },
  ]);

  return (
    <div className={classes.container}>
      <Paper className={classes.card}>
        <div className={classes.header}>
          <div className={classes.status}>
            <AssignmentIcon style={{ color: '#FF9900' }} />
            <Typography className={classes.statusText} style={{ color: '#FF9900' }}>
              Em Desenvolvimento
              </Typography>
          </div>
          <Typography variant="h4">
            Os diferentes usos para o paralax e como ele altera o campo de trabalho de CSS e HTML
            </Typography>
          <Typography className={classes.subtitle}>
            Última atualização: September 14, 2016
            </Typography>
        </div>

        <Divider light />

        <Grid container>
          <Grid item xs={4}>
            <div className={classes.dataWrapper}>
              <div className={classes.dataHeader}>
                <Typography variant="h5">
                  Dados do Projeto
                </Typography>

                <IconButton color="primary">
                  <CreateIcon />
                </IconButton>
              </div>

              <List component="nav">
                <ListItem >
                  <ListItemText primary="Orientador" className={classes.dataTitle} />
                  <ListItemText primary="123@123.com" className={classes.data} />
                </ListItem>
                <Divider light />
                <ListItem >
                  <ListItemText primary="Áreas de Conhecimento" className={classes.dataTitle} />
                  <ListItemText primary="" className={classes.data} >oi teste</ListItemText>
                </ListItem>
                <Divider light />
                <ListItem >
                  <ListItemText primary="Semestre" className={classes.dataTitle} />
                  <ListItemText primary="2021.1/TCC" className={classes.data} />
                </ListItem>
                <Divider light />
                <ListItem >
                  <ListItemText primary="Nota" className={classes.dataTitle} />
                  <ListItemText primary="-" className={classes.data} />
                </ListItem>
                <Divider light />
              </List>
            </div>

            <br />
            <br />

            <div className={classes.dataWrapper}>
              <div className={classes.dataHeader}>
                <Typography variant="h5">
                  Dados da Banca
                </Typography>

                <IconButton color="primary">
                  <CreateIcon />
                </IconButton>
              </div>

              <List component="nav">
                <ListItem >
                  <ListItemText primary="Membros" className={classes.dataTitle} />
                  <ListItemText primary="123@123.com" className={classes.data} />
                </ListItem>
                <Divider light />
                <ListItem >
                  <ListItemText primary="Áreas de Conhecimento" className={classes.dataTitle} />
                  <ListItemText primary="" className={classes.data} >oi teste</ListItemText>
                </ListItem>
                <Divider light />
                <ListItem >
                  <ListItemText primary="Semestre" className={classes.dataTitle} />
                  <ListItemText primary="2021.1/TCC" className={classes.data} />
                </ListItem>
                <Divider light />
                <ListItem >
                  <ListItemText primary="Nota" className={classes.dataTitle} />
                  <ListItemText primary="-" className={classes.data} />
                </ListItem>
                <Divider light />
              </List>
            </div>
          </Grid>

          <Divider orientation="vertical" flexItem />

          <Grid item xs={7}>
            <div className={classes.descriptionWrapper}>
              <div className={classes.dataHeader}>
                <Typography variant="h5">
                  Descrição
                </Typography>
              </div>
              <div className={classes.description}>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus. Tempus egestas sed sed risus. Nec nam aliquam sem et tortor consequat id porta nibh. Tempor commodo ullamcorper a lacus vestibulum sed. Sagittis vitae et leo duis ut. Sagittis nisl rhoncus mattis rhoncus. Accumsan tortor posuere ac ut consequat semper viverra nam. Est sit amet facilisis magna. Massa enim nec dui nunc mattis enim. Porta non pulvinar neque laoreet suspendisse. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Posuere lorem ipsum dolor sit. Turpis egestas sed tempus urna et pharetra pharetra massa. Ac placerat vestibulum lectus mauris. Fermentum dui faucibus in ornare quam viverra orci sagittis.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Sit amet risus nullam eget felis eget. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Vulputate dignissim suspendisse in est ante. Risus feugiat in ante metus dictum at tempor commodo. Dui accumsan sit amet nulla facilisi. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Semper viverra nam libero justo laoreet sit. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Bibendum at varius vel pharetra. Eu nisl nunc mi ipsum. Aliquet lectus proin nibh nisl. Proin fermentum leo vel orci. Massa massa ultricies mi quis. Aenean euismod elementum nisi quis eleifend quam adipiscing. Cras pulvinar mattis nunc sed. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Volutpat blandit aliquam etiam erat velit scelerisque. Gravida arcu ac tortor dignissim convallis aenean et tortor.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Egestas pretium aenean pharetra magna ac placerat. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Erat nam at lectus urna duis. Enim tortor at auctor urna nunc id cursus metus. Nec feugiat nisl pretium fusce id velit. Elementum facilisis leo vel fringilla. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Iaculis urna id volutpat lacus laoreet non. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Aenean sed adipiscing diam donec. Amet nulla facilisi morbi tempus iaculis urna id.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider light />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.footer}>
              <Button
                href='#'
                variant='contained' 
                color='primary' 
                className={classes.margin}
              >
                Rejeitar Orientação
              </Button>
              <Button
                href='documents'
                variant='contained' 
                color='primary' 
                className={classes.margin}
              >
                Meus Documentos
              </Button>
              <Button
                href='jury'
                variant='contained' 
                color='primary' 
                className={classes.margin}
              >
                Formar Banca
              </Button>
              <Button
                href='workplan'
                variant='contained' 
                color='primary' 
                className={classes.margin}
              >
                Plano de Trabalho
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>

  )
}