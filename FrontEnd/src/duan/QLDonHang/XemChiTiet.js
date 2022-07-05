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
function XemChiTiet() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
<div>
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
       Home
          </Typography>
          
          <TextField id="standard-basic" label="Tìm kiếm" variant="standard" style={{ marginLeft: "1000px" }} /><Button variant="contained"
                                class="btn btn-outline-warning" style={{ marginTop: "10px" }} startIcon={<SearchIcon />}

                            ></Button>
                              <p style={{marginTop:"30px", marginLeft:"10px"}}>vipp2001</p>
          <img src="#" width="80px"/>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Quản  Lý Sản Phẩm " />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Quản Lý Tài Khoản" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Quản Lý Đơn Hàng" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Quản Lý Danh Mục" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Quản Lý Ưu Đãi" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Thống Kê" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Đăng Xuát" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <main class="container"   >
               
                <div style={{ marginLeft: "-10px", marginTop: "-50px", height: "20px" }}>            
                </div>
                <section class="row " style={{ marginLeft: "-140px" , width:"800px"}}>

                    <div style={{marginLeft:"100px", marginTop:"20px"}} >
                        <form >
                            <div class="card">
                                <div class="card-header" >
                                    <b>Chi tiết đơn hàng</b>
                                </div>
                                <div class="card-body">

                                    <div class="row">
                                    <TableContainer >
                                                <Table style={{width:"700px", marginTop:"10px"}}>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell><b style={{margin:"20px", fontSize:"25px"}}>Gạo nứt</b></TableCell>
                                                            
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>

                                                    <TableRow>
                                                        <TableCell>
                                                   Khách hàng đặt mua
                                                        </TableCell>
                                                        <TableCell>
                                                        tuandv
                                                        </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                        <TableCell>
                                                   Sản phẩm thuộc vào danh mục
                                                        </TableCell>
                                                        <TableCell>
                                                        Gạo
                                                        </TableCell>
                                                        </TableRow>
                                                        

                                                        <TableRow>
                                                        <TableCell>
                                                   Ngày sản xuất
                                                        </TableCell>
                                                        <TableCell>
                                                       2/2/2021
                                                        </TableCell>
                                                        </TableRow>

                                                     


                                                        <TableRow>
                                                        <TableCell>
                                                          Cân nặng(kg)
                                                        </TableCell>
                                                        <TableCell>
                                                         25
                                                        </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                        <TableCell>
                                                          Giá sản phẩm(vnd)
                                                        </TableCell>
                                                        <TableCell>
                                                         250.000
                                                        </TableCell>
                                                        </TableRow>

                                                      
                                                        <TableRow>
                                                        <TableCell>
                                                    Số lượng
                                                        </TableCell>
                                                        <TableCell>
                                                       2
                                                        </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                        <TableCell>
                                                    Tổng(vnd)
                                                        </TableCell>
                                                        <TableCell>
                                                       500.000
                                                        </TableCell>
                                                        </TableRow>
                                                     

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>

                                        
                                    </div>
                                </div>

                            </div>      
                        </form>

                    </div>
                </section>
            </main>
      </Box>
    </Box>
<img src="anh/insta.jpg" style={{marginLeft:"1000px" ,marginTop:"-540px"}} width ="400px" height="473px"/>

</div>

   


  );
}
export default XemChiTiet;