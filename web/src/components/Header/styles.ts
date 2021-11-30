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

  .logoContainer {
    display: flex;
    height: 100%;
    align-items: center;
    .logo {
      height: 60%;
    }
  }

  .menuContainer {
    display: flex;
    height: 100%;
    justify-content: flex;
    align-items: center;

    li + li::before {
      content: " | ";
      margin-right: 4px;
    }

    ul {
      display: flex;
      gap: 12px;
      text-decoration: none;
      list-style: none;
      align-items: center;
    }
    ul li a {
      color: #ffffff;
      text-transform: uppercase;
      text-decoration: none;
    }

    ul li a:hover {
      color: #fe5f55;
      text-transform: uppercase;
      text-decoration: none;
    }

    .exit {
      background-color: #fe5f55;
      color: #ffff;
      
      height: 30px;
      width: 50px;
      border: none;
      border-radius: 5px;

      cursor: pointer;
    }
    .exit:hover {
      background-color: #5872ff;
    }

    .notification {
      display: flex;
      flex-direction: row;
      align-items: center;

      button {
        background: transparent;
        color: #ffffff;
        border: none;
        cursor: pointer;

        display: flex;
        svg {
          font-size: 30px;
        }
        div {
          background-color: #fe5f55;
          color: #fff;

          height: 20px;
          width: 20px;

          font-size: 14px;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;
          right: 10px;
        }
      }
    }
  }
`;

const Background = styled.div`
  width: 100%;
  height: 10px;

  background: #fe5f55;
`;

export { HeaderStyles, Background };
