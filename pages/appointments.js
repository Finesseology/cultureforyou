import styles from "../styles/appointments.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { useRouter } from "next/router";
import AppointmentForm from "./appointments-form";

export default function Appointment() {
	const [selectedDate, setSelectedDate] = useState(new Date()); // to handle selected dates on the calendar
	const [availableTimeSlots, setAvailableTimeSlots] = useState([]); // handle time slots
	const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // handle the selected time slot
	const router = useRouter();

	const handleSelectDate = (date) => {
		setSelectedDate(date);
		fetchAvailableTimeSlots(date);
	};

	function handleSelectTimeSlot(timeSlots) {
		setSelectedTimeSlot(timeSlots);
	}

	const handleConfirmAppointment = async () => {
		const response = await fetch("/api/dateTime", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ date: selectedDate, time: selectedTimeSlot }),
		});
		if (response.ok) {
			const { date, time } = await response.json();
			// Redirect to the page where the date and time will be displayed
			router.push(`/book-appointment?date=${date}&time=${time}`);
		} else {
			console.error("Error:", response.status);
		}
	};

	const fetchAvailableTimeSlots = async (selectedDate) => {
		// make API call to fetch available time slots for the selected date
		const apiUrlEndpoint = "./api/booking";
		const response = await fetch(apiUrlEndpoint);
		const res = await response.json();
		console.log(res.appointments);
		setAvailableTimeSlots(res.appointments);
	};

	return (
		<div>
			<h1 className={styles.heading}>Appointment Times</h1>
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
							<p>
								You have selected {selectedDate.toDateString()} at {selectedTimeSlot}.
							</p>
							<button onClick={handleConfirmAppointment}>Confirm Appointment</button>
						</div>
					)}

					<div className={styles.formContainer}>
						<AppointmentForm />
					</div>
				</div>
			</div>
		</div>
	);
}
