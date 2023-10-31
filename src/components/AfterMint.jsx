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
        <h1> Mint An NFT!</h1>
        <h3>Here is where we use our NFT Drop contract to allow users to mint one of the NFTs that we lazy minted.</h3>
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

    h3 {
        margin: 20px 0;
        font-weight: 400;
    }
`;

const Underline = styled.div`
    height: 1px;
    width: 20vw;
    background-color: white;
    opacity: 0.3;
`;

const Button = styled.div`
    margin: 20px 0;
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
