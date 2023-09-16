import React, { useState, useRef, useEffect} from 'react';
import { Calendar, TimeGrid, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from "@/styles/admin-page.module.css";
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState({
    start: Date,
    end: Date,
  });
  const [newEventTitle, setNewEventTitle] = useState('');
  const [deletedEvents, setDeletedEvents] = useState(false);
  const eventIDToDeleteRef = useRef();

  const handleSlotSelect = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setDeletedEvents(null);
  };

  // fetch and retrieve events from db and show them on the calendar
  const fetchEvents = async () => {
    try {
      const response = await fetch('./api/big-booking', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {

        const res = await response.json();

        const formattedEvents = res.appointments.map((event) => ({
          ...event,
          start: new Date(event.start_time),
          end: new Date(event.end_time),
        }));

        setEvents(formattedEvents);
        console.log("after fetch:")
        console.log(formattedEvents);
        console.log("events fetched successfully");

      } else {
        console.error('Error fetching events');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const handleAddEvent = () => {

    if (!selectedSlot.start || !selectedSlot.end || !newEventTitle) {
      alert('Please select a time slot and enter a title.');
      return;
    }

    // new event properties
    const newEvent = {
      id: events.length + 1,
      title: newEventTitle,
      start: new Date(selectedSlot.start),
      end: new Date(selectedSlot.end),
    };

    setEvents([...events, newEvent]);
    setNewEventTitle('');
    // send requests to the API endpoint to insert and add events into the db
    fetch('./api/big-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Event added successfully');
        } else {
          // Handle errors here
          console.error('Error adding event');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });

    //fetchEvents();
    //console.log(events);
  };

  async function deleteEvent(eventID) {

    const shouldDelete = window.confirm('Are you sure you want to delete this event?');

    if (shouldDelete) {

      fetch(`./api/big-booking?eventID=${eventID}`, { // this is not going to the API endpoint
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            console.log('Event deleted successfully');
            // Remove the deleted event from the events state
            setEvents((events) => events.filter((event) => event.id !== eventID));
          } else {
            // Handle errors here
            console.error('Error deleting event');
          }
        })
        .catch((error) => {
          console.error('Network error:', error);
        });
    }

  };

  // Custom event component with a delete button
  const CustomEvent = ({ event }) => (

    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1px' }}>

      <div style={{ marginLeft: '1px' }}> <strong>{event.title}</strong></div>
      <div style={{ marginLeft: '50px' }}></div>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteEvent(event.id)} style={{ color: 'red' }} />
    </div>
  );

  useEffect(() => {

    fetchEvents();
  }, []);

  return (
    <div>
      <div className={styles.adminCalendarContainer}>
        <div className={styles.eventTitleInput}>
          <strong>Enter Event Title: </strong>
          <input
            type="text"
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
          />
          <button onClick={handleAddEvent}>Add Event</button>
          <div className={styles.description}>
            <p>- <strong> To add </strong> a new event to the Calendar, click on the number of the day to open all the available times in that day. </p>
            <p>- <strong> Select </strong> the time slot by dragging cursor from time spot to another and then give it a title.</p>
            <p>- <strong> To delete</strong> an event click on the trash icon and confirm.</p>
          </div>
        </div>

        <Calendar
          localizer={localizer}
          events={events}
          selectable
          components={{ event: CustomEvent }} // Use the custom event component
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSlotSelect}
          slotPropGetter={(date) => {
            if (date >= selectedSlot.start && date < selectedSlot.end) {
              return {
                className: styles.selectedSlot,
              };
            }
            return {};
          }}
        />
      </div>
    </div>

  );
};

export default MyCalendar;
