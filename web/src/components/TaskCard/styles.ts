import styled from "styled-components";

const TaskCardStyles = styled.div`
  height: 200px;
  width: 250px;
  perspective: 1000px;

  background-color: transparent;
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.15);

  padding: 20px;
  margin: 10px;
  border-radius: 20px;

  justify-self: center;
  align-self: center;

  cursor: pointer;

  .cardStyles {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    transition: transform 0.6s;
    transform-style: preserve-3d;

    .flip-card-front {
      /* background-color: #bbb; */
      color: black;

      .iconContainer {
        margin: 20px;
        display: flex;
        flex-direction: column;

        align-items: center;

        img {
          height: 70px;
        }
      }

      .dateContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .flip-card-back {
      /* background-color: #2980b9; */
      color: white;
      transform: rotateY(180deg);

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .editButton,
      .deleteButton,
      .viewTaskButton {
        color: #0d1821;
        font-size: 14px;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        button {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          cursor: pointer;
          margin-bottom: 5px;

          font-size: 25px;
        }

        button:hover {
          background-color: #fe5f55;
        }
      }
      .editButton a{
        height:60px;
        width:60px;

        margin-bottom: 5px;
      }
      .editButton button {
        background: #344966;
        color: #fff;
      }

      .deleteButton button {
        background: #ff2100;
        color: #fff;
      }

      .viewTaskButton button {
        background: #468fed;
        color: #fff;
      }
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
  }
  :hover .cardStyles {
    transform: rotateY(180deg);
  }
`;

export { TaskCardStyles };
