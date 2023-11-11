import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import RequestIcon from "@mui/icons-material/PendingActions";
import styles from "@/styles/admin-page.module.css";
import HistoryIcon from '@mui/icons-material/History';
import EventNoteIcon from '@mui/icons-material/EventNote';

const UserMenu = ({ activeTab, setActiveTab, openUserPage }) => {
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
        className={`${styles.tabButton} ${activeTab === "confirmedTab" ? styles.active : ""}`}
        onClick={() => openUserPage("confirmedTab")}
      >
        <EventNoteIcon fontSize="large" /> Upcoming
      </IconButton>

      <IconButton
        className={`${styles.tabButton} ${activeTab === "historyTab" ? styles.active : ""}`}
        onClick={() => openUserPage("historyTab")}
      >
        <HistoryIcon fontSize="large" align="center" />History 
      </IconButton>

      
    </div>
  );
};

export default UserMenu;