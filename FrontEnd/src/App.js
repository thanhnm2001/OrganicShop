import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Contact from './pages/contact';
import News from './pages/news';
import Login from './pages/login';
import User from './pages/user';
import Admin from './pages/admin';
import { useSelector } from "react-redux";
import PrivateRoute from './pages/PrivateRoute';
import { useNavigate } from 'react-router-dom';
function App() {
  // const navigate = useNavigate();
  const display = useSelector(state => state.changeView.display)
  // display === 'ROLE_ADMIN' ? navigate('/home') : navigate('/admin')
  useEffect(() => {


  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<User />} />
        <Route
          path="/admin*"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<User />} />
    //   <Route path="/admin" element={<Admin />} />
    // </Routes>

  );
}

export default App;

