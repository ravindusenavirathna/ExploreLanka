    import React, { useState } from 'react';
    import styled from 'styled-components';
    import ExploreForm from './ExploreForm'; // Import the ExploreForm component

    const Navbar = () => {
    const [showForm, setShowForm] = useState(false); // State to toggle the Explore form

    return (
        <>
        <Nav>
            <Logo src="/logo.jpg" alt="Logo" />
            <NavLinks>
            <a href="/">Home</a>
            <button onClick={() => setShowForm(!showForm)}>Explore</button> {/* Button to toggle the form */}
            <a href="/upload-image">Upload Image</a>
            <a href="/Profile">Profile</a>
            <a href="/Wishlist">Wishlist</a>
            <a href="/signup">Sign Up</a>
            </NavLinks>
        </Nav>
        {showForm && <ExploreForm setShowForm={setShowForm} />} {/* Pass setShowForm as a prop */}
        </>
    );
    };

    const Nav = styled.nav`
    background-color: #333;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

    const Logo = styled.img`
    height: 40px;
    `;

    const NavLinks = styled.div`
    a, button {
        color: white;
        margin: 0 1rem;
        text-decoration: none;
        font-weight: bold;
        background: none;
        border: none;
        cursor: pointer;
        &:hover {
        color: #ff6347;
        }
    }
    `;

    export default Navbar;
