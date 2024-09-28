import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Footer from './Footer'; // Assuming you have a Footer component

const Layout = ({ children }) => {
return (
    <PageWrapper>
    <Navbar />
    <ContentWrapper>
        {children}
    </ContentWrapper>
    <Footer />
    </PageWrapper>
);
};

// Styled Components
const PageWrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`;

const ContentWrapper = styled.main`
flex: 1;
padding: 20px;
`;

export default Layout;
