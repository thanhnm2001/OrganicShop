import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./type";
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
export const login = (username, password) => (dispatch) => {

    return AuthService.login(username, password).then(
        (data) => {

            // console.log(data)

            dispatch({
                type: 'CHANGE_VIEW',
                payload: data.roles[0]
            })
            return Promise.resolve(data);
        },
        (error) => {
            // console.log(error.response.data)
            // const message =
            //     (error.response &&
            //         error.response.data &&
            //         error.response.data.message) ||
            //     error.message ||
            //     error.toString();
            // console.log(error)
            return Promise.reject(error.response.data);
        }
    );
};
