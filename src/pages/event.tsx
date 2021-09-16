import React, {useEffect} from "react";
import {EventCalendar, EventForm} from "../components";
import {Button, Layout, Modal, Row} from "antd";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/event";

const Event = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const {fetchGuests, createEvent, fetchEvents} = useActions();
  const {guests, events} = useTypedSelector(state => state.eventReducer);
  const {user} = useTypedSelector(state => state.authReducer);
  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  };

  return (
    <Layout>
      <EventCalendar events={events}/>
      <Row justify="center">
        <Button
          onClick={() => setModalVisible(true)}
        >
        Add event
        </Button>
      </Row>
      <Modal
        title="Add event"
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm
          guests={guests}
          submit={addNewEvent}
        />
      </Modal>
    </Layout>
  );
};

export default Event;
