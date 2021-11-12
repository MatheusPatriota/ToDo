import styled from "styled-components";

const FilterCardStyles = styled.div`
  height: 70px;
  width: 100%;

  background-color: #0d1821;
  border-radius: 20px;

  padding: 20px;

  color: #ffffff;

  cursor: pointer;

  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  flex-direction: column;
  justify-content: space-between;
  

  :hover {
    background-color: #fe5f55;
  }

  span{
    align-self: end;
  }
`;

export { FilterCardStyles };
