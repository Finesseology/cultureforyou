// this page will be inserted as a component into the admin tab for requests
// probably will need an api file to handle calls to the database
// possibly use materials stack or grid options for displaying data
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
import { useContext } from 'react';
import { EventsContext } from '../components/events-context';
import styles from "@/styles/admin-todo-list.module.css";





const HistoryAppointments = () => {


      const [events, setEvents] = useState([]);
      const [loading, setLoading] = useState(true);
      const { setEventsLength } = useContext(EventsContext);
      const { eventsLength } = useContext(EventsContext);
      const { setToDoList } = useContext(EventsContext);
      const { todolist } = useContext(EventsContext);
      const [appointment, setAppointment] = useState([]);
      

const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
};
const handleClose = () => {
        setAnchorEl(null);
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const url = `./api/appointment-history`;
      //console.log(status);
      const response = await fetch(url, {
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
        setLoading(false);
     
        console.log('Appointments fetched successfully');
      } else {
        console.error('Error fetching appointments');
        setLoading(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      setLoading(false);
    }
  };

  
  
  
  fetchData();

}, [eventsLength, todolist]);



const handleAction = async (status, id) => {
    setLoading(true);
    try {
      const url = `./api/confirm-appointments?status=${status}&id=${id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Event confirmed successfully');
        const appointmentInfo = events.filter((event) => event.id == id);
        setAppointment(appointmentInfo);
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
       
        setLoading(false);

        // incrementing the global variable for the size of events for the pending tab
       if(status === "pending") {
        setEventsLength(eventsLength+1);

       
       }

       // incrementing the global variable for the size of todo tasks for the todolist tab
       if (status === "accepted") {
        setToDoList(todolist+1);
        const text = `Your appointment for ${appointment[0].title} with Culture For You at ${appointment[0].start.toLocaleString()} has been ${status}.

Please give us 1-2 business days to contact you about deposit and location for the service to be done. 
If you have any questions or concerns, please contact us at cultureforyou1@gmail.com and we will get back to you shortly.
We thank you for choosing Culture For You.
        
Best Regards, 
Culture For You`;
        sendEmail(status, text);
       
       }

      } else {
        console.error('Error confirming event');
        setLoading(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      setLoading(false);
    }
  };

  const sendEmail = async (status, msgText) => {

    try {
			const response = await fetch('/api/email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					to: appointment[0].userId,
					subject: `Appointment Request With Culture For You has been ${status}.`,
					text: msgText,
				}),
			});
			if (response.ok) {
				//setMessage('Email sent successfully!');
			} else {
				//setMessage('Failed to send email.');
			}
		} catch (error) {
			console.error(error);
			//setMessage('Failed to send email');
		}
  };
  




      return (
    
    
       <div className={styles.scrollableTable}>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
      <TableCell>Email Address</TableCell>
      <TableCell align="left">Full Name</TableCell>
      <TableCell align="left">Title</TableCell>
      <TableCell align="left">Start Time</TableCell>
      <TableCell align="left">End Time</TableCell>
      <TableCell align="left">Status</TableCell>
      <TableCell align="center">Move to To-Do List</TableCell>
      <TableCell align="center">Move to Pending Requests</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  {loading ? (
    <p>Loading...</p>
  ) : (
    events.map((event) => (
      <TableRow
        key={event.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="left">{event.userId}</TableCell>
        <TableCell align="left">{event.userName}</TableCell>
        <TableCell align="left">{event.title}</TableCell>
        <TableCell align="left">{event.start.toLocaleString()}</TableCell>
        <TableCell align="left">{event.end.toLocaleString()}</TableCell>
        <TableCell align="left">{event.status}</TableCell>
        <TableCell align="center"> 
        <Button onClick={() => handleAction('accepted', event.id)}>Accept</Button>
        </TableCell>
        <TableCell align="center">
            <Button onClick={() => handleAction('pending', event.id)}>Pending</Button>
        </TableCell>
      </TableRow>
    ))
  )}
</TableBody>
</Table>
</TableContainer>
       </div>
        

        
          
    );
}


export default HistoryAppointments;