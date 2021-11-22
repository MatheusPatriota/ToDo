import styled from "styled-components";

const PopupStyles = styled.div`
  /* Popup style */

  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  .box {
    position: relative;
    width: 70%;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;

    .content {
      .firstDiv {
        display: flex;
        flex-direction: column;
      }

      .title {
        font-size: 25px;
      }

      .description {
        margin: 10px 0;
        font-size: 18px;
      }

      .dateTime {
        display: flex;
        flex-direction: row;

        justify-content: space-between;
      }
    }
  }

  .close-icon {
    content: "x";
    cursor: pointer;
    position: fixed;
    right: calc(15% - 30px);
    top: calc(100vh - 85vh - 33px);
    background: #ededed;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
  }
`;

export default PopupStyles;