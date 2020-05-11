import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`


* {
    box-sizing: border-box;
    font-family: ;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    line-height: 1.5;
    color: #24292e;
    background-color: #fff;
  }
  
  .app {
    margin: 2rem;
  }
  
  a {
    color: #08c;
  }
  
  code {
    background: #eee;
    padding: .1rem;
    font-family: 'Menlo';
    font-size: 13px;
    color: #ff00aa;
  }
  
  input {
    padding: .5rem;
    font-size: 16px;
    width: 100%;
    display: block;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  input:focus {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
  }
  
  input.error {
    border-color: red;
  }
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: .5rem;
  }
  
  .input-feedback {
    color: red;
    margin-top: .25rem;
  }
  
  button {
    max-width: 150px;
    margin: 20px 0;
    padding: 12px 20px;
    border-style: none;
    border-radius: 5px;
    background-color: #08c;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
  }
  
  button:disabled {
    opacity: .5;
    cursor: not-allowed !important;
  }
  
  button + button {
    margin-left: .5rem;
  }
  
  button.outline {
    background-color: #eee;
    border: 1px solid #aaa;
    color: #555;
  }
  
  `;
export default GlobalStyle;