import React from "react";

const Alert = ({ type, message }) => {
    const alertClass = `alert alert-${type} mt-2`;
    return <div className={alertClass}>{message}</div>;
};

export default Alert;
