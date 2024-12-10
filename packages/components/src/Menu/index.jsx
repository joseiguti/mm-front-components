import React, { useState } from 'react';
import PropTypes from 'prop-types';
import menuConfig from '../menuConfig.json';
import { iconMap } from './iconMap';
import {
  Nav,
  Ul,
  Li,
  Icon,
  HamburgerButton,
  StyledLink,
  Divider,
  Header,
  Logo,
  SubUl,
  SubLi,
  ToggleButton,
} from './Menu.styles';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Menu = ({ config = {}, isCollapsed: externalIsCollapsed, toggleMenu }) => {
  const [internalIsCollapsed, setInternalIsCollapsed] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const isCollapsed = externalIsCollapsed !== undefined ? externalIsCollapsed : internalIsCollapsed;

  const handleToggleMenu = () => {
    if (toggleMenu) {
      toggleMenu();
    } else {
      setInternalIsCollapsed((prev) => !prev);
    }
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const finalConfig = {
    ...menuConfig,
    ...config,
    items: config.items || menuConfig.items,
  };

  const handleLinkClick = (e, item, index) => {
    if (item.children) {
      e.preventDefault();
      toggleSubmenu(index);
    }
  };

  return (
      <Nav $isCollapsed={isCollapsed}>
        <Header>
          <Logo src={finalConfig.logo} alt="Logo" $isCollapsed={isCollapsed} />
          <HamburgerButton onClick={handleToggleMenu}>
            <span style={{ width: "20px" }} />
            <span style={{ width: "20px" }} />
            <span style={{ width: "10px" }} />
          </HamburgerButton>
        </Header>
        <Divider />
        <Ul>
          {finalConfig.items.map((item, index) => (
              <React.Fragment key={index}>
                <Li>
                  <StyledLink
                      href={!item.children ? item.link || "#" : null}
                      onClick={(e) => handleLinkClick(e, item, index)}
                  >
                    <Icon>{React.createElement(iconMap[item.icon] || "span")}</Icon>
                    {!isCollapsed && item.label}
                  </StyledLink>
                  {!isCollapsed && item.children && (
                      <ToggleButton onClick={() => toggleSubmenu(index)}>
                        {openSubmenus[index] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
                      </ToggleButton>
                  )}
                </Li>
                {!isCollapsed && item.children && openSubmenus[index] && (
                    <SubUl>
                      {item.children.map((subitem, subIndex) => (
                          <SubLi key={subIndex}>
                            <StyledLink href={subitem.link || "#"}>- {subitem.label}</StyledLink>
                          </SubLi>
                      ))}
                    </SubUl>
                )}
              </React.Fragment>
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
          icon: PropTypes.string.isRequired,
          link: PropTypes.string,
          children: PropTypes.arrayOf(
              PropTypes.shape({
                label: PropTypes.string.isRequired,
                link: PropTypes.string,
              })
          ),
        })
    ),
    logo: PropTypes.string,
  }),
  isCollapsed: PropTypes.bool,
  toggleMenu: PropTypes.func,
};


