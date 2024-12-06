import React, { useState } from "react";
import { Nav, Ul, Li, Icon, HamburgerButton, StyledLink } from "./Menu.styles";

export const Menu = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Nav $isCollapsed={isCollapsed}>
      <HamburgerButton onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerButton>

      <Ul>
        {items.map((item, index) => (
          <Li key={index}>
            <StyledLink href={item.link || "#"}>
              <Icon>{item.icon}</Icon>
              {!isCollapsed && item.label}
            </StyledLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};
