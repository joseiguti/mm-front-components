import React, { useState } from "react";
import PropTypes from "prop-types";
import menuConfig from "../menuConfig.json";
import { iconMap } from "./iconMap";
import { Nav, Ul, Li, Icon, HamburgerButton, StyledLink, Divider, Header, Logo } from "./Menu.styles";

export const Menu = ({ config }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const finalConfig = {
    ...menuConfig,
    ...config,
    items: config.items || menuConfig.items,
  };

  const toggleMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Nav $isCollapsed={isCollapsed}>
      <Header>
        <Logo src={finalConfig.logo} alt="Logo" $isCollapsed={isCollapsed} />
        <HamburgerButton onClick={toggleMenu}>
          <span style={{ width: "20px"}}/>
          <span style={{ width: "20px"}}/>
          <span style={{ width: "10px"}}/>
        </HamburgerButton>
      </Header>
      <Divider />
      <Ul>
        {finalConfig.items.map((item, index) => (
          <Li key={index}>
            <StyledLink href={item.link || "#"}>
              <Icon>{React.createElement(iconMap[item.icon] || "span")}</Icon>
              {!isCollapsed && item.label}
            </StyledLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

Menu.propTypes = {
  config: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
        link: PropTypes.string
      })
    ),
    logo: PropTypes.string
  }),
};

Menu.defaultProps = {
  config: {},
};
