import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body * {
        letter-spacing: -0.5px;
        line-height: 20px;
    }
    * {
    box-sizing: border-box;
  }
  input {
      all: unset;
  }
  a {
      text-decoration: none;
  }
  button {
      border: none;
      background-color: transparent;
  }
`;
