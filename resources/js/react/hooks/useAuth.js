import axios from "axios";
import { useContext } from "react";
import RootContext from "../lib/contexts/RootContext";
export default function useAuth() {
    const { setLoggedIn, setAuthUser, setLoading } = useContext(RootContext);

    const login = ({ user, access_token }) => {
        setLoggedIn(true);
        setAuthUser(user);
        localStorage.setItem("token", access_token);
    };

    const logout = () => {
        setLoggedIn(false);
        setAuthUser({});
        localStorage.removeItem("token");
    };

    const refreshJWT = async (token) => {
        if (token) {
            try {
                const { data } = await axios.post("/api/auth/refresh/", {
                    token,
                });
                login(data);
            } catch (error) {
                logout();
            }
        } else {
            logout();
        }
        setLoading(false);
    };

    return { login, logout, refreshJWT };
}
