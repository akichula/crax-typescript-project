import {IUser} from "../../../models/user";

export interface IAuthInitialState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
  SET_ERROR = "SET_ERROR",
  SET_USER = "SET_USER",
  SET_IS_LOADING = "SET_IS_LOADING"
}

export interface ISetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean
}

export interface ISetErrorAction {
  type: AuthActionsEnum.SET_ERROR;
  payload: string
}

export interface ISetUser {
  type: AuthActionsEnum.SET_USER;
  payload: IUser
}

export interface ISetIsLoading {
  type: AuthActionsEnum.SET_IS_LOADING;
  payload: boolean
}

export type TAuthAction = ISetAuthAction | ISetErrorAction | ISetUser | ISetIsLoading
