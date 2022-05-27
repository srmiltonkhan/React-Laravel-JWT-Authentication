import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Alert from "../Alert";

function LoginForm() {
    const { login } = useAuth();
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
    });
    const [alert, setAlert] = useState({
        status: false,
        type: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/api/auth/login", inputData);
            login(data);
        } catch (error) {
            console.log(error.response);
            const { status, data } = error.response;
            if (status === 422 || status === 401) {
                setAlert({
                    status: true,
                    type: "danger",
                    message: data.error,
                });
            }
        }
    };

    return (
        <div className="col-md-6 m-auto mt-5">
            <form onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Login{" "}
                            <span>
                                <NavLink className="btn btn-link" to="/">
                                    Home
                                </NavLink>
                            </span>{" "}
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="mb-3 row">
                            <label
                                htmlFor="staticEmail"
                                className="col-sm-2 col-form-label"
                            >
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="staticEmail"
                                    name="email"
                                    onChange={handleInputChange}
                                    placeholder="email@example.com"
                                    value={inputData.email}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label
                                htmlFor="inputPassword"
                                className="col-sm-2 col-form-label"
                            >
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    name="password"
                                    onChange={handleInputChange}
                                    value={inputData.password}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Login
                        </button>
                        <NavLink className="btn btn-link" to="/auth/signup">
                            Don't have an account? Signup here
                        </NavLink>
                    </div>
                </div>
            </form>
            {alert.status && (
                <Alert type={alert.type} message={alert.message} />
            )}
        </div>
    );
}

export default LoginForm;
