import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

class EventDashboard extends Component {
<<<<<<< HEAD
  state = {
      events: eventsDashboard,
      isOpen: false
=======
  constructor(props) {
    super(props)

    this.state = {
      events: eventsDashboard,
      isOpen: false
    }
>>>>>>> f663bc78f3af07e8c6b82b93c5f0bcd2054a005b
  }

  handleFormOpen = (value) => () => {
    this.setState({
      isOpen: !value
    })
  }

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={10} >
          <EventList events={ this.state.events } />
        </Grid.Column>
        <Grid.Column width={6} >
          <Button positive content="Create event" onClick={this.handleFormOpen(this.state.isOpen)} />
          { this.state.isOpen &&
          <EventForm handleFormCancel={this.handleFormCancel} /> }
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard;
