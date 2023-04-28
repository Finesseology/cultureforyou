import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

function AdminAppointmentsPage() {

    const { data: session,status } = useSession();
    const router = useRouter();

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        async function getAppointments() {
            const res = await fetch("/api/selective-appointments");
            const data = await res.json();
            setAppointments(data.appointments);
        }

        getAppointments();
    }, []);

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    }

    function formatTime(timeString) {
        const militaryTime = timeString.split(":");
        const hours = parseInt(militaryTime[0], 10);
        const minutes = militaryTime[1];
        const period = hours >= 12 ? "PM" : "AM";
        const nonMilitaryHours = hours % 12 || 12;
        return `${nonMilitaryHours}:${minutes} ${period}`;
    }
    if (status === "unauthenticated") {
        router.push('/sign-in-page');
        return null;
    }

    return (
        <div>
            <h1>Appointments</h1>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.appointment_id}>
                        {appointment.firstName} {appointment.lastName}: {formatDate(appointment.date)} ({formatTime(appointment.startTime)} - {formatTime(appointment.endTime)})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminAppointmentsPage;
