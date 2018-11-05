import React, { Component } from "react";
import { connect } from "react-redux";
import cuid from "cuid";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { createEvent, updateEvent, deleteEvent } from '../eventActions'

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = value => () => {
    this.setState({
      selectedEvent: null,
      isOpen: !value
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
  };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content="Create event"
            onClick={this.handleFormOpen(this.state.isOpen)}
          />
          {this.state.isOpen && (
            <EventForm
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleFormCancel={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
