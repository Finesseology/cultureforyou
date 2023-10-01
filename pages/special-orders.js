import React, { useState } from 'react';
import { Container, Typography, TextField, Select, MenuItem, FormControl, InputLabel, TextareaAutosize, Button, FormHelperText } from '@mui/material';
import { styled, makeStyles } from '@mui/system';
import styles from "../styles/special-orders.module.css";


export default function SendEmail() {
	const [clientName, setClientName] = useState('');
	const [returnEmail, setReturnEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [productType, setProductType] = useState([]);
	const [text, setText] = useState('');
	const [message, setMessage] = useState('');

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
					subject: `Special Order Request. From: ${clientName}. Ordering: ${productType.join(', ')}`,
					text: `From: ${clientName} \nEmail: ${returnEmail} \n\nOrdering: ${productType.join(', ')} \n\n${text}`,
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
		}
	};

	return (
		<Container className={styles.container}>
			<Typography variant="h2" className={styles.titleH2}>
				Order Form
			</Typography>
			<Typography variant="h3" className={styles.titleH3}>
				Please fill out the form below to send your order request.
			</Typography>
			<Typography variant="h3" className={styles.titleH3}>
				We will get back to you with a price estimate.
			</Typography>

			<div className={styles.formContainer}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<FormControl fullWidth margin="normal">
						<TextField
							id="clientName"
							type="text"
							value={clientName}
							onChange={(e) => setClientName(e.target.value)}
							required
							label="Your Name"
							variant="outlined"
						/>
					</FormControl>

					<FormControl fullWidth margin="normal">
						<TextField
							id="returnEmail"
							type="email"
							value={returnEmail}
							onChange={(e) => setReturnEmail(e.target.value)}
							required
							label="Your Email"
							variant="outlined"
						/>
					</FormControl>

					<FormControl fullWidth margin="normal">
						<InputLabel htmlFor="productType">Product Type</InputLabel>
						<Select
							id="productType"
							multiple
							value={productType}
							onChange={(e) => setProductType(e.target.value)}
							required
							displayEmpty
							label="Select Product Type(s)"
							variant="outlined"
						>
							<MenuItem value="" disabled>
								Select product type(s)
							</MenuItem>
							<MenuItem value="Toppers">Toppers</MenuItem>
							<MenuItem value="Engraving">Engraving</MenuItem>
							<MenuItem value="Wedding Signs">Wedding Signs</MenuItem>
						</Select>
					</FormControl>

					<FormControl fullWidth margin="normal">
						<TextareaAutosize
							id="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
							rows={4}
							style={{
								minHeight: '100px',
								backgroundColor: '#d3c8c4', 
							}}
							required
							placeholder="Description of desired order(s)"
						/>
					</FormControl>

					<Button
						type="submit"
						variant="contained"
						className={styles.button}
						style={{ backgroundColor: '#d3c8c4', color: 'black', border: '1px solid black' }} 
					>
						Send Order
					</Button>

				</form>
			</div>
			{message && (
				<Typography variant="p" className={styles.smessage}>
					{message}
				</Typography>
			)}
		</Container>
	);
}

