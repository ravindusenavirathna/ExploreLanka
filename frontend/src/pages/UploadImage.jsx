import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
`;

const Title = styled.h1`
font-size: 2rem;
color: #333;
`;

const UploadInput = styled.input`
margin: 20px 0;
padding: 10px;
border: 2px solid #ccc;
border-radius: 5px;
`;

const SubmitButton = styled.button`
padding: 10px 20px;
font-size: 1rem;
background-color: #4caf50;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover {
    background-color: #45a049;
}
`;

const UploadImage = () => {
const [image, setImage] = useState(null);

const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
};

const handleSubmit = () => {
    // Handle the image upload logic here
};

return (
    <Container>
    <Title>Upload Your Image</Title>
    <UploadInput type="file" onChange={handleImageUpload} />
    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Container>
);
};

export default UploadImage;
