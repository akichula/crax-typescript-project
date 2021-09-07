
export interface IAuthInitialState {
  isAuth: boolean;
}

export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH"
}

interface ISetAuthAction {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean
}

export type TAuthAction = ISetAuthAction

