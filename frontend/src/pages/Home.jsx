import React from 'react';
import styled from 'styled-components';
import Slideshow from '../components/Slideshow'; // Import the Slideshow component
import Layout from '../components/Layout'; // Import the Layout component
import DestinationHighlights from '../components/DestinationHighlights'; // Import the DestinationHighlights component

const Container = styled.div`
padding: 40px;
text-align: center;
`;

// Title and Subtitle styling
const Title = styled.h1`
font-size: 2.5rem;
color: #0066cc;
`;

const Subtitle = styled.p`
font-size: 1.2rem;
color: #333;
`;

const Home = () => {
return (
    <Layout>
    <Container>
        <Slideshow />
        <Title>Welcome to ExploreLanka</Title>
        <Subtitle>Discover Sri Lankan tourist destinations easily</Subtitle>
        
        {/* Include the Destination Highlights component */}
        <DestinationHighlights />
    </Container>
    </Layout>
);
};

export default Home;
