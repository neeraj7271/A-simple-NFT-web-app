import React, {useState} from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import wallets from "../data/wallets.js";
import Qrcode from "react-qr-code";


function ConnectContainer() {

  const [arrowButton, setArrowButton] = useState(true);

  const [walletUrl, setWalletUrl] = useState([]);

  const [walletName, setWalletName] = useState([]);

  function handleClick() {
    setArrowButton(false)
  }




//   console.log(walletUrl);

  function handleWalletClick(wallet) {
    console.log(wallet);
  }

//   console.log(arrowButton);

  return (
    <Container>
      <LeftBox>
        <LogoHead>
          <img src="/images/connect-logo.svg" alt="" />
          <p>Connect</p>
        </LogoHead>
        <Wallets>
           {wallets.map((wallet, index) => {
            return (
                <Wallet onClick={(wallet) => (
                    setWalletUrl(wallet.target.children[2].innerHTML),
                    setWalletName(wallet.target.children[1].innerHTML)
                  
                    )}>
                <img src={wallet.imgUrl} alt="" />
                <p>{wallet.name}</p>
                <h1 hidden>{wallet.url}</h1>
                </Wallet>
            )
           })}
        </Wallets>
      </LeftBox>
      <RightBox>
        <Content>
            <h3 style={{display: arrowButton ? "none" : "block"}}>Your gateway to the decentralized world</h3>
            <p style={{display: arrowButton ? "none" : "block"}} >Connect a wallet to get started</p>
        </Content>

       
    
        {/* after clicking the wallet links */}

            <Back style={{display: arrowButton ? "block" : "none"}} show={arrowButton} onClick={handleClick} />
            <h2 style={{display: arrowButton ? "block" : "none"}} >{walletName}</h2>

            <QrCode style={{display: arrowButton ? "block" : "none"}}>
            {/* <img src="/images/qrcode.png" /> */}

            <Qrcode value={walletUrl} />

            <h4>Scan this with {walletName} wallet or camera app to connect</h4>
            </QrCode>

            <LinkButton>
            <a href="https://blog.thirdweb.com/web3-wallet/">
                {arrowButton ? `Don't have an ${walletName} wallet?` : "New To Wallet?"}
            </a>
            </LinkButton>
      </RightBox>
    </Container>
  );
}

export default ConnectContainer;

const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  display: flex;
  background: rgba(36, 58, 75, 0.75);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.9px);
  -webkit-backdrop-filter: blur(9.9px);
  border: 1px solid rgba(36, 58, 75, 0.4);
`;

const LeftBox = styled.div`
  height: 100%;
  width: 40%;
  border-right: 1px solid grey;
  color: white;
  padding: 20px;
`;

const RightBox = styled.div`
  heigth: 100%;
  widht: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 40px;
  position: relative;


  h2{
    position: absolute;
    top: 16px;
    left: 170px;
    width: 200%;
  }

  h3{
    margin-bottom: 25px;
  }

  p{
    color: grey;
  }

`;

const LinkButton = styled.div`
    position: absolute;
    bottom: 15px;
    left: 80px;
    width: 400%;

    a{
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 1.2rem;
    }

`;

const Content = styled.div`
    text-align: center;
`;

const LogoHead = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: white;

  img {
    height: 30px;
  }
  p {
    font-size: 1.2rem;
  }
`;

const Wallets = styled.div`
  margin-top: 25px;
  cursor: pointer;
`;

const Wallet = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  img {
    height: 50px;
  }

  p {
    font-weight: 600;
  }

  &:hover {
    background-color: black;
    transition: all 0.3s;
    opacity: 0.4;
  }
`;

const Back = styled(ArrowBackIosNewIcon)`
  position: absolute;
  top: 20px;
  left: 10px;
  width: 100%;
  cursor: pointer;
`;

const QrCode = styled.div`
  position: absolute;
  left: 120px;
  
  h4{
    font-weight: 400;
    margin-top: 20px;
    text-align: center;
  }
`;
