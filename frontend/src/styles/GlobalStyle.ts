import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: #f1f3f5;
    color: #212529;
    padding: 20px;
    line-height: 1.6;
  }

  input, select, button {
    margin: 10px 0;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
    width: 100%;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  form {
    max-width: 400px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
  }

  h2 {
    margin-bottom: 15px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background: #fff;
    margin-bottom: 10px;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
  }
`;
