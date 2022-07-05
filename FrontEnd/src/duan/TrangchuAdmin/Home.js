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
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import SanPham  from "../QLSanPham/SanPham";
import DanhMuc from'../QLDanhMuc/DanhMuc'
import {
 
  Card,
  Container,
  Row,
  Col,

} from "react-bootstrap";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
      <div style={{marginLeft:"220px"}}>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <DrawerHeader />
    <main class="container"   >
  
   <div role="presentation" onClick={handleClick}>
   
<Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Dashboard
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/getting-started/installation/"
  >
  Overview
  </Link>

</Breadcrumbs>


    <Row style={{color : "red"}}>
      <Col lg="3" sm="6">
        <Card className="card-stats" >
          <Card.Body style={{color : "red", background:"yellow"}}>
            <Row className="fas fa-redo mr-1">
             4 Sản Phẩm 
             
            </Row>
          </Card.Body>
          <Card.Footer>
            
            <div className="stats">
              <Button className="fas fa-redo mr-1"> Xem chi tiết </Button>
            
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg="3" sm="6">
        <Card className="card-stats" >
          <Card.Body style={{color : "red", background:"green "}}>
            <Row className="fas fa-redo mr-1">
            2 Danh Mục 
             
            </Row>
          </Card.Body>
          <Card.Footer>
            
            <div className="stats">
              <Button className="fas fa-redo mr-1"> Xem chi tiết </Button>
            
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg="3" sm="6">
        <Card className="card-stats" >
          <Card.Body style={{color : "white", background:"red"}}>
            <Row className="fas fa-redo mr-1">
            0 Đơn hàng mới 
             
            </Row>
          </Card.Body>
          <Card.Footer>
            
            <div className="stats">
              <Button className="fas fa-redo mr-1"> Xem chi tiết </Button>
            
            </div>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg="3" sm="6">
        <Card className="card-stats" >
          <Card.Body style={{color : "white", background:"blue"}}>
            <Row className="fas fa-redo mr-1">
            0 Ưu Đãi
             
            </Row>
          </Card.Body>
          <Card.Footer>
            
            <div className="stats">
              <Button className="fas fa-redo mr-1"> Xem chi tiết </Button>
            
            </div>
          </Card.Footer>
        </Card>
      </Col>
    
    </Row>

      <div>  <p  style={{ marginTop: "60px" }}>Gần đây </p></div>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                      <Table sx={{ minWidth: 250 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Khách Hàng</TableCell>
                            <TableCell align="right">Ngày Đặt&nbsp;</TableCell>
                            <TableCell align="right">Trạng Thái</TableCell>
                            <TableCell align="right">Tổng(vnd)&nbsp;</TableCell>
                            <TableCell align="right">Hành động&nbsp;</TableCell>

                          </TableRow>
                        </TableHead>
                        <TableBody>

                          <TableRow

                          >
                            <TableCell align="right">1</TableCell>
                            <TableCell align="right">Anh</TableCell>

                            <TableCell align="right">17/10/2021</TableCell>
                            <TableCell align="right">Đã hủy</TableCell>
                            <TableCell align="right">400.000</TableCell>




                         
                            <TableCell style={{ marginLeft: "70%" }}>
                            <Button variant="outlined" class="btn btn-outline-warning"
                                style={{ marginLeft: "35%" }} startIcon={<RemoveRedEyeIcon  />}
                              > Xem chi tiết
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow

                          >
                            <TableCell align="right">2</TableCell>
                            <TableCell align="right">Chua</TableCell>

                            <TableCell align="right">17/10/2021</TableCell>
                            <TableCell align="right">Đã hủy</TableCell>
                            <TableCell align="right">400.000</TableCell>




                          
                            <TableCell style={{ marginLeft: "70%" }}>
                            <Button variant="outlined" class="btn btn-outline-warning"
                                style={{ marginLeft: "35%" }} startIcon={<RemoveRedEyeIcon  />}
                              > Xem chi tiết
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow

                          >
                            <TableCell align="right">3</TableCell>
                            <TableCell align="right">B</TableCell>

                            <TableCell align="right">17/10/2021</TableCell>
                            <TableCell align="right">Chưa thanh toán</TableCell>
                            <TableCell align="right">200.000</TableCell>




                         
                            <TableCell style={{ marginLeft: "70%" }}>
                            <Button variant="outlined" class="btn btn-outline-warning"
                                style={{ marginLeft: "35%" }} startIcon={<RemoveRedEyeIcon  />}
                              > Xem chi tiết
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow

                          >
                            <TableCell align="right">4</TableCell>
                            <TableCell align="right">DD</TableCell>

                            <TableCell align="right">17/10/2021</TableCell>
                            <TableCell align="right">Đã hủy</TableCell>
                            <TableCell align="right">7.000</TableCell>




                            <TableCell style={{ marginLeft: "70%" }}>
                            <Button variant="outlined" class="btn btn-outline-warning"
                                style={{ marginLeft: "35%" }} startIcon={<RemoveRedEyeIcon  />}
                              > Xem chi tiết
                              </Button>
                            </TableCell>
                          </TableRow>

                        </TableBody>
                      </Table>
                    </TableContainer>
</div>
        </main>
  </Box>
  </div>


  );
}
export default Home;