import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import styles from "@/styles/admin-page.module.css";

import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EditIcon from "@mui/icons-material/Edit";
import RequestIcon from "@mui/icons-material/PendingActions";
import HistoryIcon from '@mui/icons-material/History';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { EventsContext } from './events-context';


const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
	  right: 8,
	  top: 25,
	  border: `2px solid ${theme.palette.background.paper}`,
	  padding: '0 4px',
	},
  }));



const AdminMenu = ({ activeTab, setActiveTab, openAdminPage }) => {

	const { eventsLength } = useContext(EventsContext);
	const { todolist } = useContext(EventsContext);

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
				className={`${activeTab === "todoTab" ? styles.active : ""}`}
				onClick={() => openAdminPage("todoTab")}>
				<StyledBadge badgeContent={todolist} color="info">
					<ChecklistIcon fontSize="large" /> 
				</StyledBadge>
				To Do List
			</IconButton>
			<IconButton
				className={`${activeTab === "requestsTab" ? styles.active : ""}`}
				onClick={() => openAdminPage("requestsTab")}>
					
					
					<StyledBadge badgeContent={eventsLength} color="info">
						<RequestIcon fontSize="large" />
					</StyledBadge>
				
				
				Pending Requests
				</IconButton>
			<IconButton
				className={`${activeTab === "historyTab" ? styles.active : ""}`}
				onClick={() => openAdminPage("historyTab")}>
				<HistoryIcon fontSize="large" /> History Tab
			</IconButton>
		</div>
	);
};

export default AdminMenu;
