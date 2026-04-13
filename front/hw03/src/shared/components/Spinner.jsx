import React from 'react';
import styled, { keyframes } from 'styled-components';

// 1. 회전 애니메이션
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// 2. 전체 화면을 덮는 오버레이 (부모인 ScrollArea나 TableCard 기준)
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* 반투명 화이트 */
  backdrop-filter: blur(2px); /* 배경을 살짝 흐리게 해서 고급스럽게 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  transition: all 0.3s;
`;

// 3. 스피너 본체
const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 123, 255, 0.1);
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: ${rotate} 0.8s cubic-bezier(0.6, 0.2, 0.4, 0.8) infinite;
`;

// 4. 로딩 텍스트 (선택 사항)
const LoadingText = styled.span`
  margin-top: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #007bff;
  letter-spacing: 1px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Spinner() {
  return (
    <Overlay>
      <Container>
        <Loader />
        <LoadingText>LOADING</LoadingText>
      </Container>
    </Overlay>
  );
}

export default Spinner;
