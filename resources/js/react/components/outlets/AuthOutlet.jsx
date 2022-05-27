import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import RootContext from "../../lib/contexts/RootContext";

function AuthOutlet() {
    const { loggedIn } = useContext(RootContext);
    return loggedIn ? <Navigate to="/admin/dashboard" /> : <Outlet />;
}

export default AuthOutlet;
