import React from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50px; /* 높이 고정 */
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
  padding-top: 10px;
  padding-bottom: 10px;
`;

function Nav() {
  return (
    <StyledNav>
      <NavItem url="/book/insert" str="메뉴 등록" />
      <NavItem url="/book/list" str="메뉴 목록" />
      <NavItem url="/book/detail" str="메뉴 상세" />
      <NavItem url="/" str="홈페이지" />
      <NavItem url="/error" str="에러" />
    </StyledNav>
  );
}

export default Nav;
