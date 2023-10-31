import React from 'react';
import styled from "styled-components";
import Button from './Button';




function Home() {
    

  return (
    <Container>
        <Wrap>
            <h2>Thirdweb Deploy - Custom Staking Contract
</h2>
        </Wrap>

        <ButtonGroup>
            <Button 
                name="mintButton"
                imgUrl="/images/mintNft.webp"
                content="Mint a new NFT"
                subContent="Use the NFT Drop Contract to claim an NFT from the collection."
            />
            <Button 
            name="stakeButton"
            imgUrl="/images/stackNft.webp"
            content="Stake Your NFTs"
            subContent="Use the custom staking contract deployed via thirdweb Deploy to stake your NFTs, and earn token from the Token contract"
            />
        </ButtonGroup>
    </Container>
  )
}

export default Home;

const Container = styled.div`
    background-color: black;
    height: 100vh;
    color: white;
    padding: 15vh;
    text-align: center;
    overflow-x: hidden;
`;

const Wrap = styled.div`
    font-size: 1.5rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: 50px;
    height: 40vh;
    width: 100%;
    padding: 15px;
    cursor: pointer;

    @media(max-width:768px) {
        flex-direction: column;
    }
`;