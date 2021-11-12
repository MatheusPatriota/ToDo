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
      span{
        padding: 3px;
      }
    }
  }
`;

export default HomeStyles;
