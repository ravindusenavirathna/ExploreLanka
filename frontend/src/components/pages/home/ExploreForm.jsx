

import React from 'react';
import styled from 'styled-components';

const ExploreForm = ({ setShowForm }) => {  // Accept setShowForm as a prop
return (
    <FormWrapper>
    <CloseButton onClick={() => setShowForm(false)}>X</CloseButton> {/* Close the form on click */}
    <h2>Go Explore</h2>
    <label htmlFor="travelType">Select type of travel</label>
    <select id="travelType">
        <option>Choose...</option>
        <option>family</option>
        <option>couple</option>
        <option>friends</option>
    </select>
    <p>Select Type of Interest</p>
    <Checkbox>
        <input type="checkbox" id="nature" />
        <label htmlFor="nature">Nature, Scenic Landscape & Wildlife</label>
    </Checkbox>
    <Checkbox>
        <input type="checkbox" id="arts" />
        <label htmlFor="arts">Arts, Culture & Heritage</label>
    </Checkbox>
    {/* Add more checkboxes as needed */}
    <ExploreButton>Explore Sri Lanka</ExploreButton>
    </FormWrapper>
);
};

const FormWrapper = styled.div`
position: fixed;
top: 0;
right: 0;
width: 300px;
height: 100%;
background-color: #6a1b9a;
padding: 20px;
color: white;
z-index: 1000;
box-shadow: -5px 0 5px rgba(0, 0, 0, 0.3);
transition: all 0.3s ease;
`;

const CloseButton = styled.button`
background: none;
color: white;
border: none;
font-size: 1.5rem;
position: absolute;
top: 10px;
right: 10px;
cursor: pointer;
`;

const Checkbox = styled.div`
margin: 10px 0;
`;

const ExploreButton = styled.button`
background-color: #00bfa5;
color: white;
border: none;
padding: 10px;
cursor: pointer;
margin-top: 10px;
`;

export default ExploreForm;
