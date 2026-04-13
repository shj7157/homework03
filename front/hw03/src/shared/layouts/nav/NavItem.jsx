import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 600;
  color: #666;
  padding: 12px 24px;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    color: #3195ff;
    background-color: #f8fbff;
    border-color: #3195ff;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 123, 255, 0.15);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.1);
  }

  &.active {
    background-color: #3195ff;
    color: white;
    border-color: #3195ff;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

function NavItem({ url, str }) {
  return <StyledLink to={url}>{str}</StyledLink>;
}

export default NavItem;
