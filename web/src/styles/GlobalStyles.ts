import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  #root{
    height:100vh;
  }

  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  background: #f8f8f8;
  color: #29292e;
  position: relative;
  min-height: 100vh;
}

body, input, button, textarea {
  font: 400 16px 'Exo 2', sans-serif;
  
}
`;


export default GlobalStyles;