import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

function FrontendOutlet() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}

export default FrontendOutlet;
