import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import image1 from '../images/slide1.jpg'
import image from '../images/slide2.jpg'
import image3 from '../images/slide3.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import image2 from '../images/slide2.jpg'
import '../page_css/home.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";
const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <div>
        <img src={image2} class="img-flui" alt="..." />

      </div>
      <section class="row">
        <div class="offset-3 col-6 mt-5">
          <form className="con">

            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

                </Avatar>
                <div >
                  <b> Liên hệ</b>
                </div>

                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="hoten"
                    label="Họ tên"
                    name="hoten"
                    autoComplete="hoten"

                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="mail"
                    label="Email"
                    type="mail"
                    id="mail"
                    autoComplete="mail"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Số điện thoại"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="mess"
                    label="Lời nhắn"
                    type="mess"
                    id="mess"
                    autoComplete="mess"
                  />
                  <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcQLnYUAAAAAMhMj1PkbR2aSkQlG2CJzhdBVSlr&amp;co=aHR0cHM6Ly93d3cub3JnYW5pY3RhdHR2YS5jb206NDQz&amp;hl=vi&amp;v=qljbK_DTcvY1PzbR7IG69z1r&amp;size=normal&amp;cb=pbcqbdbtbxf6" width="304" height="78" role="presentation" name="a-lr6zcsw1rrhd" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>

                  <button type="submit" class="btn btn-dark">Gửi</button>
                </Box>
              </Box>
            </Container>
          </form>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;
