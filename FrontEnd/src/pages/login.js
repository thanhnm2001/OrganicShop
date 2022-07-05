import React, { useState } from 'react';

import { Form, FormGroup, Label, Input, Button, Row, Col, Alert } from 'reactstrap'
import { login } from '../actions/auth';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');;
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const display = useSelector(state => state.changeView.display)
  // if (display == 'ROLE_ADMIN') {
  //   navigate('/admin')
  // } else {
  //   navigate('/home')
  // }
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login(username, password))
      .then((data) => {
        data.roles[0] === 'ROLE_ADMIN' ? navigate('/admin') : navigate('/home')
      }
      )
      .catch((error) => {
        setMessage(error)
        setStatus(true)
      }

      )

  }
  return (
    <Row>

      <Col
        className="bg-light border"
        md={{
          offset: 3,
          size: 6
        }}
        sm="12"
      >
        <h1>Login</h1>
        <Form onSubmit={handleClick} inline class="col-md-6">
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label
              className="me-sm-2"
              for="username"
            >
              Username
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="Enter Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label
              className="me-sm-2"
              for="examplePassword"
            >
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder='Enter Password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button>
            Submit
          </Button>
          {
            status && <p style={{ color: 'red' }}>Username or Password is incorrect</p>
          }
        </Form>
      </Col>

    </Row>
    // <form>
    //   <h3>Sign In</h3>
    //   <div className="form-group">
    //     <label>Email address</label>
    //     <input type="email" className="form-control" placeholder="Enter email" />
    //   </div>
    //   <div className="form-group">
    //     <label>Password</label>
    //     <input type="password" className="form-control" placeholder="Enter password" />
    //   </div>
    //   <div className="form-group">
    //     <div className="custom-control custom-checkbox">
    //       <input type="checkbox" className="custom-control-input" id="customCheck1" />
    //       <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
    //     </div>
    //   </div>
    //   <button type="submit" className="btn btn-primary btn-block">Submit</button>
    //   <p className="forgot-password text-right">
    //     Forgot <a href="#">password?</a>
    //   </p>
    // </form>

  );
}

export default Login;