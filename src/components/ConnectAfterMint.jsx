import React from 'react'
import styled from 'styled-components'
import ConnectContainer from './ConnectContainer';

function ConnectAfterMint() {
  return (
    <Container>
       <ConnectContainer />
    </Container>
  )
}

export default ConnectAfterMint;

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3b3b44;
    background-image: linear-gradient(0deg, #3b3b44 0%, #2a2d2d 100%);

    color: white;
    padding: 10vh 25vw;
    overflow: hidden;
`;