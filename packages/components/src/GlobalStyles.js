import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;
