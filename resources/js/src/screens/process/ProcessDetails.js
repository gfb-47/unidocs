import React from 'react'
import api from '../../api/process';
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import ModalAdvisor from "./ModalAdvisor";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { is } from '../../utils/permissions';
import { setLoading } from '../../utils/actions';
import { Context } from '../../components/Store';
import { Controller, useForm } from 'react-hook-form'
import Input from '@material-ui/core/Input';
import * as validation from '../../utils/validation';
import { toast } from 'react-toastify';

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
  const [openAcceptOrientation, setOpenAcceptOrientation] = React.useState(false);
  const [openDefenseDialog, setOpenDefenseDialog] = React.useState(false);
  const [openRejectOrientation, setOpenRejectOrientation] = React.useState(false);
  const [openFinishOrientation, setOpenFinishOrientation] = React.useState(false);
  const [openChangeGrade, setOpenChangeGrade] = React.useState(false);
  const { id } = useParams();
  const [, dispatch] = React.useContext(Context);
  const { handleSubmit, control, reset } = useForm();

  const [processShow, setProcess] = React.useState(null);
  
  const [openAdvisor, setOpenAdvisor] = React.useState(false);
  
  const handleOpenAdvisor = () => {
    setOpenAdvisor(true);
  };

  const handleCloseAdvisor = () => {
    setOpenAdvisor(false);
  };


  const fetchProcessDetails = () => {
    dispatch(setLoading(true));

    api.showProcess(id).then(res => {
      const result = res.data.data;
      setProcess(result);
      dispatch(setLoading(false));

    });
  }

  React.useEffect(() => {
    fetchProcessDetails()
  }, []);

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular', color: '#673ab7' },
    { key: 1, label: 'jQuery', color: '#3f51b5' },
    { key: 2, label: 'Polymer', color: '#f44336' },
    { key: 3, label: 'React', color: '#8bc34a' },
    { key: 4, label: 'Vue.js', color: '#ff9800' },
  ]);

  const handleOpenAcceptOrientation = () => {
    setOpenAcceptOrientation(true);
  };

  const handleCloseAcceptOrientation = () => {
    setOpenAcceptOrientation(false);
  };

  const handleOpenRejectOrientation = () => {
    setOpenRejectOrientation(true);
  };

  const handleOpenDefenseDialog = () => {
    setOpenDefenseDialog(true);
  };

  const handleCloseDefenseDialog = () => {
    setOpenDefenseDialog(false);
  };

  const handleCloseRejectOrientation = () => {
    setOpenRejectOrientation(false);
  };

  const handleOpenChangeGrade = () => {
    setOpenChangeGrade(true);
  };

  const handleCloseChangeGrade = () => {
    setOpenChangeGrade(false);
  };

  const handleOpenFinishOrientation = () => {
    setOpenFinishOrientation(true);
  };

  const handleCloseFinishOrientation = () => {
    setOpenFinishOrientation(false);
  };

  const onAcceptSubmit = async data => {
    try {
      dispatch(setLoading(true))
      await api.acceptOrientation(data, id);
      toast.success('👍 Orientação confirmada Com Sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset({ confirmed: '' });

    } catch (e) {
      toast.error('❌ Erro ao confirmar Orientação', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      dispatch(setLoading(false))
      fetchProcessDetails()
      handleCloseAcceptOrientation()

    }
  }

  const onRejectSubmit = async data => {
    try {
      dispatch(setLoading(true))
      await api.rejectOrientation(data, id);
      toast.success('👍 Orientação rejeitada Com Sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset({ justify: '' });

    } catch (e) {
      toast.error('❌ Erro ao rejeitar Orientação', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      dispatch(setLoading(false))
      fetchProcessDetails()
      handleCloseRejectOrientation()

    }
  }

  const onDefenseSubmit = async data => {
    try {
      dispatch(setLoading(true))
      await api.processToDefense(data, id);
      toast.success('👍 Processo Enviado para defesa', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset({ justify: '' });

    } catch (e) {
      toast.error('❌ Erro ao enviar processo para Defesa', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      dispatch(setLoading(false))
      fetchProcessDetails()
      handleCloseDefenseDialog()

    }
  }

  const onRatingSubmit = async data => {
    try {
      dispatch(setLoading(true))
      data.rating = parseInt(data.rating, 10);
      await api.processRating(data, id);
      toast.success('👍 Processo Enviado para defesa', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset({ justify: '' });

    } catch (e) {
      toast.error('❌ Erro ao enviar processo para Defesa', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      dispatch(setLoading(false))
      fetchProcessDetails()
      handleCloseChangeGrade()

    }
  }

  const onFinishSubmit = async data => {
    try {
      dispatch(setLoading(true))
      data.rating = parseInt(data.rating, 10);
      await api.processFinish(data, id);
      toast.success('👍 Processo Enviado para defesa', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset({ justify: '' });

    } catch (e) {
      toast.error('❌ Erro ao enviar processo para Defesa', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      dispatch(setLoading(false))
      fetchProcessDetails()
      handleCloseFinishOrientation()

    }
  }

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
              {is('administrador | professor_orientador') && processShow?.status == 2 &&
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.margin}
                  onClick={handleOpenRejectOrientation}
                >
                  Rejeitar Orientação
                </Button>}
              {is('administrador | professor_orientador') && processShow?.status == 2 && <Button
                variant='contained'
                color='primary'
                className={classes.margin}
                onClick={handleOpenAcceptOrientation}
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
                variant='contained'
                color='primary'
                className={classes.margin}
                onClick={handleOpenChangeGrade}
              >
                Avaliar Defesa
              </Button>}
              {is('administrador | professor_orientador') && processShow?.status == 3 && <Button
                href='#'
                variant='contained'
                color='primary'
                className={classes.margin}
                onClick={handleOpenDefenseDialog}
              >
                Apto Para Defesa
              </Button>}
              {is('administrador | professor_disciplina') && processShow?.status == 1 && <Button
                href='#'
                onClick={handleOpenAdvisor}
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
                onClick={handleOpenFinishOrientation}
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

      <Dialog
        open={openAcceptOrientation}
        onClose={handleCloseAcceptOrientation}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Aceitar Orientação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={{ color: 'red' }} >Atenção, esta ação é irreversível, tem certeza que deseja confirmar a orientação para este processo?</span>
          </DialogContentText>

          <DialogActions>
            <Button onClick={handleCloseAcceptOrientation} color="secondary">
              Cancelar
          </Button>
            <Button onClick={() => onAcceptSubmit({ confirmed: true })} color="primary" type="button">
              Aceitar Orientação
          </Button>

          </DialogActions>

        </DialogContent>


      </Dialog>

      <Dialog
        open={openRejectOrientation}
        onClose={handleCloseRejectOrientation}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Rejeitar Orientação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha o campo abaixo para rejeitar a orientação
          </DialogContentText>
          <Controller
            name="justify"
            control={control}
            defaultValue=""
            rules={validation.justifyValidation}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                id="reason"
                className={classes.margin}
                autoFocus
                multiline
                rows={8}
                error={!!error}
                helperText={error ? error.message : null}
                variant="outlined"
                label="Justificativa"
                fullWidth
                value={value}
                onChange={onChange}
              />
            )}
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRejectOrientation} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit(onRejectSubmit)} color="primary" type="button">
            Rejeitar Orientação
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDefenseDialog}
        onClose={handleCloseDefenseDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enviar para defesa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={{ color: 'red' }} >Atenção, esta ação é irreversível. Tem certeza que deseja enviar o processo do aluno para criação das bancas</span>
          </DialogContentText>

          <DialogActions>
            <Button onClick={handleCloseDefenseDialog} color="secondary">
              Cancelar
          </Button>
            <Button onClick={() => onDefenseSubmit({ confirmed: true })} color="primary" type="button">
              Enviar para defesa do processo
          </Button>

          </DialogActions>

        </DialogContent>


      </Dialog>

      <Dialog
        open={openChangeGrade}
        onClose={handleCloseChangeGrade}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Definir Nota do Processo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha a nota do processo
          </DialogContentText>
          <Controller
            name="rating"
            control={control}
            defaultValue=""
            rules={validation.ratingValidation}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Input
                className={classes.margin}
                autoFocus
                error={!!error}
                variant="outlined"
                placeholder="Nota"
                fullWidth
                value={value}
                onChange={onChange}
                inputProps={{
                  step: 0.1,
                  min: 0,
                  max: 10,
                  type: 'number',
                }}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseChangeGrade} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit(onRatingSubmit)} color="primary" type="button">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openFinishOrientation}
        onClose={handleCloseFinishOrientation}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Finalizar Processo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={{ color: 'red' }} >Atenção, esta ação é irreversível. Tem certeza que deseja finalizar o processo deste aluno?</span>
          </DialogContentText>

          <DialogActions>
            <Button onClick={handleCloseFinishOrientation} color="secondary">
              Cancelar
          </Button>
            <Button onClick={() => onFinishSubmit({ confirmed: true })} color="primary" type="button">
              Finalizar Processo
          </Button>

          </DialogActions>

        </DialogContent>


      </Dialog>
      <Dialog
        open={openAdvisor}
        onClose={handleCloseAdvisor}
        aria-labelledby="form-dialog-title"
        fullWidth = 'false'
        maxWidth = 'lg'
      >
        <DialogTitle id="form-dialog-title">Selecionar Professor Orientador</DialogTitle>
        <DialogContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
          <TextField
          id="standard-helperText"
          label="Nome do Professor"
          helperText="Filtre o professor pelo nome"
          />
          <Button variant="contained" color="primary">
            Finalizar Seleção
          </Button>
          </Grid>
          <ModalAdvisor></ModalAdvisor>
        </DialogContent>
      </Dialog>
    </div>

  )
}