import React, { useState, useEffect } from 'react';
import { Calendar, TimeGrid, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from "@/styles/admin-page.module.css";
import moment from 'moment';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState({
    start: Date,
    end: Date,
  });
  const [newEventTitle, setNewEventTitle] = useState('');
  const [deletedEvents, setDeletedEvents] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContnet, setPopupContent] = useState(null); // Events info popup
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [InfoPopUP, setInfoPopUP] = useState(null); // Instructions Block
  const [showPopup1, setShowPopup1] = useState(false); // to handle showing the instructions popUp


  const handleSlotSelect = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setDeletedEvents(null);

    const InfoPopUP = (
      <div>
        <h3> Calendar Instructions </h3>
        <p>Clicking on the day box allows you to add an event but without time slot. Click on the number of the day for the day view. </p>
        <p>In the day view, select the time range by dragging the cursor from a slot to another and then enter the Event title in the box on the right.</p>
        <p>Click on Add Event button.</p>
      </div>
    );

    setInfoPopUP(InfoPopUP);
    setShowPopup1(true);
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

    <div className={styles.faTrash}>
      <div style={{ marginLeft: '1px' }}> <strong>{event.title}</strong></div>
      <div style={{ marginLeft: '10px' }}></div>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteEvent(event.id)} style={{ color: 'red' }} />
    </div>
  );

  useEffect(() => {

    fetchEvents();
  }, []);

  const handleDayClick = (event) => {

    const { title, start, end } = event;
    // Capture the click event and set the position and text for the popup.
    const position = {
      top: 100,
      left: 100,
    };

    const popupContnet = (
      <div>
        <h3> {title} </h3>
        <p>From: {start.toLocaleString()}</p>
        <p>To: {end.toLocaleString()}</p>
      </div>
    );

    setPopupPosition(position);
    setPopupContent(popupContnet);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const customToolBar = {
    next: '▶️',
    previous: '◀️',
  };

  const EventList = ({ events }) => {
    return (
      <div className={styles.moreEvents}>
        <h3>Events on this day:</h3>
        <ul>
          {events.map((event) => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    );
  };

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
          {showPopup && (
            <div
              className={styles.popUpWindow}
            >
              <button onClick={closePopup}>Close</button>
              <p> <strong> Event Info</strong>: </p>
              {popupContnet}
            </div>
          )};

          {showPopup1 && (
            <div className={styles.InfoWindow}>
              <button onClick={() => setShowPopup1(false)}>Close</button>
              {InfoPopUP}
            </div>
          )}

        </div>

        <Calendar
          localizer={localizer}
          events={events}
          popup={EventList}
          messages={customToolBar}
          selectable
          components={{ event: CustomEvent }} // Use the custom event component
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSlotSelect}
          onSelectEvent={handleDayClick}
          slotPropGetter={(date) => {
            if (date >= selectedSlot.start && date < selectedSlot.end) {
              return {
                className: styles.selectedSlotMark,
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
