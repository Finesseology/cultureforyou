import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/admin-page.module.css";
import { useSession } from "next-auth/react";
import MyCalendar from "./big-calendar";

import AdminMenu from "../components/admin-page-menu";


const AdminPage = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [uploadFailure, setUploadFailure] = useState(false);
	const [uploadFlip, setUploadFlipper] = useState(false);

	const handleUploadSuccess = (message) => {
		console.log(message);
		setUploadFlipper(!uploadFlip);
		setUploadSuccess(true);
		setUploadFailure(false);
		setTitle('');
		setDescription('');
		setFile(null);
	};





	// Setting admin to the cultureforyou email by checking the logged-in session
	const isAdmin = session && session.user && session.user.email === process.env.ADMIN_EMAIL;

	// Setting the first tab when this page is accessed, the add calendar tab
	const [activeTab, setActiveTab] = useState("CalendarTab");
	const [imageType, setImageType] = useState('other');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [file, setFile] = useState(null);

	// Use useEffect to redirect if the user is not an admin
	useEffect(() => {
		if (!isAdmin) {
			router.push("/404");
		}
	}, [isAdmin, router]);

	//If logged in user is not admin the cultureforyou email, show this and hide the rest
	//This denies the access just incase if anyone from outside somehow discover this page
	if (!isAdmin) {
		return <div className={styles.notAdminMessage}>Error.</div>;
	}

	const openAdminPage = (adminTabSelect) => {
		setActiveTab(adminTabSelect);
	};


	const handleImageTypeChange = (event) => {
		setImageType(event.target.value);
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleImageUpload = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('imageType', imageType);
		formData.append('title', title);
		formData.append('description', description);
		formData.append('file', file);

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				handleUploadSuccess('Image uploaded successfully');
			} else {
				console.error('Failed to upload image');
				setUploadFlipper(!uploadFlip);
				setUploadSuccess(false);
				setUploadFailure(true);
			}
		} catch (error) {
			console.error('Error uploading image:', error);
			setUploadFlipper(!uploadFlip);
			setUploadSuccess(false);
			setUploadFailure(true);
		}
	};

	if (isAdmin) {
		return <div className={styles.notAdminMessage}>You are not an admin.</div>;
	}


	return (
			<div className={styles.adminPageContainer}>
				<div className={styles.adminPageTitle}>Admin Page</div>

				<div className={styles.adminPageDescription}>
					Welcome to the Admin Page. Use the menu to the left to nagivate through the pages.
				</div>

				<AdminMenu activeTab={activeTab} setActiveTab={setActiveTab} openAdminPage={openAdminPage} />

				{/*These are the three tab Contents.*/}
				<div
				id="CalendarTab"
				className={`${styles.tabcontent} ${activeTab === "CalendarTab" ? styles.active : styles.hidden
						}`}>
					<div className={styles.adminCalendarContainer}><MyCalendar /></div>
				</div>

				<div
					id="addImageTab"
					className={`${styles.tabcontent} ${activeTab === "addImageTab" ? styles.active : styles.hidden}`}
				>
					<div style={{ textAlign: "center" }} className={styles.uploadSuccessMessage}>
					<p>Uploading Images require you to select the Type of image.  </p>
					<p>	Selecting Other as the Image Type allows you to upload the image directly to the server.</p>
					<p>	Otherwise you select where you want the Image to go in the shop pages.</p>
					<p>	When an Image goes onto the store page it requires a Title which will appear right below the Image.</p>
					<p>You may optionally include a Description which would appear below the title.   </p>
					<p>Finally select an Image to upload. There will be text below here to inform you on a successful upload!</p>
					</div>
					<div className={styles.uploadContainer}>
					{uploadSuccess && (
						<div style={{ textAlign: "center", fontSize: "25px", color: "Green" }} className={styles.uploadSuccessMessage}>
								Image uploaded successfully. You can select a new file if needed.
							</div>
						)}
						{uploadFailure && (
						<div style={{ textAlign: "center", fontSize: "25px", color: "red" }} className={styles.uploadFailureMessage}>
								Image uploaded Failed. You can try select a new file if needed.
							</div>
						)}
						<div style={{ textAlign: "center" }}>
							<h1>Upload an Image</h1>
							<p>Click the Browse button below to select an Image to upload to the server.</p>
							<p>
								After selecting an image file (PNG,JPG,JPEG,GIF), you may use the Upload button to
								upload it.
							</p>
							<p>You should recieve a Confirmation message that it has been uploaded.</p>
							<form onSubmit={handleImageUpload}>
								<label htmlFor="imageType">Select Image Type:</label>
								<select name="imageType" id="imageType" value={imageType} onChange={handleImageTypeChange}>
									<option value="other">Other</option>
									<option value="weddingSign">Wedding Sign</option>
									<option value="engraving">Engraving</option>
									<option value="topper">Topper</option>
									<option value="henna">Henna</option>
								</select>

								{/* Conditional rendering of Image Title */}
								{imageType !== 'other' && (
									<div>
										<label htmlFor="title">Image Title:</label>
										<input
											type="text"
											name="title"
											id="title"
											value={title}
											onChange={handleTitleChange}
										/>
									</div>
								)}

								{/* Conditional rendering of Image Description */}
								{imageType !== 'other' && (
									<div>
										<label htmlFor="description">Image Description (optional):</label>
										<textarea
											name="description"
											id="description"
											value={description}
											onChange={handleDescriptionChange}
											style={{ height: '20px', resize: 'vertical' }}
										></textarea>
									</div>
								)}
								<div>
									{!uploadFlip && (
										<div>
											<label htmlFor="file">Select Image File:</label>
											<input type="file" name="file" id="file" accept="image/jpeg, image/png, image/gif" onChange={handleFileChange} />
											<button type="submit">Upload</button>
										</div>
									)}
									{uploadFlip && (
										<div>
											<label htmlFor="file">Select Image File:</label>
											<input type="file" name="file" id="file" accept="image/jpeg, image/png, image/gif" onChange={handleFileChange} />
											<button type="submit">Upload</button>
										</div>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>

				<div
					id="removeImageTab"
					className={`${styles.tabcontent} ${activeTab === "removeImageTab" ? styles.active : styles.hidden}`}>
					<div style={{ textAlign: "center" }}>
						<h1>Remove an Image</h1>
					</div>
				</div>



				<div
					id="analyticsTab"
					className={`${styles.tabcontent} ${activeTab === "analyticsTab" ? styles.active : styles.hidden}`}>
					<div className={styles.adminPageSectionTitle}>Implement Analytics here</div>
				</div>
			</div>

	);
};

export default AdminPage;
