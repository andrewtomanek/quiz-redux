import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

:root {
  --blue: hsl(200, 100%, 40%, 1);
  --red: hsla(354, 82%, 44%, 1);
  --yellow: hsla(60, 70%, 70%, 1);
  font-size: calc(1vw + 1vh + 0.5vmin);
}

* {
    box-sizing: border-box;
    font-family: ;
  }
  
  body {
    font-family:  Helvetica, Arial,
      sans-serif;
    background-color: hsla(60, 80%, 80%, 1);  
  }
  
form{
  display: grid;
  grid-gap: 0.1rem 0.3rem;
  grid-auto-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  width:70vw;
  padding: 1rem 1.2rem;
  background-color: hsla(40, 70%, 50%, 1);  
  border-radius: 1rem;
}
  
  input {
    padding: 0.2rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: 100%;
    border-radius: 1rem;
    border: 0.2rem solid #ccc;
    color: var(--blue);
  }
  
  input:focus {
    border-color: var(--blue);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
  }
  
  input.error {
    border-color: var(--red);
    color: var(--red);
  }
  
  button {
    margin: 0;
    padding: 1rem;
    border-style: none;
    border-radius: 1rem;
    background-color: var(--blue);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    outline: none;
  }
  
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
  
 
  button.outline {
    background-color: #eee;
    border: 1px solid #aaa;
    color: #555;
  }
  
  `;
export default GlobalStyle;
