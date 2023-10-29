import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/admin-page.module.css";
import { useSession } from "next-auth/react";
import PendingAppointments from "./pending-appointments";
import UserMenu from "../components/user-page-menu";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
import UserConfirmedTab from "./user-confirmed-tab";
import UserHistoryTab from "./user-history-tab";

const UserPage = () => {
	const { data: session } = useSession();
	const router = useRouter();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const { status } = useSession();
	//CHecking to see if logged in
	const isUser = status === "authenticated";
    //const userEmail = session.user.email;
	//Setting the first tab when this page is access the add calender tab
	const [activeTab, setActiveTab] = useState("confirmedTab");

	// Use useEffect to redirect if the user is not authenticated
	useEffect(() => {
		if (!isUser) {
			router.push("/404");
		}


	}, [isUser, router]);

	//If logged in user is authenticated, show this and hide the rest
	//This denies the access just incase if anyone from outside somehow discover this page
	if (!isUser) {
		return <div className={styles.notAdminMessage}>Access denied. Please sign in to view this page.</div>;
	}



	const openUserPage = (userTabSelect) => {
		setActiveTab(userTabSelect);
	};

	//If user is logged in, then show the page
	return (
		<>
			<div className={styles.adminPageContainer}>
				<div className={styles.adminPageTitle}>User Page</div>
				<div className={styles.adminPageDescription}>
					Welcome to the User Dashboard. Use the menu to the left to nagivate through the pages.
				</div>

				<UserMenu activeTab={activeTab} setActiveTab={setActiveTab} openUserPage={openUserPage}/>

				<div
					id="confirmedTab"
					className={`${styles.tabcontent} ${activeTab === "confirmedTab" ? styles.active : styles.hidden}`}>
					<div className={styles.adminPageSectionTitle2}>Appointments</div>
                    <div><UserConfirmedTab/></div>
				</div>

        <div
					id="historyTab"
					className={`${styles.tabcontent} ${activeTab === "historyTab" ? styles.active : styles.hidden}`}>
					<div className={styles.adminPageSectionTitle2}>History</div>
                    <div><UserHistoryTab/></div>
				</div>

			</div>
		</>
	);
};

export default UserPage;