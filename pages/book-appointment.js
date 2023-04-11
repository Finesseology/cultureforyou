import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from "@/styles/AppointmentBooking.module.css";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from "react";

function BookingForm() { 
  const [selectedDate, setSelectedDate] = React.useState(null);
  const router = useRouter();
  const [email, setEmail] = useState(); 
    const { status } = useSession({
      required: true,
      onUnauthenticated() {
        router.push('/signInPage'); 
        return <p>Redirecting you to the login page...</p>
      },
    })

    if (status === "loading") {
        return <p>Loading...</p>
    }

    function handleEmailChange(event) {
      setEmail(event.target.value);
    }

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch("/api/email", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ to: email, subject: "Appointment confirmed for " + date, text: '<p>Your appointment has been confirmed.</p>' }),
          });
          if (response.ok) {
              setMessage("Email sent successfully");
          } else {
              setMessage("Failed to send email");
          }
      } catch (error) {
          console.error(error);
          setMessage("Failed to send email");
      }
  };

 return ( 
   <div className={styles.bookingForm}>
       <center>
     <h2>Book an Appointment</h2>
     <form>
       <div className={styles.formGroup}>
         <DatePicker
           id="date"
           selected={selectedDate}
           onChange={date => setSelectedDate(date)}
           timeIntervals={60}
           minDate={new Date()}
           minTime={new Date().setHours(9, 0)}
           maxTime={new Date().setHours(16, 0)}
           dateFormat="MMMM d, yyyy h:mm aa"
           showTimeSelect
           timeFormat="HH:mm"
           timeCaption="Time"
           filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
           placeholderText="Select a date and time"
           shouldCloseOnSelect
           className={styles.datepicker}
           />
       </div>
       <div className={styles.formGroup}>
       <form onSubmit={handleSubmit}>
      <label> 
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label><div>
            <button type="submit" className={styles.submitButton}>Submit</button>
            </div>
            </form>
       </div>
     </form>
     </center>
   </div>
 );
}


export default BookingForm;