import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useBook from './../hooks/useBook';
import AwesomeButton from '../../../shared/components/AwesomeButton';
import BookDetailText from '../components/detail/BookDetailText';
import BookDetailContent from '../components/detail/BookDetailContent';
import Spinner from '../../../shared/components/Spinner';
import { deleteById } from '../api/bookApi';

// 1. 레이아웃 컨테이너
const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
`;

// 2. 상세 정보 카드
const DetailCard = styled.div`
  width: 100%;
  max-width: 700px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// 4. 하단 버튼 영역
const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

function BookDetailPage() {
  const { error, loading, vo } = useBook();
  const navigate = useNavigate();

  if (error) return <h1>error</h1>;
  return (
    <PageWrapper>
      {loading && <Spinner />}
      <DetailCard>
        <BookDetailText />
        <BookDetailContent />

        <ActionGroup>
          <AwesomeButton
            label="목록으로"
            onClick={() => navigate('/book/list')}
            style={{
              background: '#cbcbcb',
              color: '#5e5e5e',
              boxShadow: 'none',
            }}
          />
          <AwesomeButton
            label="메뉴 수정"
            onClick={() => navigate(`/book/edit/${vo.id}`)}
          />
          <AwesomeButton
            label="메뉴 삭제"
            onClick={async () => {
              if (window.confirm('정말 삭제할까요?')) {
                const resp = await deleteById(vo.id);

                if (resp.status === 204) {
                  navigate('/book/list');
                  alert('삭제 완료!');
                }
              }
            }}
            style={{
              background: 'linear-gradient(135deg, #ff4d4f 0%, #cf1322 100%)',
              boxShadow: '0 4px 12px rgba(255, 77, 79, 0.3)',
            }}
          />
        </ActionGroup>
      </DetailCard>
    </PageWrapper>
  );
}

export default BookDetailPage;
