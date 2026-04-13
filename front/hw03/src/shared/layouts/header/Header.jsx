import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 1. 헤더 전체 컨테이너
const StyledHeader = styled.header`
  width: 100%;
  height: 70px; /* 고정 높이 */
  background-color: #ffffff;
  display: flex;
  justify-content: space-between; /* 로고와 유저 정보를 양 끝으로 */
  align-items: center;
  padding: 0 40px; /* 가로 여백 */
  box-sizing: border-box;

  /* 은은한 하단 그림자로 고급스러움 강조 */
  box-shadow: 0 3px 18px rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid #f0f0f0;

  position: sticky; /* 스크롤 해도 상단 고정 */
  top: 0;
  z-index: 1000;
  font-family: 'Pretendard', sans-serif;
`;

// 2. 로고 영역
const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02); /* 살짝 커지는 효과 */
  }

  .logo-icon {
    font-size: 1.8rem;
    color: #007bff; /* 포인트 블루 */
  }

  .logo-text {
    font-size: 1.4rem;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -0.5px;

    span {
      color: #007bff; /* 'System'만 파란색 */
      font-weight: 600;
      font-size: 1rem;
      margin-left: 4px;
    }
  }
`;

// 3. 우측 유저/설정 영역
const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// 알림 아이콘 (예시)
const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #888;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f1f3f5;
    color: #333;
  }
`;

// 유저 프로필 아바타
const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8fbff;
  }

  .avatar-circle {
    width: 36px;
    height: 36px;
    background-color: #e6f7ff; /* 아주 연한 파란색 */
    color: #007bff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 1rem;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 5px rgba(0, 123, 255, 0.1);
  }

  .user-name {
    font-size: 0.95rem;
    color: #333;
    font-weight: 600;
  }

  .dropdown-icon {
    font-size: 0.8rem;
    color: #aaa;
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <LogoSection onClick={() => navigate('/home')}>
        <span className="logo-icon">📖</span>
        <div className="logo-text">
          MENU
          <span>System</span>
        </div>
      </LogoSection>

      <UserSection>
        <IconButton title="알림">🔔</IconButton>

        {/* 유저 프로필 (예시: 김관리님) */}
        <UserAvatar title="내 프로필">
          <div className="avatar-circle">김</div>
          <span className="user-name">김관리님</span>
          <span className="dropdown-icon">▼</span>
        </UserAvatar>
      </UserSection>
    </StyledHeader>
  );
}

export default Header;
