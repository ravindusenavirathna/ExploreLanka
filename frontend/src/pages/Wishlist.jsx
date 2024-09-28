import React from 'react';
import styled from 'styled-components';

const Wishlist = () => {
return (
    <WishlistWrapper>
    <h1>Your Wishlist</h1>
    <ul>
        <li>Destination 1: Sigiriya Rock Fortress</li>
        <li>Destination 2: Yala National Park</li>
        <li>Destination 3: Galle Fort</li>
    </ul>
    </WishlistWrapper>
);
};

const WishlistWrapper = styled.div`
padding: 20px;
max-width: 600px;
margin: 0 auto;
text-align: left;
`;

export default Wishlist;
