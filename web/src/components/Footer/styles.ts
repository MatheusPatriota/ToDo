import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 1%;
  
  width: 100%;
  height: 80px;


  background: #0d1821;

  .content {
    color: #fff;

    img {
      width: 40px;
      margin-right: 10px;
    }
    
    span{
      text-transform: uppercase;
    }
  }
`;

const FooterBar = styled.div`
  width: 100%;
  height: 10px;

  background: #fe5f55;

  position: relative;
  bottom: 0%;
`;

export { FooterStyles, FooterBar };
