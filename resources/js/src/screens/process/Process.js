import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Checkbox, Chip, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import AddIcon from '@material-ui/icons/Add';

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

export default function Process(props) {
  const classes = useStyles();
  const [professor, setProfessor] = React.useState('');
  const [semester, setSemester] = React.useState('');
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

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
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
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
                Criar Novo Projeto
              </Typography>
              <Typography variant="subtitle1">
                Preencha os campos abaixo
              </Typography>
            </div>
          </div>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                id="title"
                name="Título"
                label="Título"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="professor">Professor Orientador</InputLabel>
                <Select
                  labelId="professor"
                  id="professor"
                  value={professor}
                  onChange={handleProfessor}
                  label="Professor Responsável"
                >
                  <MenuItem value="">
                    <em>Selecione</em>
                  </MenuItem>
                  <MenuItem value={10}>janio12</MenuItem>
                  <MenuItem value={20}>Alex</MenuItem>
                  <MenuItem value={30}>Fred</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Semestre</InputLabel>
                <Select
                  labelId="semester"
                  id="semester"
                  value={semester}
                  onChange={handleSemester}
                  label="Semestre"
                >
                  <MenuItem value="">
                    <em>Selecione</em>
                  </MenuItem>
                  <MenuItem value={10}>2021/1-TCC</MenuItem>
                  <MenuItem value={20}>2021/1-PCC</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="description"
                label="Descrição"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.knowladgeArea}>
                <Typography className={classes.border} variant="h6">
                  Areas de Conhecimento
                </Typography>

                <IconButton className={classes.border} color="primary">
                  <AddIcon />
                </IconButton>
              </div>
              <div className={classes.chips}>
                {chipData.map((data) => {
                  return (
                    <Chip
                      key={data.key}
                      label={data.label}
                      variant="outlined"
                      onDelete={handleDelete(data)}
                      style={{
                        fontWeight: 600,
                        borderRadius: 4,
                        color: '#f44336',
                        border: '1px solid #f4433666',
                        margin: '4px',
                      }}
                    />
                  );
                })}
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={termAcceptance} onChange={handleChange} name="termoDeAceite" />}
                    label="Eu aceito assinar o Termo de Aceite"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={termPlagiarism} onChange={handleChange} name="termoDePlagio" />}
                    label="Eu aceito assinar o Termo de Plagio"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" checked={termReponsability} onChange={handleChange} name="termoDeResponsabilidade" />}
                    label="Eu aceito assinar o Termo de Responsabilidade"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
          <div className={classes.footer}>
            <Button className={classes.button} variant="contained" color="primary">
              Criar Projeto
            </Button>
          </div>
        </Paper>
      </Container>
    </div>
  )
}