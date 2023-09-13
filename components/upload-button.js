import React, { useState } from 'react';

const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB (adjust as needed)
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

const UploadButton = ({ onUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size <= MAX_FILE_SIZE && ALLOWED_IMAGE_TYPES.includes(file.type)) {
                setSelectedFile(file);
            } else {
                alert('File must be a valid image file.');
                setSelectedFile(null);
            }
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const responseData = await response.json();
                    onUpload(responseData); // Call the callback function with the response data
                } else {
                    alert('Failed to upload image.');
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred while uploading the image.');
            }
        }
    };

    return (
        <div>
            <input type="file" accept=".jpeg, .jpg, .png, .gif" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadButton;

