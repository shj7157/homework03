import React from 'react';
import styled from 'styled-components';
import AwesomeButton from './../../../../shared/components/AwesomeButton';

const CardHeader = styled.div`
  padding: 24px 35px; /* 여백 더 풍성하게 */
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #1a1a1a;
    font-weight: 800;
    letter-spacing: -0.5px;
  }
`;

function BookListText() {
  return (
    <>
      <CardHeader>
        <h1>메뉴 관리 목록</h1>
        <AwesomeButton
          label="새 메뉴 등록"
          onClick={() => navigate('/book/insert')}
        />
      </CardHeader>
    </>
  );
}

export default BookListText;
