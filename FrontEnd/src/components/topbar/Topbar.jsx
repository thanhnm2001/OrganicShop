import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Button, Link } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">OrganicAdmin</span>
        </div>

        <div className="topRight">
          <button onClick={handleOnClick} className="logoutButton">LogOut</button>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
