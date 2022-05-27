import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RootContext from "./lib/contexts/RootContext";

function ReactApp() {
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [authUser, setAuthUser] = useState({});
    const [notification, setNotification] = useState({
        status: false,
        type: "",
        message: "",
    });

    return (
        <BrowserRouter>
            <RootContext.Provider
                value={{
                    loading,
                    setLoading,
                    loggedIn,
                    setLoggedIn,
                    authUser,
                    setAuthUser,
                    notification,
                    setNotification,
                }}
            >
                <App />
            </RootContext.Provider>
        </BrowserRouter>
    );
}

export default ReactApp;

if (document.getElementById("root")) {
    ReactDOM.render(<ReactApp />, document.getElementById("root"));
}
