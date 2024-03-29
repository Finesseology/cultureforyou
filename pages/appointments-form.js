import React, { useState } from 'react';
import styles from "../styles/appointment-form.module.css";
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


// Validation checks for first name and last name
if (!/^[A-Za-z]+$/.test(firstName)) {
	setErrorMessage('First and last name should contain letters only.');
	setErrorDialogOpen(true);
	return; // Exit the function if the first name format is invalid
}


if (!/^[A-Za-z]+$/.test(lastName)) {
	setErrorMessage('First and last name should contain letters only.');
	setErrorDialogOpen(true);
	return; // Exit the function if the last name format is invalid
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
}};

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
		<DialogTitle className={styles.dialogTitle}>Appointment Booking Inquiry</DialogTitle>
		<DialogContent className={styles.dialogContent}>
		  <form onSubmit={handleSubmit}>
			<div className={styles.formControl}>
			  <InputLabel>Day</InputLabel>
			  <div className={styles.datePickerContainer}>
				<DatePicker
				  id="date"
				  selected={selectedDate}
				  onChange={handleDateChange}
				  dateFormat="MM/dd/yyyy"
				  placeholderText="Select a date"
				  className={styles.datePicker}
				/>
			  </div>
			</div>
			<div className={styles.formControl}>
			  <TextField
				id="firstName"
				label="First Name"
				variant="outlined"
				fullWidth
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
				required
			  />
			</div>
			<div className={styles.formControl}>
			  <TextField
				id="lastName"
				label="Last Name"
				variant="outlined"
				fullWidth
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
				required
			  />
			</div>
			<div className={styles.formControl}>
			  <TextField
				id="email"
				label="Email"
				variant="outlined"
				fullWidth
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			  />
			</div>
			<div className={styles.formControl}>
			  <TextField
				id="title"
				label="Title"
				variant="outlined"
				fullWidth
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			  />
			</div>
			<div className={styles.formControl}>
			  <InputLabel>Start Time</InputLabel>
			  <div className={styles.startTimeContainer}>
				<Select
				  id="start-time"
				  value={start}
				  onChange={handleStartTimeChange}
				  required
				>
				  {startTimeOptions}
				</Select>
			  </div>
			</div>
			<div className={styles.formControl}>
			  <InputLabel>End Time</InputLabel>
			  <Select
				id="end-time"
				value={end}
				onChange={handleEndTimeChange}
				required
			  >
				{endTimeOptions}
			  </Select>
			</div>
			<div className={styles.buttonContainer}>
			  <Button onClick={closeForm} color="primary">
				Cancel
			  </Button>
			  <Button onClick={handleSubmit} color="primary">
				Send Order
			  </Button>
			</div>
		  </form>
		</DialogContent>
		<DialogActions>
		</DialogActions>
	  </Dialog>
  
	  <Dialog open={errorDialogOpen} onClose={closeErrorDialog}>
		<DialogTitle>Error</DialogTitle>
		<DialogContent>
		  <p className={styles.errorMessage}>{errorMessage}</p>
		</DialogContent>
		<DialogActions>
		  <Button onClick={closeErrorDialog} color="primary">
			OK
		  </Button>
		</DialogActions>
	  </Dialog>
  
	  {message && <p className={styles.successMessage}>{message}</p>}
	</div>
  );
}

export default AppointmentForm;
