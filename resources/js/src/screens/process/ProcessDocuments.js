import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Container, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../api/process';
import { setLoading } from '../../utils/actions';
import { Context } from '../../components/Store';
import { formatDistance, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import axios from 'axios';


const headCells = [
  { id: 'document', label: 'Documentos' },
  { id: 'signList', label: 'Assinado por...' },

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

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            padding='default'
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
        <TableCell align='left' padding='default'>
          Última Atualização
        </TableCell>
        <TableCell align='right' padding='default'>
          Ações
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
  button: {
    color: "#0d47a1 !important",
    '&:hover': {
      color: "white !important",
      backgroundColor: "#0d47a1 !important",
    }
  },
  input: {
    display: 'none'
  }
}));






const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
  userCell: {
    display: 'flex',
  },
  subItem: {
    fontSize: "0.75rem !important",
    color: theme.palette.grey[600],
  },
  itemActive: {
    color: theme.palette.success.main,
  },
  itemInactive: {
    color: theme.palette.error.main,
  },
  menu: {
    zIndex: 1101,
  }
}));

export default function ProcessDocuments() {
  const classes = useStyles();
  /**@type {{id:number}} */
  const { id } = useParams();
  const [terms, setTerms] = React.useState([]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('active');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef([]);
  const history = useHistory();
  const [, dispatch] = React.useContext(Context);
  const username = getUsername();
  const fetchDocuments = async () => {
    try {
      dispatch(setLoading(true));
      const terms = await api.getTerms(id);
      setTerms(terms.data.data);
    } catch (err) {
      console.log(err)
    } finally {
      dispatch(setLoading(false));
    }
  }

  React.useEffect(() => {
    fetchDocuments()
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleToggle = (index) => {
    setOpen(open !== false ? false : index);
  };

  const handleClose = (event) => {
    if (anchorRef.current[open] && anchorRef.current[open].contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const sendDocument = async (event) => {
    let selectedFile = event.target.files[0];
    try {
      const formData = new FormData();
      formData.set("file", selectedFile);
      formData.append("process_id", id);
      await axios.post(`${getUrl()}/api/v1/process/documentsend/file`, formData)
    } catch (err) {
      console.log(err)
    } finally {
      selectedFile = null;
      fetchDocuments()
    }
  }

  const goBackNavigation = (e) => {
    history.goBack()
  }

  const EnhancedTableToolbar = ({ onFileChanged }) => {
    const classes = useToolbarStyles();

    return (
      <Toolbar
        className={classes.root}
      >
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Documentos
        </Typography>
        <input
          accept="application/pdf"
          className={classes.input}
          id="contained-button-file"
          multiple
          onChange={onFileChanged}
          type="file"
        />
        <label htmlFor="contained-button-file">
          <IconButton color="secondary" className={classes.button} component="span">
            <AddIcon />
          </IconButton>
        </label>
        <IconButton color="secondary" className={classes.button}>
          <ArrowBackIcon onClick={() => goBackNavigation()} />
        </IconButton>

      </Toolbar>
    );
  };

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    if (open !== false) {
      anchorRef.current[open].focus();
    }
  }, [open]);

  const sign = (link, name, process_id, term_id, username) => {
    history.push('/unidocs/process/documentsign', { link, name, processId: process_id, termId: term_id, username })
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, terms.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Container>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar onFileChanged={sendDocument} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={terms.length}
              />


              <TableBody>
                {stableSort(terms, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {

                    return (
                      <TableRow
                        hover
                        tabIndex={-1}
                        key={row.id}
                      >
                        <TableCell align="left">
                          <div className={classes.userCell}>
                            <Avatar
                              style={{
                                marginRight: "1rem",
                                color: `#FFF`,
                                backgroundColor: `#00000080`,
                              }}
                              alt={row.document} >
                              <DescriptionIcon />
                            </Avatar>
                            <div>
                              <b>{row.name}</b> <br />
                              <span className={classes.subItem}>{row.createdAt}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          <span> {row.sign.map((subRow, index) => {
                            let signer = subRow.name + ', ';
                            if (row.sign[row.sign.length - 1] == row.sign[index]) {
                              signer = subRow.name;
                            }
                            return signer
                          })}</span>
                        </TableCell>
                        <TableCell align="left">
                          <span>
                            {formatDistance(new Date(row.updated_at), new Date(), { locale: ptBR })} atrás
                          </span>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            ref={ref => anchorRef.current[index] = ref}
                            aria-describedby={`popper${row.id}`}
                            aria-controls={open !== false ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={() => handleToggle(index)}
                          >
                            <MenuIcon />
                          </IconButton>
                          <Popper id={`popper${row.id}`} className={classes.menu} anchorEl={anchorRef.current[index]} open={open === index} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                              <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                              >
                                <Paper>
                                  <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open !== false} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                      <MenuItem onClick={() => sign(row.file_directory || row.original_directory, row.name, id, row.id, username)}>Assinar</MenuItem>
                                      <MenuItem onClick={handleClose}>Desativar</MenuItem>
                                      <Divider light />
                                      <MenuItem onClick={handleClose}>Excluir</MenuItem>
                                    </MenuList>
                                  </ClickAwayListener>
                                </Paper>
                              </Grow>
                            )}
                          </Popper>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 25]}
            component="div"
            count={terms.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  );
}
