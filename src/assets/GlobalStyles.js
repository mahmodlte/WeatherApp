import { createGlobalStyle } from "styled-components";
import OpenSansBold from "./fonts/OpenSansCondensed-Bold.ttf";
import OpenSansLight from "./fonts/OpenSansCondensed-Light.ttf";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
      background-color: ${({ theme }) => theme.primaryDark};
      color: #fff;
      font-family: 'Comfortaa', cursive;
  }



`;
