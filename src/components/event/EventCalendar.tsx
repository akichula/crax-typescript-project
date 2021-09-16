import React from "react";
import {Badge, Calendar} from "antd";
import {IEvent} from "../../models/event";
import {Moment} from "moment";
import {formatDate} from "../../utils/date";

interface IEventCalendarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<IEventCalendarProps> = (props) => {
  function dateCellRender(value: Moment) {
    const formattedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(val => val.date === formattedDate);
    return (
      <div>
        {currentDayEvents.map((currEvent, index) =>
          <div key={index}>
            {currEvent.description}
          </div>
        )}
      </div>
    );
  }
  return (
    <Calendar
      dateCellRender={dateCellRender}
    />
  );
};

export default EventCalendar;
