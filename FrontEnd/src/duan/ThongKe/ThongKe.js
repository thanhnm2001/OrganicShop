import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
function ThongKe() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div style={{marginLeft:"250px"}}>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <DrawerHeader />
    <main class="container"   >     
      <div style={{ marginLeft: "-10px", marginTop: "-50px", height: "20px" }}>
      </div>
      <section class="row " style={{ marginLeft: "-140px", width: "100%" }}>

        <div class="offset-1 mt-5  " >
          <form >
        
            <div class="card">

              <div class="card-header" >
                
                <h2 style={{color:"red"}}>Danh Sách Thống Kê </h2>
              </div>
              <div class="card-body">

                <div class="row">                      
                  <div class="col">
                  <div class="form-group  "style={{marginTop:"20px"}}>
                  <div style={{marginLeft:"500px"}}>
                  <input type="date" class="form-control" style={{width:"180px"}} id="ngaybatdau" name="ngaybatdau" autocomplete="off"/>
             
         
             <p style={{marginLeft:"200px", marginTop:"-32px"}}>đến</p>
            
                 <input type="date" class="form-control"  style={{width:"180px", marginLeft:"250px", marginTop:"-46px"}}id="ngayketthuc" name="ngayketthuc" autocomplete="off"/>  
       </div>
          </div>
                   <Button variant="contained"
                      class="btn btn-outline-warning" style={{ marginTop: "10px" , marginTop:"-66px", marginLeft:"950px"}} startIcon={<SearchIcon />}

                    ></Button>
                    <TableContainer component={Paper} style={{ marginTop: "10px" }}>
                      <Table sx={{ minWidth: 250 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Họ Tên</TableCell>
                            <TableCell align="right">Địa chỉ&nbsp;</TableCell>
                            <TableCell align="right">Tổng(vnd)</TableCell>
                            <TableCell align="right">Ngày&nbsp;</TableCell>
                       
                          </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow
                          >
                            <TableCell align="right">5</TableCell>
                            <TableCell align="right">tuandv</TableCell>
                            <TableCell align="right">Tan Hoi</TableCell>
                            <TableCell align="right">1.000</TableCell>
                            <TableCell align="right">19/9/2021</TableCell>
                            <TableCell style={{ marginLeft: "70%" }}>
                            
                            </TableCell>
                          </TableRow>
                          <TableRow

                          >
                            <TableCell align="right">44</TableCell>
                            <TableCell align="right">bbbbDAF</TableCell>

                            <TableCell align="right">dAN</TableCell>
                            <TableCell align="right">400.000</TableCell>
                            <TableCell align="right">7/10/2021</TableCell>
                            <TableCell style={{ marginLeft: "70%" }}>
                            
                            </TableCell>
                          </TableRow>
                          <TableRow
                          >
                            <TableCell align="right">77</TableCell>
                            <TableCell align="right">tuandv</TableCell>
                            <TableCell align="right">Tan Hoi</TableCell>
                            <TableCell align="right">1.000</TableCell>
                            <TableCell align="right">19/9/2021</TableCell>
                            <TableCell style={{ marginLeft: "70%" }}>
                            
                            </TableCell>
                          </TableRow>
                        
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </div>

            </div>


            <div class="card-footer text-muted">
              <ul className="pagination" style={{ position: 'absolute', marginLeft: "60%", marginTop: '3%' }}>
                <li class="page-item">
                  <a class="page-link">Trang truoc</a>
                </li>
                <li class="page-item">
                  <a class="page-link">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link">Trang sau</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </section>
    </main>
  </Box>
  </div>
  );
}
export default ThongKe;