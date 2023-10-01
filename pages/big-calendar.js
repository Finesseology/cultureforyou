import React, { useState, useEffect } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
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
  const [currentView, setCurrentView] = useState('month'); // Default to Month view

  //add this const
  const [showAddEventForm, setShowAddEventForm] = useState(false);


  const handleSlotSelect = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setDeletedEvents(null);

    const InfoPopUP = (
      <div>
        <h3> How to use the admin calendar: </h3>
        <p>In the month view click on any event (colored blue) to see a description of the appointment on the right-hand side of the screen.</p>
        <p>To add an event, click on the day tab on the upper right-hand side of the calendar to open up the day view.</p>
        <p>Once in the day view go ahead select the time range for the appointment by dragging the cursor from one time slot to another based on appointment duration.</p>
        <p>Finally enter the event title on the right side of the screen and click on the "Add Event" button to add the appointment.</p>
      </div>
    );

    setInfoPopUP(InfoPopUP);
    setShowPopup1(true);

    //add thisline
    if (currentView === 'day' || currentView === 'week') {
      setShowAddEventForm(true);
    } else {
      setShowAddEventForm(false);
    }
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
    // Hide the "Add Event" form when switching from day view
    if (currentView !== 'day') {
      setShowAddEventForm(false);
    }
    fetchEvents()
  }, [currentView]); // Only update when currentView changes

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


  const handleViewChange = (newView) => {
    setCurrentView(newView);

    // Move the logic here to set showAddEventForm
  if (newView === 'day' || newView === 'week') {
    setShowAddEventForm(true);
  } else {
    setShowAddEventForm(false);
  }
  };

  return (
    <div>
      <div className={styles.adminCalendarContainer}>
        <div className={styles.eventTitleInput}>
          {showAddEventForm && ( // Show the form when showAddEventForm is true
            <>
              <strong>Enter Event Title: </strong>
              <input
                type="text"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
              />
              <button onClick={handleAddEvent}>Add Event</button>
            </>
          )}
          {showPopup && (
            <div
              className={styles.popUpWindow}
            >
              <button onClick={closePopup}>Close</button>
              <p> <strong> Event Info</strong>: </p>
              {popupContnet}
            </div>
          )}
           {(showPopup1 && currentView == 'month') && (
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
          defaultView="month"
          views={['month', 'day', 'week', 'agenda']}
          selectable
          components={{ event: CustomEvent }}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSlotSelect}
          onSelectEvent={handleDayClick}
          onView={handleViewChange}
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
