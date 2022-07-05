import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }) {
    const display = useSelector(state => state.changeView.display)
    return display === 'ROLE_ADMIN' ? children : <Navigate to="/login" />;
}
