import {IUser} from "../../../models/user";
import {IEvent} from "../../../models/event";
import {EventActionEnum, ISetEventAction, ISetGuestAction} from "./types";
import {TAppDispatch} from "../../store";
import UserService from "../../../api/UserService";

export const EventActionCreator = {
  setGuests: (payload: IUser[]): ISetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload: payload}),
  setEvents: (payload: IEvent[]): ISetEventAction => ({type: EventActionEnum.SET_EVENTS, payload: payload}),
  fetchGuests: () => async (dispatch: TAppDispatch) => {
    try {
      const guests = await UserService.getUsers();
      dispatch(EventActionCreator.setGuests(guests.data));
    } catch (e: unknown) {
      console.error(e);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: TAppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = await JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreator.setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (e: unknown) {
      console.error(e);
    }
  },
  fetchEvents: (username: string) => async (dispatch: TAppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = await JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(value => value.author === username || value.guest === username);
      dispatch(EventActionCreator.setEvents(currentUserEvents));
    } catch (e: unknown) {
      console.error(e);
    }
  }
};
