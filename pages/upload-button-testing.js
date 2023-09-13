import React from 'react';
import UploadButton from '../components/upload-button';

const MyPage = () => {
    const handleUploadSuccess = (message) => {
        console.log(message);
        // Perform any additional actions after a successful upload
    };

    return (
        <div>
            <h1>Upload an Image</h1>
            <UploadButton onUpload={handleUploadSuccess} />
        </div>
    );
};

export default MyPage;