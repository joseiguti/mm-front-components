import React, { useState } from "react";
import { Nav, Ul, Li, Icon, HamburgerButton, StyledLink, Divider, Header, Logo } from "./Menu.styles";

export const Menu = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Nav $isCollapsed={isCollapsed}>
      <Header>
        <Logo src="path-to-your-image.png" alt="Logo" $isCollapsed={isCollapsed} />
        <HamburgerButton onClick={toggleMenu}>
          <span style={{ width: "20px"}}/>
          <span style={{ width: "20px"}}/>
          <span style={{ width: "10px"}}/>
        </HamburgerButton>
      </Header>
      <Divider />
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
