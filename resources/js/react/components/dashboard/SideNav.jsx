import React from "react";

const SideNav = () => {
    return (
        <nav className="nav flex-column">
            <a className="nav-link active" aria-current="page" href="#">
                Profile
            </a>
            <a className="nav-link" href="#">
                User list
            </a>
        </nav>
    );
};

export default SideNav;
