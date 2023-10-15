import React, { useState } from 'react';
import styles from "../styles/special-orders.module.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, TextareaAutosize } from '@mui/material';

function AppointmentForm() {
    const [clientName, setClientName] = useState("");
	const [returnEmail, setReturnEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [text, setText] = useState("");
	const [message, setMessage] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false); 
    const [errorDialogOpen, setErrorDialogOpen] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(""); 


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: 'cultureforyou1@gmail.com',
                    subject: `Henna Appointment Request From: ${clientName}`,
                    text: `From: ${clientName} \nEmail: ${returnEmail} \n\nHenna Design Description:\n${text}`,
                }),
            });
            if (response.ok) {
                setMessage('Order sent successfully!');
            } else {
                setMessage('Failed to send Order.');
            }
        } catch (error) {
            console.error(error);
            setMessage('Failed to send email');
        } finally {
            closeForm(); // Close the form whether the submission was successful or not.
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

    return (
 <div>
            <button onClick={openForm}>Open Form</button>

            <Dialog open={isFormOpen} onClose={closeForm}>
                <DialogTitle>Appointment Booking Inquiry</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type="email"
                            value={returnEmail}
                            onChange={(e) => setReturnEmail(e.target.value)}
                            required
                        />
                        <br />
                        <TextField
                            label="Please describe your Henna design"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                        />
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
