import { useEffect, useState } from "react";
import styles from '../styles/appointment.module.css'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import { query } from "../lib/db";

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // to handle selected dates on the calendar
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]); // handle time slots
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // handle the selected time slot
  const [showConfirmation, setShowConfirmation] = useState(false); // show and confirm the chosen time slot

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    console.log("Before calling fetchAvailableTimeSlots");
    fetchAvailableTimeSlots(date);
    console.log("After calling fetchAvailableTimeSlots");
  };

  function handleSelectTimeSlot(timeSlots) {
    setSelectedTimeSlot(timeSlots);
  }

  function handleConfirmAppointment() {
    setShowConfirmation(true);
  }

  const fetchAvailableTimeSlots = async (selectedDate, res) => {
    // make API call to fetch available time slots for the selected date

    try {
      const querySql = "SELECT DATE_FORMAT(timeSlots, '%h:%i %p') as time FROM appointments";
      const valueParams = [];
      const data = await query({ query: querySql, values: [valueParams] });
      setAvailableTimeSlots(data.appointments);

      res.status(200).json({ appointments: data });
    } catch (error) {
    // unhide to check error
      res.status(500).json({ error: error.message });
    }      
  };

  return (
    <div className={styles.pageContainer}>
      <h1> Appointment Times </h1>
      <Calendar onChange={handleSelectDate} value={selectedDate} />
      <div className={styles.textContainer}>
        <p>Select a date on the calendar to see available time slots:</p>

        {availableTimeSlots.length > 0 ? (
          <select onChange={(event) => handleSelectTimeSlot(event.target.value)}>

            {availableTimeSlots.map((appointment) => (
              <option key={appointment.time} value={appointment.time}>
                {appointment.time}
              </option>
            ))}
          </select>
        ) : (
          <p>No available time slots for this day</p>
        )}
        {selectedTimeSlot && (
          <div>
            <p>You have selected {selectedDate.toDateString()} at {selectedTimeSlot}.</p>
            <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
          </div>
        )}
        {showConfirmation && (
          <div>
            <p>Your appointment on {selectedDate.toDateString()} at {selectedTimeSlot} has been confirmed.</p>
          </div>
        )}
      </div>
     
    </div>
  );
}




