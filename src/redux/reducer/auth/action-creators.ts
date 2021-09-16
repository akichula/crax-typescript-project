import {AuthActionsEnum, ISetAuthAction, ISetErrorAction, ISetIsLoading, ISetUser} from "./types";
import {IUser} from "../../../models/user";
import {TAppDispatch} from "../../store";
import UserService from "../../../api/UserService";

export const AuthActionCreator = {
  setUser: (user: IUser): ISetUser => ({type: AuthActionsEnum.SET_USER, payload: user}),
  setIsAuth: (auth: boolean): ISetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
  setIsLoading: (payload: boolean): ISetIsLoading => ({type: AuthActionsEnum.SET_IS_LOADING, payload: payload}),
  setError: (payload: string): ISetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: payload}),
  login: (username: string, password: string) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(AuthActionCreator.setIsLoading(true));
      setTimeout(async () => {
        const getUsers = await UserService.getUsers();
        const mockUser = getUsers.data.find((user) => user.username === username && user.password === password);
        if (mockUser) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", mockUser.username);
          dispatch(AuthActionCreator.setUser(mockUser));
          dispatch(AuthActionCreator.setIsAuth(true));
        } else {
          dispatch(AuthActionCreator.setError("Invalid username or password!"));
        }
        dispatch(AuthActionCreator.setIsLoading(false));
      }, 1500);
    } catch (e) {
      dispatch(AuthActionCreator.setError("login error! try again"));
    }
  },
  logout: () => async (dispatch: TAppDispatch) => {
    try {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
      dispatch(AuthActionCreator.setUser({} as IUser));
      dispatch(AuthActionCreator.setIsAuth(false));
    } catch (e: unknown) {
      console.error(e);
    }
  }
};
