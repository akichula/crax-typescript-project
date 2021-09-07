import {IAuthInitialState, TAuthAction, AuthActionsEnum} from "./types";

const initialState: IAuthInitialState = {
  isAuth: false
};

export default function authReducer(state = initialState, action: TAuthAction): IAuthInitialState {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return {...state, isAuth: action.payload};

    default: return state;
  }
}
