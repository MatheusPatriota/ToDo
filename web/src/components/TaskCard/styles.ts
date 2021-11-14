import styled from "styled-components";

const TaskCardStyles = styled.div`
  height: 200px;
  width: 250px;

  background-color: #fff;
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.15);

  padding: 20px;
  margin: 10px;
  border-radius: 20px;

  justify-self: center;
  align-self: center;

  cursor: pointer;

  .cardStyles {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .iconContainer {
      margin-top: 20px;
      display: flex;
      flex-direction: column;

      align-items: center;

      img{
        height: 70px;
      }
    }

    .dateContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    :hover {
      opacity: 0.65;
    }
  }
`;

export { TaskCardStyles };
