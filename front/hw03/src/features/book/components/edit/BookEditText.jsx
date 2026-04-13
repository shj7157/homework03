import React from 'react';
import styled from 'styled-components';
import useBook from '../../hooks/useBook';

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 2px solid #f8f9fa;
  padding-bottom: 20px;

  h1 {
    margin: 0;
    font-size: 1.6rem;
    color: #1a1a1a;
    font-weight: 800;
  }
`;
function BookEditText() {
  const { vo } = useBook();

  return (
    <>
      <HeaderSection>
        <span style={{ fontSize: '1.8rem' }}>✍️</span>
        <h1>메뉴 정보 수정 #{vo.id}</h1>
      </HeaderSection>
    </>
  );
}

export default BookEditText;
