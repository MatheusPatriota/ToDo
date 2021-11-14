import styled from "styled-components";
const NewTaskStyles = styled.div`
  body {
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-top: 40px;

    .categories {
      margin: 10px;

      display: flex;
      gap: 20px;
    }

    .title,
    .description,
    .date,
    .time {
      margin: 10px;
      display: flex;
      flex-direction: column;

      span {
        text-transform: capitalize;
        font-weight: 700;
      }
    }

    .finishArea {
      display: flex;
      flex-direction: column;

      .text {
        display: flex;
        flex-direction: row;

        justify-content: space-between;
        align-items: center;

        padding: 10px;

        .checkboxArea {
          display: flex;
          flex-direction: row;

          align-items: center;

          span {
            margin-left: 5px;
            text-transform: uppercase;
          }
        }
      }

      button {
        border-radius: 10px;
        border: none;

        height: 30px;

        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        background-color: #fe5f55;

        cursor: pointer;
      }

      button:hover {
        opacity: 0.85;
      }
    }
  }
`;

export default NewTaskStyles;
