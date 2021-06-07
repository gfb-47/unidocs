import React from 'react'
import api from '../../api/process';
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { is } from '../../utils/permissions';
import { setLoading } from '../../utils/actions';
import { Context } from '../../components/Store';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: '4px 8px',
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
  const { id } = useParams();
  const [, dispatch] = React.useContext(Context);

  const [processShow, setProcess] = React.useState(null);
  React.useEffect(() => {
    dispatch(setLoading(true));

    api.showProcess(id).then(res => {
      const result = res.data.data;
      setProcess(result);
      dispatch(setLoading(false));

    });
  }, []);
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
              {processShow?.status_name || ''}
            </Typography>
          </div>
          <Typography variant="h4">
            {processShow?.title || ''}
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
                  <ListItemText primary={processShow?.advise_professor.user.name || ''} className={classes.data} />
                </ListItem>
                <Divider light />
                <ListItem >
                  <ListItemText primary="Áreas de Conhecimento" className={classes.dataTitle} />
                  <ListItemText primary="" className={classes.data} >oi teste</ListItemText>
                </ListItem>
                <Divider light />
                <ListItem >
                  <ListItemText primary="Semestre" className={classes.dataTitle} />
                  <ListItemText primary={processShow?.semester.name || ''} className={classes.data} />
                </ListItem>
                <Divider light />
                <ListItem >
                  <ListItemText primary="Nota" className={classes.dataTitle} />
                  <ListItemText primary={processShow?.rating} className={classes.data} />
                </ListItem>
                <Divider light />
              </List>
            </div>

            <br />
            <br />

            {processShow?.jury && <div className={classes.dataWrapper}>
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
            </div>}
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
                  {processShow?.content || ''}
                </Typography>

              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider light />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.footer}>
              {is('administrador | professor_orientador') && processShow?.status == 2 && <Button
                href='#'
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Rejeitar Orientação
              </Button>}
              {is('administrador | professor_orientador') && processShow?.status == 2 && <Button
                href='#'
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Aceitar Orientação
              </Button>}
              {is('administrador | professor_disciplina') && processShow?.status == 4 && processShow?.jury != null && <Button
                href='#'
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Gerar Ata De Apresentação
              </Button>}
              {is('administrador | professor_orientador') && processShow?.status == 4 && processShow?.jury != null && <Button
                href='#'
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Avaliar Defesa
              </Button>}
              {is('administrador | professor_orientador') && processShow?.status == 3 && <Button
                href='#'
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Apto Para Defesa
              </Button>}
              {is('administrador | professor_disciplina') && processShow?.status == 1 && <Button
                href='#'
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Indicar Orientador
              </Button>}
              {is('administrador | professor_orientador') && processShow?.status == 4 && processShow?.jury == null && <Button
                href='jury'
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Formar Banca
              </Button>}
              {is('administrador | professor_orientador') && processShow?.status == 5 && <Button
                href='workplan'
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Finalizar Projeto
              </Button>}
              <Button
                href='workplan'
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Plano de Trabalho
              </Button>
              <Button
                href={`/unidocs/process/documents/${id}`}
                variant='contained'
                color='primary'
                className={classes.margin}
              >
                Meus Documentos
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>

  )
}