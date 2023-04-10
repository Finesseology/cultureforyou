import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import styles from '../styles/user-calendar.module.css'; 
import 'react-calendar/dist/Calendar.css'; 
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function AppointmentsCalendar() {
    const [value, setValue] = useState(new Date());
    const [unavailableTimes, setUnavailableTimes] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            fetch('/api/appointments', {})
                .then(response => response.json())
                .then(data => {
                    const appointments = data.appointments;
                    const unavailableTimes = appointments.map(appointment => new Date(appointment.appointmentStart));
                    setUnavailableTimes(unavailableTimes);
                    setAppointments(appointments);
                })
                .catch(error => console.error(error));
        }
    }, [status]);

    const tileDisabled = ({ date }) => unavailableTimes.some(time => time.getTime() === date.getTime());

    const selectedAppointments = appointments.filter(appointment => {
        const startTime = new Date(appointment.appointmentStart);
        return startTime.getDate() === value.getDate() && startTime.getMonth() === value.getMonth() && startTime.getFullYear() === value.getFullYear();
    });

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        router.push('/signInPage');
        return null;
    }

    return (
        <div className={styles.pageContainer}>
            <Calendar onChange={setValue} value={value} tileDisabled={tileDisabled} />
            <h2>Appointments on {value.toLocaleDateString()}:</h2>
            {selectedAppointments.length > 0 ? (
                <ul>
                    {selectedAppointments.map(appointment => (
                        <li key={appointment.appointmentId}>{appointment.appointmentTitle} from {new Date(appointment.appointmentStart).toLocaleTimeString()} to {new Date(appointment.appointmentEnd).toLocaleTimeString()}</li>
                    ))}
                </ul>
            ) : (
                <p>No appointments found for this date</p>
            )}
        </div>
    );
}

export default AppointmentsCalendar;