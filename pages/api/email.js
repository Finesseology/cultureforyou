require("dotenv").config({ path: "sendgrid.env" });

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
	const { to, subject, text } = req.body;

	const msg = {
		to,
		from: "mail@cultureforu.com", // Change to your verified sender
		subject,
		text,
	};
	try {
		await sgMail.send(msg);
		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to send email" });
	}
}
