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
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Container, Menu, MenuItem } from '@material-ui/core';
import Navbar from '../../components/Navbar';
import { deepPurple } from '@material-ui/core/colors';

//Sessão 1 - Area de Criação de Dados para preechimento. Será subistituido pela API do banco - NÃO SERÁ MANTIDO
//Para os testes, mude as variaveis abaixo para o numero de variaveis que haverão na sua tabela.
function createData(name, updatedAtDate, active, updatedAtHour) {
    return { name, updatedAtDate, active, updatedAtHour };
}

//Preencha a função createData() com o mesmo numero de variaveis que voce colocou acima.
const rows = [
    createData('Direito', '4 de Dezembro, 2019', 'ativo', '1 horas atrás'),
];
//----FIM DA Sessão 1----

//Sessão 2 - Aqui será definidas quais serãos as Colunas dos dados. Vincule os nomes com seus dados para facilitar o entendimento
//id = identificador da variavel, label = nome da coluna na tabela
const headCells = [
    { id: 'name', label: 'Cursos' },
    { id: 'updatedAtDate', label: 'Última Alteração' },
    { id: 'active', label: 'Status' },
];
//----FIM DA Sessão 2----

//Sessão 3 - Não mexer. Aqui é feita a filtragem e ordenação da tabela.
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
//----FIM DA Sessão 3----

//Sessão 4 - Aqui é criado o cabeçalho da tabela. Normalmente, não haverá necessidade de alterar nada.
function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="default">
                </TableCell>

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
}));
//----FIM DA Sessão 4----

//Cabeçalho do card da tabela. Mudar o conteudo do <Typography/>
const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();

    return (
        <Toolbar
            className={classes.root}
        >
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                Cursos
            </Typography>
        </Toolbar>
    );
};

//Sessão 5 - Componente principal. Aqui precisará ser alterado os componentes para comportarem a tabela necessaria.
//MakeStyles é oq faz as configurações personalizadas de CSS no MaterialUI. Se não se sentir confortavel de mexer, chamar ajuda.
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
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

//COMPONENTE QUE SERÁ RENDENIZADO, ou seja, aqui o bagulho é serio.
export default function Courses() {
    {/* Variaveis sendo inicializadas */ }
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('active');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    {/* Metodos */ }
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


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    {/* Return que envia o HTML com os componentes */ }
    return (
        <div className={classes.root}>
            <Navbar />
            <Container>
                <Paper className={classes.paper}>
                    <EnhancedTableToolbar />
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
                                rowCount={rows.length}
                            />

                            {/* Dentro do TableBody é preenchido atraves de um .map
                            todos os dados que apareceram na tabela. Altere os 
                            <TableCell/> dentro de <TableRoll/> para que eles se 
                            alinhem com a listagem que voce gostaria de fazer */}
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                tabIndex={-1}
                                                key={row.name}
                                            >

                                                {/* Não mexa nesse TableCell*/}
                                                <TableCell padding="default">
                                                </TableCell>
                                                {/* Não mexa nesse TableCell*/}
                                                
                                                <TableCell align="left">
                                                    <span>{row.name}</span>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <span>{row.updatedAtDate}</span> <br />
                                                    <span className={classes.subItem}>{row.updatedAtHour}</span>
                                                </TableCell>
                                                <TableCell
                                                    align="left"
                                                    className={row.active == 'ativo' ? classes.itemActive : classes.itemInactive}
                                                >
                                                    <span>{row.active}</span>
                                                </TableCell>

                                                {/* Esse <TableCell/> representa o <IconButton/> 
                                                que todas as linhas precisam ter */}
                                                <TableCell align="right">
                                                    <IconButton
                                                        onClick={handleMenu}
                                                    >
                                                        <MenuIcon />
                                                    </IconButton>
                                                    <Menu
                                                        id="item-menu"
                                                        anchorEl={anchorEl}
                                                        anchorOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'right',
                                                        }}
                                                        keepMounted
                                                        transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'right',
                                                        }}
                                                        open={open}
                                                        onClose={handleClose}
                                                    >
                                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                                    </Menu>
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
                        count={rows.length}
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
//----FIM DA Sessão 5----
