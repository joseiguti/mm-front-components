import React, { useState } from "react";
import { Nav, Ul, Li, Icon, HamburgerButton, StyledLink } from "./Menu.styles";

export const Menu = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Nav>
      <HamburgerButton onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerButton>

      {/* Texto para mostrar si el menú está colapsado */}
      <p style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
        {isCollapsed ? "Menu is collapsed" : "Menu is expanded"}
      </p>

      <Ul>
        {items.map((item, index) => (
          <Li key={index}>
            <StyledLink href={item.link || "#"}>
              <Icon>{item.icon}</Icon>
              {item.label}
            </StyledLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};
