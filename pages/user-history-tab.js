import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const UserHistoryTab = () => {


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
      
      }, []);











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
    </TableRow>
  </TableHead>
  <TableBody>
  {loading ? (
    <p>Loading...</p>
  ) : (
    events
      .filter((event) => event.status === "denied" || event.status === "completed" || event.status === "canceled")
      .map((event) => (
      <TableRow
        key={event.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="left">{event.title}</TableCell>
        <TableCell align="left">{event.start.toLocaleString()}</TableCell>
        <TableCell align="left">{event.end.toLocaleString()}</TableCell>
        <TableCell align="left">{event.status}</TableCell>
        
      </TableRow>
    ))
  )}
</TableBody>
</Table>


</TableContainer>
     </div>
      

      
        
  );
}


export default UserHistoryTab;
