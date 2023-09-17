import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import AppointmentForm from "./appointments-form";
import styles from "../styles/appointments.module.css";

const localizer = momentLocalizer(moment);

const Appointments = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await fetch('./api/big-booking', { //display dates from db
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const res = await response.json();

        const formattedEvents = res.appointments.map((event) => ({
          ...event,
          title: 'Not Available', // Set event title to "Not Available",
          start: new Date(event.start_time),
          end: new Date(event.end_time),
        }));

        setEvents(formattedEvents);
        setLoading(false);
        console.log("Events fetched successfully");
      } else {
        console.error('Error fetching events');
        setLoading(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
	<div>
	  <div style={{ textAlign: 'center' }}>
      <h1>Welcome to our appointment booking system!</h1>
      <p> This page provides you with an easy and convenient way to schedule your appointments. </p>
      <p> Below, you'll find a calendar displaying available dates and an option to book your appointment seamlessly. </p>
	  <p> Simply find an open date and fill out the required fields in the form. We will then contact you via email to confirm. </p>
    </div>
      <div style={{ textAlign: 'center' }}>
        <h2>Available Appointments</h2>
		<div style={{ margin: '0 auto', width: '80%' }}>
          <Calendar
            localizer={localizer}
            events={events}
            style={{ height: 400, width: 1200 }}
          />
		</div>
      </div>
	  <div className={styles.formContainer} style={{ textAlign: 'center' }}>
	      <AppointmentForm /> 
      </div>  
	</div>
  );
};

export default Appointments;
