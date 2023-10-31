import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function Button(props) {

  const navigate = useNavigate();
    function handleMint(event) {
        event.preventDefault();

        navigate('/mint');
    }

    function handleStake(event) {
        event.preventDefault();

        navigate('/stake');
    }

  return (
    <ButtonContainer onClick={
      props.name === "mintButton" ? handleMint : handleStake
    } >
        <img src={props.imgUrl} alt='' />
       <h2>{props.content}</h2>
       <p>{props.subContent}</p>
    </ButtonContainer>
  )
}

export default Button;

const ButtonContainer = styled.div`
    height: 100%; 
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 20px;
    padding: 15px;


    img {
        height: 70px;
        width: 70px
    }

    p{
      font-size: 1.1rem;
    }
`;