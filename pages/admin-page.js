import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/admin-page.module.css";
import { useSession } from "next-auth/react";
import UploadButton from "../components/upload-button";
import MyCalendar from "./big-calendar";

import AdminMenu from "../components/admin-page-menu";

const AdminPage = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const handleUploadSuccess = (message) => {
		console.log(message);
		// Perform any additional actions after a successful upload
	};

	//Setting admin to the cultureforyou email by checking the logged in session
	const isAdmin = session && session.user && session.user.email === "cultureforyou1@gmail.com";

	//Setting the first tab when this page is access the add calender tab
	const [activeTab, setActiveTab] = useState("CalendarTab");

	//If logged in user is not admin the cultureforyou email, show this and hide the rest
	//This denies the access just incase if anyone from outside somehow discover this page
	if (!isAdmin) {
		return <div className={styles.notAdminMessage}>Error.</div>;
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
					className={`${styles.tabcontent} ${activeTab === "addImageTab" ? styles.active : styles.hidden}`}>
					<div className={styles.uploadContainer}>
						<div style={{ textAlign: "center" }}>
							<h1>Upload an Image</h1>
							<p>Click the Browse button below to select an Image to upload to the server.</p>
							<p>
								After selecting an image file (PNG,JPG,JPEG,GIF), you may use the Upload button to
								upload it.
							</p>
							<p>You should recieve a Confirmation message that it has been uploaded.</p>
							<UploadButton onUpload={handleUploadSuccess} style={{ display: "inline-block" }} />
						</div>
					</div>
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
