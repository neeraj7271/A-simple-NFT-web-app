import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function AfterMint() {
    const navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault();

        navigate('/connectmint');
    }

  return (
    <Container>
        <h1>Stake Your NFT!</h1>
        <Underline></Underline>
        <Button onClick={handleClick}>
            <p>Connect Wallet</p>
        </Button>
    </Container>
  )
}

export default AfterMint;

const Container = styled.div`
    height: 100vh;
    padding: 17vh;  
    background-color: black;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    h1{
        margin-bottom: 15px;
    }

`;

const Underline = styled.div`
    height: 1px;
    width: 50vw;
    background-color: white;
    opacity: 0.3;
`;

const Button = styled.div`
    margin: 8px 0;
    background-color: #f9f9f9;
    color: black;
    padding: 10px 12px;
    display: flex; 
    justify-items: center; 
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    border-radius: 7px;
    cursor: pointer;

    &:hover{
        transform: scale(1.08);
        transition: all 0.3s;
    }
`;
