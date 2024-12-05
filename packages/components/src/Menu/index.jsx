import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium};
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    cursor: pointer;
  }
`;

const Icon = styled.span`
  font-size: ${({ theme }) => theme.icons.size};
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Menu = ({ items }) => {
  return (
    <Nav>
      <Ul>
        {items.map((item, index) => (
          <Li key={index}>
            <Icon>{item.icon}</Icon>
            {item.label}
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};
