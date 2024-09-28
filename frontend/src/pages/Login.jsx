import React, { useState } from 'react';
import styled from 'styled-components';

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

const Input = styled.input`
margin: 10px 0;
padding: 10px;
width: 100%;
max-width: 400px;
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

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = () => {
    // Handle login logic here
};

return (
    <Container>
    <Title>Login</Title>
    <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <Input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <SubmitButton onClick={handleSubmit}>Login</SubmitButton>
    </Container>
);
};

export default Login;
