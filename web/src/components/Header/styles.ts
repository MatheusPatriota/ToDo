import styled from "styled-components";
const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-evenly;
  
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;

  background: #0d1821;
  color: #ffffff;

  .logoContainer{
    display: flex;
    height: 100%;
    align-items: center;
    .logo{
      height: 60%;
    }
  }

  .menuContainer{
    display: flex;
    height: 100%;
    justify-content:flex;
    align-items: center;

    li + li::before {
    content: " | ";
}

    ul{
      display: flex;
      gap: 12px;
      text-decoration: none;
      list-style: none;
    }
    ul li a{
      color: #ffffff;
      text-transform: uppercase;
      text-decoration: none;
    }

    ul li a:hover{
      color: #FE5F55;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
`;

const Background = styled.div`
  width: 100%;
  height: 10px;

  background: #fe5f55;
`;

export { HeaderStyles, Background };
