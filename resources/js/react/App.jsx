import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AuthOutlet from "./components/outlets/AuthOutlet";
import FrontendOutlet from "./components/outlets/FrontendOutlet";
import PrivateOutlet from "./components/outlets/PrivateOutlet";
import PreLoader from "./components/PreLoader";
import useAuth from "./hooks/useAuth";
import RootContext from "./lib/contexts/RootContext";
import Login from "./pages/backend/auth/Login";
import Signup from "./pages/backend/auth/Signup";
import Dashboard from "./pages/backend/Dashboard";
import Settings from "./pages/backend/Settings";
import UserList from "./pages/backend/UserList";
import About from "./pages/frontend/About";
import Home from "./pages/frontend/Home";
import NotFound from "./pages/NotFound";

function App() {
    const { loading, setLoading } = useContext(RootContext);
    const { refreshJWT } = useAuth();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            refreshJWT(token);
        } else {
            setLoading(false);
        }
    }, []);

    return loading ? (
        <PreLoader />
    ) : (
        <Routes>
            <Route path="/*" element={<FrontendOutlet />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/auth/*" element={<AuthOutlet />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/admin/*" element={<PrivateOutlet />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="userlist" element={<UserList />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
