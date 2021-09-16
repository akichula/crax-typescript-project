import {IUser} from "../../../models/user";
import {IEvent} from "../../../models/event";

export interface IEventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS"
}

export interface ISetGuestAction {
  type: EventActionEnum.SET_GUESTS,
  payload: IUser[];
}

export interface ISetEventAction {
  type: EventActionEnum.SET_EVENTS,
  payload: IEvent[];
}

export type EventAction = ISetEventAction | ISetGuestAction

