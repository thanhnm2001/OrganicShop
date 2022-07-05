import axios from "axios";


const API_URL = "http://localhost:8080/category";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

const getAllCategory = (access_token) => {
    return axios.get(API_URL, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    });
};

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export default {
    getAllCategory,

};