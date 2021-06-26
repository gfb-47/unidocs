import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Checkbox, Chip, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import AddIcon from '@material-ui/icons/Add';
import { Controller, useForm } from 'react-hook-form'
import * as validation from '../../utils/validation';
import Autocomplete from '@material-ui/lab/Autocomplete';
import api from '../../api/process';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router'
import { toast } from 'react-toastify';
import { Context } from '../../components/Store';
import { setLoading } from '../../utils/actions';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  formControl: {
    minWidth: '100%',
  },
  card: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    width: '100%',
    minHeight: 640,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  headerTitle: {
    paddingLeft: 16,
  },
  knowladgeArea: {
    display: 'flex',
    alignItems: 'center',
  },
  chips: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 'inherit',
    borderColor: 'rgba(0, 0, 0, 0.23)',
    borderRadius: 4,
    padding: 14,

  },
  button: {
    textTransform: 'none',
  },
  footer: {
    minHeight: 60,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

}));

export default function ProcessEdit() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const { handleSubmit, control, reset, setValue } = useForm();
  const { id } = useParams();
  const [processShow, setProcess] = React.useState(null);
  const [, dispatch] = React.useContext(Context);

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });


  const history = useHistory();

  React.useEffect(() => {
    fetchProcessDetails()
  }, []);

  async function fetchProcessDetails() {
    try {
      dispatch(setLoading(true));

      const { data } = await api.showProcess(id);
      setProcess(data.data);

      reset();

      Object.entries(data.data).forEach(([key, value]) => setValue(key, value))
    } finally {
      dispatch(setLoading(false));
    }
  }

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(`${getUrl()}/api/v1/public/search/professor`);
      const professors = await response.json();
      if (active) {
        setOptions(Object.values(professors).map(data => data));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { termAcceptance, termPlagiarism, termReponsability } = state;

  const handleSemester = (event) => {
    setSemester(event.target.value);
  };

  const handleProfessor = (event) => {
    setProfessor(event.target.value);
  };

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular', color: '#673ab7' },
    { key: 1, label: 'jQuery', color: '#3f51b5' },
    { key: 2, label: 'Polymer', color: '#f44336' },
    { key: 3, label: 'React', color: '#8bc34a' },
    { key: 4, label: 'Vue.js', color: '#ff9800' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const onSubmit = async data => {
    try {
      dispatch(setLoading(true))
      console.log(id);
      await api.updateProcess(data, id);
      toast.success('👍 Atualizado Com Sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset({
        title: '',
        advise_professor_id: undefined,
        semester_id: '',
        content: '',
      });
      history.push('/unidocs/student/processes');
    } catch (e) {
      toast.error('❌ Erro ao Salvar o Processo', {
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

    }
  };

  return (
    <div>
      <Container>
        <Paper className={classes.card}>
          <div className={classes.header}>
            <Avatar className={classes.large}>
              <SchoolIcon fontSize="large" />
            </Avatar>
            <div className={classes.headerTitle}>
              <Typography variant="h4">
                Alterar Processo
              </Typography>
              <Typography variant="subtitle1">
                Preencha os campos abaixo
              </Typography>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name="title"
                  control={control}
                  defaultValue={processShow?.title || ''}
                  rules={validation.titleValidation}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      variant="outlined"
                      id="title"
                      fullWidth
                      error={!!error}
                      helperText={error ? error.message : null}
                      name="Título"
                      label="Título"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="content"
                  control={control}
                  defaultValue={processShow?.content || ''}
                  rules={validation.descriptionValidation}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                      id="content"
                      label="Descrição"
                      fullWidth
                      multiline
                      rows={16}
                      error={!!error}
                      helperText={error ? error.message : null}
                      value={value}
                      onChange={onChange}
                      variant="outlined"
                    />

                  )}
                />


              </Grid>
            </Grid>
            <div className={classes.footer}>
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Alterar Processo
              </Button>
            </div>
          </form>
        </Paper>
      </Container>

    </div>
  )
}