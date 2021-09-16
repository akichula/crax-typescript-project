import React from "react";
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../../utils/rules";
import {IUser} from "../../models/user";
import {IEvent} from "../../models/event";
import {Moment} from "moment";
import {formatDate} from "../../utils/date";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IEventFormProps {
  guests: IUser[],
  submit: (event: IEvent) => void
}

const EventForm:React.FC<IEventFormProps> = (props) => {
  const {user} = useTypedSelector(state => state.authReducer);
  const [event, setEvent] = React.useState<IEvent>({
    author: "",
    date: "",
    guest: "",
    description: ""
  });
  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({...event, date: formatDate(date?.toDate())
      });
    }
  };
  const submitForm = () => {
    props.submit({...event, author: user.username});
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Event Name"
        name="Description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEvent({...event, description: e.target.value})}
        />
      </Form.Item>
      <Form.Item
        label="Choose event date"
        name="Date"
        rules={[rules.required("Date is required!"), rules.isDateAfter("No todos in past!")]}
      >
        <DatePicker
          onChange={(date: Moment | null) => selectDate(date)}
        />
      </Form.Item>
      <Form.Item
        label="Select guest"
        name="Select"
      >
        <Select onChange={(guest: string) => setEvent({...event, guest})}>
          {props.guests.map((guest) =>
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          )}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add event
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
