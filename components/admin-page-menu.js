import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import styles from "@/styles/admin-page.module.css";

import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EditIcon from "@mui/icons-material/Edit";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const AdminMenu = ({ activeTab, setActiveTab, openAdminPage }) => {
	return (
		<div className={styles.selectTab}>
			<div className={styles.menuTitle}>
				<div className={styles.menuTitleContent}>
					<MenuIcon fontSize="large" /> <span>Menu</span>
				</div>
			</div>

			<div className={styles.centerDivider}>
				<hr className={styles.menuDivider} />
			</div>

			<IconButton
				className={`${activeTab === "CalendarTab" ? styles.active : ""}`}
				onClick={() => openAdminPage("CalendarTab")}>
				<EditCalendarIcon fontSize="large" /> Calendar
			</IconButton>
			<IconButton
				className={`${activeTab === "addImageTab" ? styles.active : ""}`}
				onClick={() => openAdminPage("addImageTab")}>
				<EditIcon fontSize="large" /> Edit Shop Items
			</IconButton>
			<IconButton
				className={`${activeTab === "analyticsTab" ? styles.active : ""}`}
				onClick={() => openAdminPage("analyticsTab")}>
				<AnalyticsIcon fontSize="large" /> Analytics
			</IconButton>
		</div>
	);
};

export default AdminMenu;
