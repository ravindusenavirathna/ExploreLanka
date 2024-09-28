    import React from 'react';
    import styled from 'styled-components';

    const Footer = () => {
    return (
        <FooterWrapper>
        <p>© 2024 ExploreLanka. All rights reserved.</p>
        </FooterWrapper>
    );
    };

    const FooterWrapper = styled.footer`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: relative;
    bottom: 0;
    width: 100%;
    `;

    export default Footer;
