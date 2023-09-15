import React, { useState } from "react";
import styles from "@/styles/admin-page.module.css";
import { useSession } from "next-auth/react";
import MyCalendar from './big-calendar';
const AdminPage = () => {
	const { data: session } = useSession();

	//Setting admin to the cultureforyou email by checking the logged in session
	const isAdmin = session && session.user && session.user.email === "cultureforyou1@gmail.com";

	//Setting the first tab when this page is access the add calender tab
	const [activeTab, setActiveTab] = useState("addCalenderTab");

	const openAdminPage = (adminTabSelect) => {
		setActiveTab(adminTabSelect);
	};

	//If logged in user is not admin the cultureforyou email, show this and hide the rest
	//This denies the access just incase if anyone from outside somehow discover this page
	if (!isAdmin) {
		return <div className={styles.notAdminMessage}>You are not an admin.</div>;
	}

	//If the logged in is the admin with the cultureforyou email, then show the page
	return (
		<>
			<div className={styles.adminPageContainer}>
				<div className={styles.adminPageTitle}>Admin Page</div>

				{/*These are the three tab selection on the side */}
				<div className={styles.selectTab}>
					<button
						className={`${styles.tablinks} ${activeTab === "addCalenderTab" ? styles.active : ""}`}
						onClick={() => openAdminPage("addCalenderTab")}>
						Add Calendar
					</button>
					<button
						className={`${styles.tablinks} ${activeTab === "addImageTab" ? styles.active : ""}`}
						onClick={() => openAdminPage("addImageTab")}>
						Add Image
					</button>
					<button
						className={`${styles.tablinks} ${activeTab === "analyticsTab" ? styles.active : ""}`}
						onClick={() => openAdminPage("analyticsTab")}>
						Analytics
					</button>
				</div>

				{/*These are the three tab Contents.*/}
				<div
					id="addCalenderTab"
					className={`${styles.tabcontent} ${
						activeTab === "addCalenderTab" ? styles.active : styles.hidden
					}`}>
					<div className={styles.adminCalenderContainer}> < MyCalendar/> </div>
				</div>

				<div
					id="addImageTab"
					className={`${styles.tabcontent} ${activeTab === "addImageTab" ? styles.active : styles.hidden}`}>
					<div className={styles.adminPageSectionTitle}>Implement Add Image here</div>
				</div>

				<div
					id="analyticsTab"
					className={`${styles.tabcontent} ${activeTab === "analyticsTab" ? styles.active : styles.hidden}`}>
					<div className={styles.adminPageSectionTitle}>Implement Analytics here</div>
				</div>
			</div>
		</>
	);
};

export default AdminPage;
