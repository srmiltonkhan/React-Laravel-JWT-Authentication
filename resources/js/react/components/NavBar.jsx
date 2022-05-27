import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import RootContext from "../lib/contexts/RootContext";

function NavBar() {
    const { loggedIn, authUser } = useContext(RootContext);
    const { logout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    React JWT Auth with Laravel
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse  d-flex justify-content-end"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink
                                className={(navInfo) =>
                                    navInfo.isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={(navInfo) =>
                                    navInfo.isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink
                                className={(navInfo) =>
                                    navInfo.isActive
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                to="admin/dashboard"
                            >
                                Dashboard
                            </NavLink>
                        </li> */}

                        {loggedIn ? (
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {authUser.name}
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <button
                                            className="dropdown-item"
                                            onClick={logout}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <NavLink
                                    className={(navInfo) =>
                                        navInfo.isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                    to="auth/login"
                                >
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
