import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Alert from "../Alert";

function SignUpForm() {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
            const { data } = await axios.post("/api/auth/register", inputData);
            console.log(data);
            setInputData({
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            });
            setAlert({
                status: true,
                type: "primary",
                message: "Successfully registered!",
            });
        } catch (error) {
            const { status, data } = error.response;
            if (status === 400) {
                setAlert({
                    status: true,
                    type: "danger",
                    message: data,
                });
            }
        }
    };
    return (
        <div className="col-md-6 m-auto mt-5">
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Sign Up{" "}
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
                                htmlFor="fullName"
                                className="col-sm-2 col-form-label"
                            >
                                Name
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    name="name"
                                    onChange={handleInputChange}
                                    placeholder="Prodip M"
                                    value={inputData.name}
                                />
                            </div>
                        </div>

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
                        <div className="mb-3 row">
                            <label
                                htmlFor="inputPasswordConfirm"
                                className="col-sm-2 col-form-label"
                            >
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPasswordConfirm"
                                    name="password_confirmation"
                                    onChange={handleInputChange}
                                    value={inputData.password_confirmation}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Sign Up
                        </button>
                        <NavLink className="btn btn-link" to="/auth/login">
                            Already have an account? Sign in here
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

export default SignUpForm;
