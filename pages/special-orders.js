import { useState } from "react";
import styles from "../styles/special-orders.module.css";

export default function SendEmail() {
	const [clientName, setClientName] = useState("");
	const [returnEmail, setReturnEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [productType, setProductType] = useState("");
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
					subject: `Special Order Request. From: ${clientName}. Ordering: ${productType}`,
					text: `From: ${clientName} \nEmail: ${returnEmail} \n\nOrdering: ${productType} \n\n${text}`,
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
			<h1 className={styles.titleH1}>Send Order</h1>
			<p className={styles.descP}> Please fill out the form below to send your order request.</p>

			<div className={styles.formContainer}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label htmlFor="clientName">Name </label>

				<input
					
					type="text"
					id="clientName"
					value={clientName}
					onChange={(e) => setClientName(e.target.value)}
					style={{ resize: "none", height: "25px", width: "100%"}}
					required
				/>
				<br />

				<label htmlFor="returnEmail">Email </label>
				<input
					type="email"
					id="returnEmail"
					value={returnEmail}
					onChange={(e) => setReturnEmail(e.target.value)}
					style={{ resize: "none", height: "25px", width: "100%" }}
					required
				/>
				<br />

				<label htmlFor="productType">Product Type </label>
				<select
					id="productType"
					value={productType}
					onChange={(e) => setProductType(e.target.value)}
					style={{ height: "32px", width: "100%", textAlign: "center" }}
					required>
					<option value="">Select a product type</option>
					<option value="Toppers">Toppers</option>
					<option value="Engraving">Engraving</option>
					<option value="Wedding Signs">Wedding Signs</option>
					<option value="Engraving and Toppers">Engraving and Toppers</option>
					<option value="Wedding Signs and Toppers">Wedding Signs and Toppers</option>
					<option value="TWedding Signs and Engraving">Wedding Signs and Engraving</option>
					<option value="Wedding Signs, Engraving, and Toppers">Wedding Signs, Engraving, and Toppers</option>
				</select>
				<br />

				<label htmlFor="text">Description of desired order(s): </label>
				<textarea
					id="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					rows={4}
					style={{ resize: "none", height: "130px", width: "100%" }}
					required></textarea>
				<br />

				<button type="submit" className={styles.button}>
					Send Order
				</button>
			</form>
			</div>
			{message && <p className={styles.smessage}>{message}</p>}
		</div>
	);
}
