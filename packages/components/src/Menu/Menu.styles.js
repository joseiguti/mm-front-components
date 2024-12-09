import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: ${({ $isCollapsed }) => ($isCollapsed ? "60px" : "250px")};
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    padding: 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease;
    z-index: 1000;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const Ul = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    border-radius: ${({ theme }) => theme.borderRadius.small};
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
        color: ${({ theme }) => theme.colors.hoverLight || "#d3d3d3"};
    }
`;

export const Icon = styled.span`
    font-size: ${({ theme }) => theme.icons.size};
    margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Divider = styled.div`
    width: 90%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: ${({ theme }) => theme.spacing.small} auto;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.small};
    margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Logo = styled.img`
    max-height: 40px;
    margin-right: auto;
    display: ${({ $isCollapsed }) => ($isCollapsed ? "none" : "block")};
    transition: display 0.3s ease, opacity 0.3s ease;
    opacity: ${({ $isCollapsed }) => ($isCollapsed ? 0 : 1)};
`;

export const SubUl = styled.ul`
    list-style: none;
    padding: 0 16px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xsmall};
`;

export const SubLi = styled.li`
    padding: ${({ theme }) => theme.spacing.xsmall} 0;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fonts.size.small};
`;

export const ToggleButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: auto;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
        color: ${({ theme }) => theme.colors.hover};
    }
`;
