import React from 'react';
import styles from "@/styles/appointment-booking.module.css";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from "react";
import { useEffect } from 'react';


const  BookingForm = ()  =>{
  const router = useRouter();
  const [email, setEmail] = useState();
  const [option, setType] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState('');

  useEffect(() => { //retrieve date and time from api
  const {date, time} = router.query;
  setDate(date);
  setTime(time);
  }, [router.query]);


  //PROTECTED PAGE
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
        router.push('/sign-in-page');
        return <p>Redirecting you to the login page...</p>
    },
  })

  if (status === "loading") {
       return <p>Loading...</p>
  }

   function handleEmailChange(event) {
     setEmail(event.target.value);
   }

   function handleAppointmentType(event) {
    setType(event.target.value);
  }


  //EMAIL CONFIRMATION TO USER
  const handleSubmit = async (e) => {
     e.preventDefault();
     try {
         const response = await fetch("/api/email", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({ to: email, subject: '<p>Your appointment has been confirmed.</p>', text: option + " appointment confirmed for " + thiss + " at " + time }),
         });
         if (response.ok) {
          console.log("Email sent");
         } else {
             console.log("email not snet");
         }
     } catch (error) {
         console.error(error);
     }
 };

return (
  <div className={styles.bookingForm}>
  <center>
    <h2>APPOINTMENT CONFIRMATION</h2>
    <form>
      <label htmlFor="options"> Choose appointment type: </label> 
      <select id="options" name="options" value={option} onChange={handleAppointmentType}> 
        <option value="Henna">Henna</option>
        <option value="Makeup">Makeup</option>
        <option value="Makeup & Henna">Both</option>
      </select>
      <br />
      <div>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange}/>
      </label>
     </div>
     <div>
      <p>Your Appointment Details: {option} appointment on {date} at {time}</p>
      <p>If no appointments visible please go back and select a date and time</p>
     </div>
     <div>
        <button type="submit" onSubmit={handleSubmit} className={styles.submitButton}>Submit</button>
     </div>
    </form>
  </center>
  </div>
);
}

export default BookingForm;
