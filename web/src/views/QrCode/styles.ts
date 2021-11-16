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
    cursor: pointer;
  }

  .qrcodeContainer:hover{
    color: #2b4f6d;
  }
`;

export default QRCODEPageStyles;
