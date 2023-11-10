import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
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
const UserConfirmedTab = () => {


    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data: session } = useSession();
	const router = useRouter();
    

    const { status } = useSession();
	//CHecking to see if logged in
	const isUser = status === "authenticated";
    //const userEmail = session.user.email;
	//Setting the first tab when this page is access the add calender tab
	

    useEffect(() => {
        const fetchData = async (emailAddress) => {
          try {
            const url = `./api/user-appointments?userId=${emailAddress}`;
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
      
        
        
        const emailAddress = session.user.email;
        fetchData(emailAddress);
      
      }, [events]);





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
      const updatedEvents = events.filter((event) => event.id !== id);
      setEvents(updatedEvents);
      //fetchData('pending');
      setLoading(false);
     
    } else {
      console.error('Error confirming event');
      setLoading(false);
    }
  } catch (error) {
    console.error('Network error:', error);
    setLoading(false);
  }
};





    return (
  
  
     <div>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
      
      <TableCell align="left">Title</TableCell>
      <TableCell align="left">Start Time</TableCell>
      <TableCell align="left">End Time</TableCell>
      <TableCell align="left">Status</TableCell>
      <TableCell align="left">Cancel Appointment</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
  {loading ? (
    <p>Loading...</p>
  ) : (
    events
      .filter((event) => event.status === "accepted" || event.status === "pending")
      .map((event) => (
      <TableRow
        key={event.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="left">{event.title}</TableCell>
        <TableCell align="left">{event.start.toLocaleString()}</TableCell>
        <TableCell align="left">{event.end.toLocaleString()}</TableCell>
        <TableCell align="left">{event.status}</TableCell>
        <TableCell align="left">
          <Button onClick={() => handleAction('canceled', event.id)}>Cancel</Button>
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


export default UserConfirmedTab;