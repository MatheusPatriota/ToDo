import styled from "styled-components";
const HomeStyles = styled.div`
  
    button{
      border: none;
      background-color: transparent;
    }
    .filters {
      padding: 20px;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

      justify-content: center;
      align-self: center;

      margin: 20px 0px 20px 0px;

      @media (max-width: 1150px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      @media (max-width: 871px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (max-width: 657px) {
        grid-template-columns: 1fr 1fr;
      }
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

      margin: 20px 0px 20px 0px;

      @media (max-width: 1433px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      @media (max-width: 1150px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (max-width: 871px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 561px) {
        grid-template-columns: 1fr;
      }
    }
  }
  @media (max-width: 636px) {
    header {
      .menuContainer {
        display: none;
      }
    }
  
`;

export default HomeStyles;
