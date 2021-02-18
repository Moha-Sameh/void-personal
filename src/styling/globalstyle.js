import { createGlobalStyle } from "styled-components";
//Funtion global style

const GlobalStyle = createGlobalStyle`

//Html
html {
    height: 100% 
}

//body style

body {
    height: 100%; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    margin: 0;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

//code apperance

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

//Whole view

*{
    margin:0 ;
    padding:0;  
    font-family:Georgia, "Times New Roman", Times, serif;
    background-color:#F5F5DC;
    color:#333333; 
}

//headers font

h1{
    float: right;
    font-size: 5rem;
}
//button
button{
    margin-top: 1.1rem;
  margin-bottom: 1.1rem;
  margin-right: 1.1rem;
  width: 6rem;
  height: 3rem;
  padding: 0;
  font-size: 2rem;
  float: right;
  background-color: blanchedalmond;
  outline: none;
  border-radius: 20px;
  border: none;

  &:hover{
      background-color:blueviolet;
      font-weight: bold;
      font-size: 1.8rem;
  }
}

Header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
input{
  font-size: 1rem;
  color: palevioletred;
  background: ${(props) => props.theme.colors.primary};
  border: yellowgreen;
  border-radius: 20px;
  margin: 5px;
  width: 15rem;
  height: 3rem;
  padding: 3px;

  &:hover{
      cursor: pointer;
  }
}

`;
export default GlobalStyle;
