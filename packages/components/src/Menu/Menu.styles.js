import styled from "styled-components";

export const Nav = styled.nav`
    width: 240px; /* Establece el ancho predeterminado */
    transition: width 0.3s;
    background-color: ${({ theme }) => theme.colors.primary};
    overflow: hidden;
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
`;

export const Li = styled.li`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.secondary};
    &:hover {
        background-color: ${({ theme }) => theme.colors.hover};
        cursor: pointer;
    }
`;

export const HamburgerButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    margin-bottom: ${({ theme }) => theme.spacing.small};

    span {
        width: 24px;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;

    &:hover {
        color: ${({ theme }) => theme.colors.hover};
    }
`;

export const Icon = styled.span`
    font-size: ${({ theme }) => theme.icons.size};
    margin-right: ${({ theme }) => theme.spacing.small};
`;
