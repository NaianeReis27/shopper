import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
 :root{
    --color-header: #1E2044;
    --color-primary: #060937;
    --color-secondary: #0DAB77;
    --color-tertiary: #00B780;
    --color-bg-form: #2da77a;
    --color-black: #000;
    --color-white: #fff;
    --color-bg-banner: #E8F3D8;
    --color-nav-border: f2f2f2;
    --hover-brightness: 1.2;
    --color-alert-error: #f44336;
    --color-alert-success: #4caf50;
    --color-alert-warning: #EC8E0A;
    --color-alert-default: #15553d;
    --color-close-btn: #FF0000;
    --color-gray: #E5E4E2;
 }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body{
    background-color: var(--color-tertiary);
  }
  button {
      padding: 10px;
      background-color: var(--color-alert-success);
      border: none;
      color: white;
      cursor: pointer;
      border-radius: 8px;
    }

    button:active {
      transform: scale(0.95);
      background-color: var(--color-bg-form);
    }

    button[disabled] {
    opacity: 0.5; 
    cursor: not-allowed; 
  }

`;
