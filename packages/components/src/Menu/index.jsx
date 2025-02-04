import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

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

export const Menu = ({
  config = {items: [], logo: ''},
  theme = {},
  isCollapsed: externalIsCollapsed,
  toggleMenu,
  LinkComponent = 'a',
}) => {
  const [internalIsCollapsed, setInternalIsCollapsed] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const isCollapsed =
    externalIsCollapsed !== undefined
      ? externalIsCollapsed
      : internalIsCollapsed;

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

  const handleLinkClick = (e, item, index) => {
    if (item.children) {
      e.preventDefault();
      toggleSubmenu(index);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav $isCollapsed={isCollapsed}>
        <Header>
          <Logo src={config.logo} alt="Logo" $isCollapsed={isCollapsed} />
          <HamburgerButton onClick={handleToggleMenu}>
            <span style={{ width: '20px' }} />
            <span style={{ width: '20px' }} />
            <span style={{ width: '10px' }} />
          </HamburgerButton>
        </Header>
        <Divider />
        <Ul>
          {config.items.map((item, index) => (
            <React.Fragment key={index}>
              <Li>
                {item.link ? (
                  <LinkComponent href={item.link} passHref>
                    <StyledLink>
                      <Icon>
                        {item.icon && React.isValidElement(<item.icon />) ? <item.icon /> : null}
                      </Icon>
                      {!isCollapsed && item.label}
                    </StyledLink>
                  </LinkComponent>
                ) : (
                  <StyledLink
                    as="button"
                    onClick={(e) => handleLinkClick(e, item, index)}
                  >
                    <Icon>
                      {item.icon && React.isValidElement(<item.icon />) ? <item.icon /> : null}
                    </Icon>
                    {!isCollapsed && item.label}
                  </StyledLink>
                )}
                {!isCollapsed && item.children && (
                  <ToggleButton onClick={() => toggleSubmenu(index)}>
                    {openSubmenus[index] ? (
                      <ArrowDropDownIcon />
                    ) : (
                      <ArrowRightIcon />
                    )}
                  </ToggleButton>
                )}
              </Li>
              {!isCollapsed && item.children && openSubmenus[index] && (
                <SubUl>
                  {item.children.map((subitem, subIndex) => (
                    <SubLi key={subIndex}>
                      <LinkComponent href={subitem.link || '#'} passHref>
                        <StyledLink>- {subitem.label}</StyledLink>
                      </LinkComponent>
                    </SubLi>
                  ))}
                </SubUl>
              )}
            </React.Fragment>
          ))}
        </Ul>
      </Nav>
    </ThemeProvider>
  );
};

Menu.propTypes = {
  config: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        icon: PropTypes.elementType,
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
  LinkComponent: PropTypes.elementType,
};
