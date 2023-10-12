import React, { useState, useEffect } from "react";
import styles from "@/styles/admin-page.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const EditPage = (props) => {
    const {
        activeTab,
    } = props;
    const { data: session } = useSession();
    const router = useRouter();

    // Setting admin to the cultureforyou email by checking the logged-in session
    const isAdmin = session && session.user && session.user.email === process.env.ADMIN_EMAIL;

    const [isEditOpen, setIsEditOpen] = useState(false); 
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadFailure, setUploadFailure] = useState(false);
    const [uploadFlip, setUploadFlipper] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [deleteFailure, setDeleteFailure] = useState(false);
    const [selectedImageType, setSelectedImageType] = useState(null);
    const [fetchedImages, setFetchedImages] = useState([]);

    const [imageType, setImageType] = useState('other');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (!isAdmin) {
            router.push("/404");
        }
    }, [isAdmin, router]);

    if (!isAdmin) {
        return <div className={styles.notAdminMessage}>Error.</div>;
    }

    const handleUploadSuccess = (message) => {
        console.log(message);
        setUploadFlipper(!uploadFlip);
        setUploadSuccess(true);
        setUploadFailure(false);
        setDeleteSuccess(false);
        setDeleteFailure(false);
        setTitle('');
        setDescription('');
        setFile(null);

    };

    const handleDeleteSuccess = (message) => {
        console.log(message);
        setDeleteSuccess(true);
        setDeleteFailure(false);
        setUploadSuccess(false);
        setUploadFailure(false);
        setTitle('');
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
                setSelectedImageType(null);

            } else {
                console.error('Failed to upload image');
                setUploadFlipper(!uploadFlip);
                setUploadSuccess(false);
                setUploadFailure(true);
                setDeleteSuccess(false);
                setDeleteFailure(false);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            setUploadFlipper(!uploadFlip);
            setUploadSuccess(false);
            setUploadFailure(true);
            setDeleteSuccess(false);
            setDeleteFailure(false);
        }
    };

    const handleImageDeletion = async (imageName, imageType, imageTitle) => {
        const isConfirmed = window.confirm(`Are you sure you want to delete "${imageTitle}" from the showcase?`);

        if (isConfirmed) {
            const formData2 = new FormData();
            formData2.append('imageName', imageName);
            formData2.append('imageType', imageType);
            formData2.append('title', imageTitle);

            try {
                const response = await fetch('/api/delete', {
                    method: 'POST',
                    body: formData2,
                });

                if (response.ok) {
                    handleDeleteSuccess('Deletion Process Success');
                    setSelectedImageType(null);
                } else {
                    console.error('Failed to delete.');
                    setDeleteSuccess(false);
                    setDeleteFailure(true);
                    setUploadSuccess(false);
                    setUploadFailure(false);
                    setSelectedImageType(null);
                }
            } catch (error) {
                console.error('Error deleting image:', error);
                setDeleteSuccess(false);
                setDeleteFailure(true);
                setUploadSuccess(false);
                setUploadFailure(false);
            }
        } else {
            // The user chose not to delete, so you can handle this case as needed
            console.log('Deletion canceled');
        }
    };


    const handleImageTypeSelect = async (imageType) => {
        if (imageType != selectedImageType) {
            setSelectedImageType(imageType);
            const formData3 = new FormData();
            formData3.append('imageType', imageType);

            try {
                const response = await fetch('/api/show-databases', {
                    method: 'POST',
                    body: formData3,
                });

                if (response.ok) {
                    const data = await response.json();

                    setFetchedImages(data);

                } else {
                    console.error('Error fetching images:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        } else {
            setSelectedImageType(null);
        }
    };

    return (
        <div id="addImageTab" className={`${styles.tabcontent} ${activeTab === "addImageTab" ? styles.active : styles.hidden}`}>
            <div style={{ backgroundColor: "#e0dedc" }} className={styles.tabcontent}>
                <div style={{ textAlign: "center" }} className={styles.uploadSuccessMessage}>
                    Uploading Images require you to select the type of image.
                    <br></br>Selecting "Other" as the Image Type allows you to upload the image directly to the server.
                    <br></br>Otherwise, you can select where you want the image to go on the shop pages.
                    <br></br>When an image goes onto the store page, it requires a title that will appear right below the image.
                    <br></br>You may optionally include a description, which will appear below the title.
                    <br></br>Finally, select an image to upload. There will be text below here to inform you of a successful upload!
                </div>
                <div>
                    <div className={styles.uploadContainer}>
                        <div style={{ textAlign: "center" }}>
                            <h1>Upload an Image</h1>
                            Click the Browse button below to select an image to upload to the server.
                            <br></br>After selecting an image file (PNG, JPG, JPEG, GIF), you may use the Upload button to upload it.
                            <br></br>You should receive a confirmation message that it has been uploaded.
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
                {uploadSuccess && (
                    <div style={{ textAlign: "center", fontSize: "25px", color: "green" }} className={styles.uploadSuccessMessage}>
                        Image uploaded successfully. You can select a new file if needed.
                    </div>
                )}
                {uploadFailure && (
                    <div style={{ textAlign: "center", fontSize: "25px", color: "red" }} className={styles.uploadFailureMessage}>
                        Image upload failed. You can try selecting a new file if needed.
                    </div>
                )}
                {deleteSuccess && (
                    <div style={{ textAlign: "center", fontSize: "25px", color: "green" }} className={styles.uploadSuccessMessage}>
                        The Showcase has been removed successfully. You can upload or Delete a New Showcase as you wish.
                    </div>
                )}
                {deleteFailure && (
                    <div style={{ textAlign: "center", fontSize: "25px", color: "red" }} className={styles.uploadFailureMessage}>
                        There has been an issue in removing the Showcase. You can try to upload or Delete a New Showcase as you wish.
                    </div>
                )}
                <div className={styles.dropdownContainer}>
                    <div style={{ fontSize: "25px", backgroundColor: "grey" }} className={styles.editHeader} onClick={() => setIsEditOpen(!isEditOpen)}>
                        Edit {isEditOpen ? '⇧' : '⇩'}
                    </div>
                    {isEditOpen && (
                        <div style={{ backgroundColor: "#D3D3D3" }} className={styles.imageTypeContainer}>
                            {isEditOpen && (
                                <div style={{ backgroundColor: "#D3D3D3" }} className={styles.imageTypeContainer}>
                                    <div>
                                        <div style={{ cursor: "pointer" }} onClick={() => handleImageTypeSelect("weddingSign")}>
                                            Wedding Sign {selectedImageType === 'weddingSign' ? '↑' : '↓'}
                                        </div>
                                        {selectedImageType === 'weddingSign' && (
                                            <div>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Name</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Type</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Title</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Description</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Delete from Showcase</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {fetchedImages.map((image, index) => (
                                                            <tr key={index}>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageName}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageType}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageTitle}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageDesc}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px', textAlign: 'center' }}>
                                                                    <button onClick={() => handleImageDeletion(image.imageName, image.imageType, image.imageTitle)}>Delete</button></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                        <div style={{ cursor: "pointer" }} onClick={() => handleImageTypeSelect("engraving")}>
                                            Engraving {selectedImageType === 'engraving' ? '↑' : '↓'}
                                        </div>
                                        {selectedImageType === 'engraving' && (
                                            <div>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Name</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Type</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Title</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Description</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Delete from Showcase</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {fetchedImages.map((image, index) => (
                                                            <tr key={index}>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageName}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageType}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageTitle}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageDesc}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px', textAlign: 'center' }}>
                                                                    <button onClick={() => handleImageDeletion(image.imageName, image.imageType, image.imageTitle)}>Delete</button></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                        <div style={{ cursor: "pointer" }} onClick={() => handleImageTypeSelect("topper")}>
                                            Topper {selectedImageType === 'topper' ? '↑' : '↓'}
                                        </div>
                                        {selectedImageType === 'topper' && (
                                            <div>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Name</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Type</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Title</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Description</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Delete from Showcase</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {fetchedImages.map((image, index) => (
                                                            <tr key={index}>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageName}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageType}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageTitle}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageDesc}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px', textAlign: 'center' }}>
                                                                    <button onClick={() => handleImageDeletion(image.imageName, image.imageType, image.imageTitle)}>Delete</button></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                        <div style={{ cursor: "pointer" }} onClick={() => handleImageTypeSelect("henna")}>
                                            Henna {selectedImageType === 'henna' ? '↑' : '↓'}
                                        </div>
                                        {selectedImageType === 'henna' && (
                                            <div>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Name</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Type</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Title</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Image Description</th>
                                                            <th style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>Delete from Showcase</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {fetchedImages.map((image, index) => (
                                                            <tr key={index}>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageName}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageType}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageTitle}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px ', textAlign: 'center' }}>{image.imageDesc}</td>
                                                                <td style={{ padding: '0px 15px 0px 0px', textAlign: 'center' }}>
                                                                    <button onClick={() => handleImageDeletion(image.imageName, image.imageType, image.imageTitle)}>Delete</button></td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditPage;
