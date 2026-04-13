import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import useBook from '../hooks/useBook';
import BookListText from '../components/list/BookListText';
import BookListTable from '../components/list/BookListTable';

// 1. 컨테이너: 부모(main) 높이를 꽉 채우고 중앙 정렬
const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 상단부터 배치 */
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif;
`;

// 2. ★ 프리미엄 카드 디자인
const ContentCard = styled.div`
  width: 80%;
  max-width: 1200px; /* 더 넓게 설정 */
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* 카드의 최소 높이를 잡아줌으로써 스피너가 보일 공간 확보 */
  min-height: 600px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.04),
    0 2px 5px rgba(0, 0, 0, 0.01);
  border: 1px solid #f0f0f0;
`;

function BookListPage() {
  const { error } = useBook();

  if (error) return <h1>error</h1>;
  return (
    <PageWrapper>
      <ContentCard>
        <BookListText />
        <BookListTable />
      </ContentCard>
    </PageWrapper>
  );
}

export default BookListPage;
