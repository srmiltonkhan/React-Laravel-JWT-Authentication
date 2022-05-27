import React, { useContext } from "react";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import "../../css/dashboard.css";
import useAuth from "../../hooks/useAuth";
import RootContext from "../../lib/contexts/RootContext";

function PrivateOutlet() {
    const { pathname } = useLocation();
    const { logout } = useAuth();
    const { loggedIn } = useContext(RootContext);
    return loggedIn ? (
        <div id="wrapper">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <h2>Logo</h2>
                </div>
                <ul className="sidebar-nav">
                    <li
                        className={
                            pathname === "/admin/dashboard" ? "active" : ""
                        }
                    >
                        <NavLink to="/admin/dashboard">
                            <i className="fa fa-home" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li
                        className={
                            pathname === "/admin/userlist" ? "active" : ""
                        }
                    >
                        <NavLink
                            className={(navInfo) =>
                                navInfo.isActive ? " active" : ""
                            }
                            to="/admin/userlist"
                        >
                            <i className="fa fa-plug" />
                            User list
                        </NavLink>
                    </li>
                    <li
                        className={
                            pathname === "/admin/settings" ? "active" : ""
                        }
                    >
                        <NavLink to="/admin/settings">
                            <i className="fa fa-user" />
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </aside>
            <div id="navbar-wrapper">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a
                                href="#"
                                className="navbar-brand"
                                id="sidebar-toggle"
                            >
                                <i className="fa fa-bars" />
                            </a>
                        </div>
                        <ul className="navbar-nav">
                            <button className="btn btn-danger" onClick={logout}>
                                Logout
                            </button>
                        </ul>
                    </div>
                </nav>
            </div>
            <section id="content-wrapper">
                <Outlet />
            </section>
        </div>
    ) : (
        <Navigate to="/auth/login" />
    );
}

export default PrivateOutlet;
