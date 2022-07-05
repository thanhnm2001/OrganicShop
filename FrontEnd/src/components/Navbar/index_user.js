import React from 'react';

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

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to='/'>
          <h1>Organic</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Trang chủ
          </NavLink>
          <NavLink to='/product' activeStyle>
            Sản phẩm
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Liên hệ
          </NavLink>
          <NavLink to='/news' activeStyle>
            Tin tức
          </NavLink>
          <NavLink to='/index' activeStyle >
          <button class="btn btn-outline-success" type="submit">Đăng xuất</button>
          </NavLink>
          <NavLink to='/addtocart' activeStyle >
          <button class="btn btn-outline-success" type="submit">Giỏ hàng</button>
          </NavLink>
        </NavMenu>
      
        <nav >
</nav>
        
      </Nav>
    </div>
  );
};

export default Navbar;