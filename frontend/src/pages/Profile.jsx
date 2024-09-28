import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout'; // Import the Layout component

// Placeholder profile picture
const profilePicture = ''; // URL of the profile picture (leave empty for initials)

const Profile = () => {
// Extract initials from the user's name
const name = 'Nalin Dhanuddheera';
const getInitials = (name) => {
    const nameParts = name.split(' ');
    return nameParts.map(part => part[0]).join('').toUpperCase();
};

return (
    <Layout> {/* Wrap the content in the Layout component */}
    <ProfileWrapper>
        <ProfilePicture>
        {profilePicture ? (
            <img src={profilePicture} alt="Profile" />
        ) : (
            <Initials>{getInitials(name)}</Initials>
        )}
        </ProfilePicture>
        <h1>Your Profile</h1>
        <p>Username: Nalin</p>
        <p>Email: nalin@example.com</p>
        <p>Member Since: January 2023</p>
    </ProfileWrapper>
    </Layout>
);
};

// Styled Components
const ProfileWrapper = styled.div`
padding: 20px;
max-width: 600px;
margin: 0 auto;
text-align: left;
`;

const ProfilePicture = styled.div`
width: 120px;
height: 120px;
border-radius: 50%;
overflow: hidden;
margin-bottom: 20px;
display: flex;
justify-content: center;
align-items: center;
background-color: #f0f0f0;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

const Initials = styled.div`
font-size: 2.5rem;
color: #fff;
background-color: #0066cc;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
`;

export default Profile;
