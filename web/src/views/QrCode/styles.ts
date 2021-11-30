import styled from "styled-components";

const QRCODEPageStyles = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;

  margin-top: 25px;

  .qrcodeContainer{
    font-size:350px;
    color: #0d1821;

    margin-top:40px;
  }
  p{
    font-weight: 700;
  }
 
`;

const MacAddressInputStyles = styled.div`
  input{
    margin-top:10px;
    border: none;
    height: 40px;
    width: 100%;
    border-radius:5px;
    border: 1px solid #0d1821;
  }

  button{
    margin-top:10px;
    height: 30px;
    width: 100%;

    border-radius:5px;

    border: none;
    background: #0d1821;

    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;

    cursor: pointer;
  }

  button:hover{
    background: #fe5f55;
  }
`
export default QRCODEPageStyles;
export {MacAddressInputStyles}
