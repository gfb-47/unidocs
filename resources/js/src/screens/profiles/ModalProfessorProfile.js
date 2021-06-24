import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { blue, grey } from '@material-ui/core/colors';
import SchoolIcon from '@material-ui/icons/School';
import 'date-fns';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
import ColorPicker from 'material-ui-color-picker';
import TextField from '@material-ui/core/TextField';
import Brightness1Icon from '@material-ui/icons/Brightness1';

function createData(name, course, color) {
  return { name, course, color };
}

const rows = [
  createData('Texto 1', 'Sistemas de Informação', '#F40909'),
  createData('Texto 2', 'Direito', '#E47B09'),
  createData('Texto 3', 'Serviços Sociais', '#358DF5'),
];

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
  { id: 'name', disablePadding: true, label: 'Nome' },
  { id: 'course', disablePadding: false, label: 'Curso' },
  { id: 'color', disablePadding: false, label: 'Cor (HEX)' },
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
      width: 322,
      marginLeft: 10,
    },
  },
  divCard: {
    marginTop: 50,
    marginLeft: 50,
    maxWidth: 1225,
    borderRadius: 20
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
  divButton: {
    position: "relative",
    marginTop: 140,
    marginLeft: 188,
  },
  divEsquerdaBanca: {
    width: '65%',
    marginTop: 20,
    marginLeft: 70,
  },
  divDireitaBanca: {
    marginLeft: 855,
    marginTop: -423,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    marginTop: 30,
    minWidth: 322,
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
  divColorPicker: {
    marginTop: -20,
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
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            style={{ color: blue[600] }}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
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
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

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

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    
    <div className={classes.divCard}>
      <Card className={classes.card}>
        
        <CardContent >
          {/*
          <div className={classes.schoolIcon}>
            <SchoolIcon style={{ color: grey[600], fontSize: 40 }} />
          </div>

          <div className={classes.cardContent}>
            <Typography component={'span'} variant="h5" component="h2">
              Áreas do Conhecimento
                  </Typography>

            <Typography component={'span'} className={classes.title} color="textSecondary" gutterBottom>
              Selecione suas áreas ou crie novas.
                  </Typography>
          </div>
          <div className={classes.divEsquerdaBanca}>
            <Paper className={classes.paper}>
              <TableContainer>
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
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {stableSort(rows, getComparator(order, orderBy))
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.name)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.name}
                            selected={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={isItemSelected}
                                inputProps={{ 'aria-labelledby': labelId }}
                                style={{ color: blue[600] }}
                              />
                            </TableCell>

                            <TableCell component="th" id={labelId} scope="row" padding="none">
                              {row.name}
                            </TableCell>

                            <TableCell align="left">
                              {row.course}
                            </TableCell>

                            <TableCell align="left">
                              <Brightness1Icon style={{ color: `${row.color}` }} />
                              <span> ({row.color})</span>
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
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </div>

          <div className={classes.divDireitaBanca}>
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                id="outlined-basic"
                placeholder="Informe uma área"
                label="Área do Conhecimento"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }} />
            </FormControl>

            <div className={classes.divColorPicker}>
              <FormControl variant="outlined" className={classes.formControl}>
                <ColorPicker
                  name="color"
                  variant="outlined"
                  label="Escolha uma cor"
                  defaultValue="Cor Definida"
                  // value={this.state.color}
                  onChange={color => console.log(color)}
                />
              </FormControl>
            </div>

            <div className={classes.divColorPicker}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Selecione um curso</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Selecione um curso"
                >
                  <MenuItem value={10}>Agronomia</MenuItem>
                  <MenuItem value={20}>Direito</MenuItem>
                  <MenuItem value={30}>Sistemas de Informação</MenuItem>
                  <MenuItem value={40}>Serviços Sociais</MenuItem>
                </Select>
              </FormControl>
            </div>

            <CardActions>
              <div className={classes.divButton}>
                <Button variant="contained" color="primary" className={classes.typography}>
                  Concluir
                      </Button>
              </div>
            </CardActions>
          </div>
              */}
        </CardContent> 
      </Card>
    </div>         
  )
};
