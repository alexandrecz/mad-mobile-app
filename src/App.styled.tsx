
import { createGlobalStyle } from 'styled-components';
import { colors } from './constants/colors';

export const AppStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    text-rendering: optimizeSpeed;
    height: 100%;
    background-color: ${colors.white};    
  }

  #root {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    'header'
    'main'
    'footer';
  }

  #root > header {
    grid-area: header;
    position: sticky
  }

  #root > main {
    grid-area: main;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${colors.lightBlue} transparent;
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.lightGray};
      border-radius: 12px;
      border: 6px solid transparent;
      background-clip: content-box;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${colors.gray};
    }
    ::-webkit-scrollbar-thumb:active {
      background-color: ${colors.gray};
    }
    ::-webkit-scrollbar-track {
      background-color: ${colors.white};
    }
    ::-webkit-scrollbar {
      width: 24px;
    }
  }

  #root > footer {
    grid-area: footer;
    position: sticky;
    bottom: 0;
  }

  #root main header {
    position: static;
  }

  ul {
    list-style: none;
  }

  .active {
    background: rgba(2, 122, 174, 0.1);
    border-radius: 2rem;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }

  p {
    padding: 10px;
    color: ${colors.lightBlue};
  }

  input[type=text]::placeholder {
    color: ${colors.gray};
    font-family: 'Roboto', sans-serif;
  }
`;

