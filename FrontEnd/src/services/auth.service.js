import axios from "axios";
const API_URL = "http://localhost:8080/";
const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {

            if (response.data.accessToken) {

                localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
                localStorage.setItem("username", JSON.stringify(response.data.username));
            }

            return response.data;
        });
};
export default { login };
