import axios from "axios";

const clientToken = localStorage.getItem("token");
export default axios.create({
    baseURL: `/api/`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${clientToken ? clientToken : ""}`,
    },
});
