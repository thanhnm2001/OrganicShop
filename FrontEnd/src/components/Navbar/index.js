import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge, Button, Typography } from '@material-ui/core';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const numberCarts = useSelector(state => state.productAll.numberCart);
  const display = useSelector(state => state.changeView.display);
  const user = JSON.parse(localStorage.getItem('username'));


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch({
      type: 'CHANGE_VIEW',
      payload: 'home'
    })
    localStorage.removeItem('accessToken')
    localStorage.removeItem('username')
    navigate('/home')
  }
  return (
    <div>
      <Nav>
        <NavLink to='/'>
          <h1>Organic</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/product' activeStyle>
            Product
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/news' activeStyle>
            News
          </NavLink>
          {
            display === 'home' ?
              <NavLink to='/login' activeStyle >
                Login
              </NavLink>
              :
              <Button onClick={handleOnClick} style={{ color: "white" }}>
                Logout
              </Button>
          }
          <NavLink to='/cart' activeStyle >
            <Badge badgeContent={numberCarts} color='error'>

              <AddShoppingCartIcon sx={{ fontSize: 25 }} />
            </Badge>
          </NavLink>
          {
            display != 'home' &&
            <Typography style={{ color: "white" }} variant="subtitle1" gutterBottom component="div">
              {`Hi,${user}`}
            </Typography>
          }



        </NavMenu>

        <nav >



        </nav>

      </Nav>

    </div>
  );
};

export default Navbar;

