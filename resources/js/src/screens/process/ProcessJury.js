import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import SchoolIcon from '@material-ui/icons/School';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { ptBR } from "date-fns/locale";
import { format } from 'date-fns';
import { Avatar, Container, TextField, } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import apiProfessor from '../../api/professor';
import api from '../../api/jury';
import { Controller, useForm } from 'react-hook-form'
import * as validation from '../../utils/validation';
import { Context } from '../../components/Store';
import { setLoading } from '../../utils/actions';
import { toast } from 'react-toastify';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'professorName', disablePadding: false, label: 'Professores (Selecione mais 2 para completar a banca)' },
];
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 15,
  },
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(4),
      width: '100%',
      marginLeft: 10,
    },
  },
  card: {
    borderRadius: 10,
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
  divForm: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  divButton: {
    position: "relative",
    marginLeft: 188,
  },
  divDireitaBanca: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    marginTop: 15,
    minWidth: 322,
    padding: 8,
    'width': '100% !important'
  },

  userCell: {
    display: 'flex',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  divTimePicker: {
    width: '100% !important'
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
  container: {
    marginTop: theme.spacing(5),
  },
}));


function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };



  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">

        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export default function ProfessorProfile() {



  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
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

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);

  };


  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const location = useLocation();
  const [professors, setProfessors] = React.useState([]);
  const [defaultProfessor, setDefaultProfessor] = React.useState(null);
  const { professor } = location.state;
  const { id } = location.state;
  const { handleSubmit, control, reset } = useForm();
  const [, dispatch] = React.useContext(Context);
  const history = useHistory();


  const fetchProfessors = () => {
    apiProfessor.getAllProfessors().then(res => {
      const result = res.data.data;
      setProfessors(result);

    });
  };
  React.useEffect(() => {
    fetchProfessors();

    const professors = [professor];
    setSelected(professors);

    setDefaultProfessor(professor)
  }, []);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = professors.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const verifyProfessor = () => {

    jury.forEach((item) => {
      if (item.id == professor.id) {


      }
    });
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, professors.length - page * rowsPerPage);
  const onSubmit = async (data) => {
    const parsedData = {
      ...data,
      date: format(data.date, "yyyy-MM-dd"),
      hour: format(data.hour, 'hh:mm:ss'),
      process_id: id
    }
    try {
      dispatch(setLoading(true))
      await api.addJury(parsedData);
      toast.success('👍 Banca definida com Sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push(`/unidocs/process/details/${id}`);

    } catch (e) {
      toast.error('❌ Erro ao definir Banca', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (

    <div>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardContent >
            <div className={classes.header}>
              <Avatar className={classes.large}>
                <SchoolIcon fontSize="large" />
              </Avatar>
              <div className={classes.headerTitle}>
                <Typography variant="h4">
                  Formar Banca
                </Typography>
                <Typography variant="subtitle1">
                  Escolha os participantes que farão parte da banca.
                </Typography>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.divForm}>
                <div className={classes.divEsquerdaBanca}>
                  <Paper className={classes.paper}>
                    {defaultProfessor && (<Controller
                      name="professors"
                      control={control}
                      defaultValue={[defaultProfessor]}
                      rules={validation.juryValidation}
                      render={({ field: { onChange, value }, fieldState: { error } }) => {
                        const handleClick = (event, name) => {
                          let selecteds = [];
                          if (value.includes(name)) {
                            selecteds = value.filter(i => i !== name);
                          } else if (value.length < 3) {
                            selecteds = [...value, name]
                          } else {
                            selecteds = [...value]
                          }

                          onChange(selecteds);
                        };
                        return (<TableContainer>
                          <div style={{ color: 'red', textDecoration: 'underline' }}>{error?.message}</div>
                          <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                            aria-label="enhanced table"
                          >
                            <EnhancedTableHead
                              classes={classes}
                              numSelected={selected.length}
                              order={order}
                              orderBy={orderBy}
                              onSelectAllClick={handleSelectAllClick}
                              onRequestSort={handleRequestSort}
                              rowCount={professors.length}
                            />
                            <TableBody>
                              {stableSort(professors, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                  const isItemSelected = value.includes(row.id);

                                  const labelId = `enhanced-table-checkbox-${index}`;


                                  return (
                                    <TableRow
                                      hover
                                      onClick={(e) => {
                                        row.id !== professor && handleClick(e, row.id)
                                      }}
                                      role="checkbox"
                                      aria-checked={isItemSelected}
                                      tabIndex={-1}
                                      key={row.id}
                                      selected={isItemSelected}
                                    >
                                      <TableCell padding="checkbox">
                                        <Checkbox
                                          checked={isItemSelected}
                                          disabled={row.id === professor}
                                          inputProps={{ 'aria-labelledby': labelId }}
                                          style={{ color: blue[600] }}
                                        />
                                      </TableCell>

                                      <TableCell component="th" id={labelId} align="left" scope="row" padding="none">
                                        <div className={classes.userCell}>
                                          <Avatar
                                            style={{
                                              marginRight: "1rem",
                                              color: `${row.color}`,
                                              backgroundColor: `${row.color}50`,
                                            }}
                                          >
                                            {row.name[0]}
                                          </Avatar>

                                          <div>
                                            <b>{row.name}</b> <br />
                                            <span className={classes.subItem}>{row.email}</span>
                                          </div>
                                        </div>
                                      </TableCell>

                                    </TableRow>
                                  );
                                })}
                              {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                  <TableCell colSpan={6} />
                                </TableRow>
                              )}
                            </TableBody>
                          </Table>
                        </TableContainer>)
                      }}
                    />)}
                    <TablePagination
                      rowsPerPageOptions={[10, 15, 20]}
                      component="div"
                      count={professors.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  </Paper>
                </div>

                <div className={classes.divDireitaBanca}>
                  <Grid container>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                      <FormControl className={classes.formControl}>
                        <Controller
                          name="date"
                          control={control}
                          defaultValue={null}
                          rules={validation.dateValidation}
                          render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <KeyboardDatePicker
                              variant="inline"
                              inputVariant="outlined"
                              format="dd/MM/yyyy"
                              minDate={new Date()}
                              id="standard-required"
                              label="Data da Banca"
                              value={value}
                              onChange={onChange}
                              error={!!error}
                              helperText={error ? error.message : null}
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                          )}
                        />
                        <div className={classes.divTimePicker}>
                          <Controller
                            name="hour"
                            control={control}
                            defaultValue={null}
                            rules={validation.hourValidation}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                              <KeyboardTimePicker
                                margin="normal"
                                style={{ width: '100%' }}
                                inputVariant="outlined"
                                variant="inline"
                                id="time-picker"
                                ampm={false}
                                label="Horário da Banca"
                                error={!!error}
                                helperText={error ? error.message : null}
                                value={value}
                                onChange={onChange}
                                KeyboardButtonProps={{
                                  'aria-label': 'change time',
                                }}
                              />
                            )}
                          />

                        </div>
                      </FormControl>
                    </MuiPickersUtilsProvider>
                    <div className={classes.divTimePicker}>
                      <FormControl variant="outlined" className={classes.formControl}>
                        <Controller
                          name="local"
                          control={control}
                          defaultValue=""
                          rules={validation.localValidation}
                          render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                              variant="outlined"
                              id="local"
                              fullWidth
                              error={!!error}
                              helperText={error ? error.message : null}
                              name="Local"
                              label="Local"
                              value={value}
                              onChange={onChange}
                            />
                          )}
                        />
                      </FormControl>
                      <FormControl variant="outlined" className={classes.formControl}>
                        <Controller
                          name="note"
                          control={control}
                          defaultValue=""
                          rules={validation.localValidation}
                          render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField
                              id="content"
                              label="Descrição"
                              fullWidth
                              multiline
                              rows={12}
                              error={!!error}
                              helperText={error ? error.message : null}
                              value={value}
                              onChange={onChange}
                              variant="outlined"
                            />

                          )}
                        />
                      </FormControl>
                    </div>
                  </Grid>
                  <CardActions>
                    <div className={classes.divButton}>
                      <Button variant="contained" color="primary" type="submit" className={classes.typography}>
                        Fechar Banca
                      </Button>
                    </div>
                  </CardActions>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
};
