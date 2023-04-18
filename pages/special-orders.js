import { useState } from "react";
import styles from "../styles/special-orders.module.css";

export default function SendEmail() {
	const [clientName, setClientName] = useState("");
	const [subject, setSubject] = useState("");
	const [text, setText] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					to: "cultureforyou1@gmail.com",
					subject: `Special Order request from: ${clientName}. Ordering: ${subject}`,
					text,
				}),
			});
			if (response.ok) {
				setMessage("Order sent successfully!");
			} else {
				setMessage("Failed to send Order.");
			}
		} catch (error) {
			console.error(error);
			setMessage("Failed to send email");
		}
	};

	return (
		<div className={styles.container}>
			<h1>Send Order</h1>
			<p> Please fill out the form below to send your order request.</p>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label htmlFor="clientName">Your Name: </label>

				<input
					type="text"
					id="clientName"
					value={clientName}
					onChange={(e) => setClientName(e.target.value)}
					style={{ resize: "none", height: "20px", width: "120%" }}
					required
				/>
				<br />

				<label htmlFor="subject">Product name(s): </label>
				<input
					type="text"
					id="subject"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					style={{ resize: "none", height: "20px", width: "120%" }}
					required
				/>
				<br />

				<label htmlFor="text">Description of desired order(s): </label>
				<textarea
					id="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					rows={4}
					style={{ resize: "none", height: "130px", width: "150%" }}
					required></textarea>
				<br />

				<button type="submit" className={styles.button}>
					Send Order
				</button>
			</form>
			{message && <p>{message}</p>}
		</div>
	);
}
