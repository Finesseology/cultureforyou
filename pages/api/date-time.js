//get date and time the user selected and send it over to confirm appt
const app = (req, res) => {
try {
  const { date, time } = req.body;
  res.json({date, time });
} catch (error) {
  // unhide to check error
  res.status(500).json({ error: error.message });
}
}
export default app;