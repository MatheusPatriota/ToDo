import styled from "styled-components";
const HomeStyles = styled.div`
  body {
    .filters {
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      justify-content: space-evenly;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .dividerTaks {
      display: flex;
      align-items: center;
      justify-content: center;

      .line {
        width: 49%;
        height: 3px;
        background: #0d1821;
      }
      span {
        text-transform: uppercase;
        padding: 3px;
      }
    }

    .cardsContainer {
      padding: 20px;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

      justify-content: center;
      align-self: center;
      
      margin: 20px 0px 20px 0px ;
    }
  }
`;

export default HomeStyles;
