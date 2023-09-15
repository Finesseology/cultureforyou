import Link from "next/link";
import { Typography, Chip, Stack, Button, useTheme } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styles from "../styles/404.module.css"; // Import the CSS module

const Custom404 = () => {
	const customTheme = useTheme();

	return (
		<div className={styles.container}>
			<Typography variant="h2" className={styles.title}>
				<span style={{ color: "#ff85a2" }}>Oops! 404 Error.</span>
				<br></br>
				<span style={{ color: "#ff85a2" }}>Page Not Found!</span>
				<br></br>
			</Typography>
			<Typography variant="subtitle1" className={styles.description}>
				Oops! It looks like you've taken a wrong turn. The page you were looking for is not available. Please
				check the URL or click on any of the buttons below to try to find what you are looking for.
			</Typography>
			<br></br>
			<div className={styles.buttonGroup}>
				<Link href="/" passHref>
					<Button size="large" variant="outlined" startIcon={<HomeIcon />} className={styles.button}>
						Home
					</Button>
				</Link>
				<Link href="/appointments" passHref>
					<Button size="large" variant="outlined" startIcon={<CalendarMonthIcon />} className={styles.button}>
						Appointments
					</Button>
				</Link>
				<Link href="/sign-in-page" passHref>
					<Button size="large" variant="outlined" startIcon={<LoginIcon />} className={styles.button}>
						Sign In
					</Button>
				</Link>
			</div>
			<br></br>
			<Typography variant="subtitle1" className={styles.link}>
				Perhaps you want to explore these pages:
			</Typography>
			<Stack direction="row" spacing={1} className={styles.chipContainer}>
				<Link href="/henna-showcase" passHref>
					<Chip label="Henna Showcase" variant="outlined" className={styles.chip} />
				</Link>
				<Link href="/topper" passHref>
					<Chip label="Wedding Topper Showcase" variant="outlined" className={styles.chip} />
				</Link>
				<Link href="/engraving-showcase" passHref>
					<Chip label="Engraving Showcase" variant="outlined" className={styles.chip} />
				</Link>
				<Link href="/wedding-sign" passHref>
					<Chip label="Wedding Sign Showcase" variant="outlined" className={styles.chip} />
				</Link>
				{/* End of the section */}
			</Stack>
		</div>
	);
};

export default Custom404;
