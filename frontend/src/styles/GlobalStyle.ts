import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: #f8f9fa;
    color: #333;
    padding: 20px;
  }

  input, select, button {
    margin: 10px 0;
    padding: 8px;
  }
`;
