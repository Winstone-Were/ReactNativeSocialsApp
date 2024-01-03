
import { LOGOUT, LOGIN_SUCCESS } from "./type";
import AuthService from "../services/authService";

export const login = (user) => (dispatch) =>{
    return AuthService.logIn(user).then(
        (response)=>{
            if(response.status == "success") {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user: response.user}
                });
                Promise.resolve();
                return response;
            }
        },
        (error) => {
            const meassage = error.toString();
            Promise.reject();
            return meassage;
        }
    );
}

export const logout = () => (dispatch) => {
    return AuthService.logOut().then((response) => {
      if (response.status === "success") {
        dispatch({
          type: LOGOUT,
        });
        Promise.resolve();
        return response;
      }
    });
  };