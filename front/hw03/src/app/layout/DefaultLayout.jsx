import React from 'react';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../../shared/layouts/header/Header';
import Footer from '../../shared/layouts/footer/Footer';
import Nav from './../../shared/layouts/nav/Nav';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh; /* 브라우저 높이에 딱 맞춤 */
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa; /* 전체 배경색을 약간 밝은 회색으로 */
  overflow: hidden; /* 전체 스크롤 방지 */
`;

const MainContent = styled.main`
  flex: 1; /* 헤더, 내비, 푸터를 제외한 모든 공간 차지 */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; /* 본문 내용이 길어질 때만 여기서 스크롤 */
  position: relative;
`;

function DefaultLayout() {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Wrapper>
  );
}

export default DefaultLayout;
