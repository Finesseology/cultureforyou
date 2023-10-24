import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/admin-page.module.css";
import { useSession } from "next-auth/react";
import MyCalendar from "../components/big-calendar";
import PendingAppointments from "./pending-appointments";


import AdminMenu from "../components/admin-page-menu";
import EditPage from "../components/edit-page";

const AdminPage = () => {
	const { data: session } = useSession();
	const router = useRouter();

	//Setting the first tab when this page is access the add calender tab
	const [activeTab, setActiveTab] = useState("CalendarTab");

	//If logged in user is not admin the cultureforyou email, show this and hide the rest
	//This denies the access just incase if anyone from outside somehow discover this page
	useEffect(() => {
		if (!session || !session.isAdmin) {
			// Redirect to a 404 page or display a message
			router.push("/404");
		}
	}, [session]);

	if (!session || !session.isAdmin) {
		// Return null or display a message
		return null;
	}

	const openAdminPage = (adminTabSelect) => {
		setActiveTab(adminTabSelect);
	};

	//If the logged in is the admin with the cultureforyou email, then show the page
	return (
		<>
			<div className={styles.adminPageContainer}>
				<div className={styles.adminPageTitle}>Admin Page</div>
				<div className={styles.adminPageDescription}>
					Welcome to the Admin Page. Use the menu to the left to nagivate through the pages.
				</div>

				<AdminMenu activeTab={activeTab} setActiveTab={setActiveTab} openAdminPage={openAdminPage} />

				{/*These are the three tab Contents.*/}
				<div
					id="CalendarTab"
					className={`${styles.tabcontent} ${activeTab === "CalendarTab" ? styles.active : styles.hidden}`}>
					<div className={styles.adminCalendarContainer}>
						<MyCalendar />
					</div>
				</div>

				<div
					id="addImageTab"
					style={{ backgroundColor: "#e0dedc" }}
					className={`${styles.tabcontent} ${activeTab === "addImageTab" ? styles.active : styles.hidden}`}
				>
					<EditPage activeTab={activeTab}
					/>
				</div>

				<div
					id="analyticsTab"
					className={`${styles.tabcontent} ${activeTab === "analyticsTab" ? styles.active : styles.hidden}`}>
					<div className={styles.adminPageSectionTitle}>Implement Analytics here</div>
				</div>

				<div
					id="requestsTab"
					className={`${styles.tabcontent} ${activeTab === "requestsTab" ? styles.active : styles.hidden}`}>
					<div className={styles.adminPageSectionTitle2}>Manage Pending Appointments Below</div>
					<div><PendingAppointments /></div>
				</div>
			</div >
		</>
	);
};

export default AdminPage;