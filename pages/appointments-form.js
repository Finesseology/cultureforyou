import React, { useState } from 'react';
import styles from "../styles/special-orders.module.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, InputLabel, TextareaAutosize } from '@mui/material';
import DatePicker from "react-datepicker"; // Import the DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import the styles


function AppointmentForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(""); // State for start time
    const [end, setEnd] = useState(""); // State for end time
    const [selectedDate, setSelectedDate] = useState(null); // Added state for selected date
	const [message, setMessage] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false); 
    const [errorDialogOpen, setErrorDialogOpen] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(""); 


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!firstName || !lastName || !email || !title || !selectedDate || !start || !end) {
            setErrorMessage('All fields are required.');
            setErrorDialogOpen(true);
            return; // Exit the function if any field is blank
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setErrorMessage('Invalid email format.');
            setErrorDialogOpen(true);
            return; // Exit the function if email format is invalid
        }

        // Prepare the appointment data
        const appointmentData = {
            firstName,
            lastName,
            email,
            title,
            start,
            end,
            selectedDate,
        };
        try {
            const response = await fetch('/api/appointmentRequest', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(appointmentData),
            });
        
            if (response.ok) {
              setMessage('Order sent successfully!');
              closeForm();
            } else {
              setMessage('Failed to send Order.');
              closeForm();
            }
          } catch (error) {
            console.error(error);
            setMessage('Failed to send email');
          }
    };
    

    const openForm = () => {
        setIsFormOpen(true);
      };

    const closeForm = () => {
        setIsFormOpen(false);
      };
    const closeErrorDialog = () => {
        setErrorDialogOpen(false);
    };

    const handleStartTimeChange = (e) => {
        setStart(e.target.value);
    };

    const handleEndTimeChange = (e) => {
        setEnd(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // Generate options for start and end times (9:00 AM to 5:00 PM, with 30-minute intervals)
    const startTimeOptions = [];
    const endTimeOptions = [];
    for (let hour = 9; hour <= 17; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format
            const amPm = hour < 12 ? 'AM' : 'PM';
            const formattedMinute = minute.toString().padStart(2, '0');
            const time = `${formattedHour}:${formattedMinute} ${amPm}`;
            startTimeOptions.push(
                <MenuItem key={time} value={time}>
                    {time}
                </MenuItem>
            );
            endTimeOptions.push(
                <MenuItem key={time} value={time}>
                    {time}
                </MenuItem>
            );
        }
    }


    return (
        <div>
            <button onClick={openForm}>Open Form</button>

            <Dialog open={isFormOpen} onClose={closeForm}>
                <DialogTitle>Appointment Booking Inquiry</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <br />
                        <div style={{ marginBottom: '20px' }}>
                            <InputLabel>Day</InputLabel>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="MM/dd/yyyy"
                                placeholderText="Select a date"
                            />
                        </div>
                        <br />
                        <InputLabel>Start Time</InputLabel>
                        <Select
                            value={start}
                            onChange={handleStartTimeChange}
                            required
                        >
                            {startTimeOptions}
                        </Select>
                        <br />
                        <InputLabel>End Time</InputLabel>
                        <Select
                            value={end}
                            onChange={handleEndTimeChange}
                            required
                        >
                            {endTimeOptions}
                        </Select>
                        <br />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeForm} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Send Order
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={errorDialogOpen} onClose={closeErrorDialog}>
                <DialogTitle>Error</DialogTitle>
                <DialogContent>
                    <p>{errorMessage}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeErrorDialog} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

            {message && <p>{message}</p>}
        </div>
    );
}
export default AppointmentForm;
