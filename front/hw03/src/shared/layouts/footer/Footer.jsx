import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid #eeeeee;
  z-index: 9999;
  font-family: 'Pretendard', sans-serif;

  /* 부드러운 높이 변화 */
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 30px; /* 기본 높이: 작고 심플하게 */
  overflow: hidden;

  &:hover {
    height: 70px; /* 호버 시 높이 확 늘림 */
    box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.05);
  }
`;

// 1. 평상시 상태 (높이 30px 안에 고정)
const StatusLine = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  color: #999;
  letter-spacing: 0.5px;

  /* 호버하면 이 라인은 투명하게 사라짐 */
  transition: opacity 0.2s;
  ${FooterContainer}:hover & {
    opacity: 0;
  }
`;

// 2. 확장 시 나타나는 콘텐츠 (절대 위치로 중앙 배치)
const ExpandedMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10%;
  box-sizing: border-box;

  /* 평소엔 아래에 숨어있다가 올라오는 효과 */
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;

  ${FooterContainer}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MenuLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 4px;

  .text {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${(props) => (props.$active ? '#007bff' : '#666')};
  }

  .dot {
    width: 4px;
    height: 4px;
    background-color: #007bff;
    border-radius: 50%;
    opacity: ${(props) => (props.$active ? 1 : 0)};
  }

  &:hover .text {
    color: #007bff;
  }
`;

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/home', label: 'HOME' },
    { path: '/book/list', label: 'LIST' },
    { path: '/book/insert', label: 'ADD' },
  ];

  // 현재 어떤 페이지인지 텍스트 추출 (StatusLine용)
  const getStatusText = () => {
    if (location.pathname.includes('list')) return 'VIEWING ALL BOOKS...';
    if (location.pathname.includes('insert')) return 'ADDING NEW BOOK...';
    if (location.pathname.includes('detail')) return 'VIEWING DETAILS...';
    return 'SYSTEM READY';
  };

  return (
    <FooterContainer>
      {/* 평소: 작게 시스템 상태만 출력 */}
      <StatusLine>{getStatusText()}</StatusLine>

      {/* 호버 시: 메뉴가 쓱 올라옴 */}
      <ExpandedMenu>
        {menuItems.map((item) => (
          <MenuLink
            key={item.path}
            $active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            <span className="text">{item.label}</span>
            <div className="dot" />
          </MenuLink>
        ))}
      </ExpandedMenu>
    </FooterContainer>
  );
}

export default Footer;
