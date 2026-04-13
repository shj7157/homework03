import React, { useEffect } from 'react';
import styled from 'styled-components';
import useBook from '../../hooks/useBook';
import { useParams } from 'react-router-dom';

// 3. 정보 리스트 스타일
const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #fcfcfc;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  width: 120px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #888;
`;

const Value = styled.div`
  flex: 1;
  font-size: 1.05rem;
  color: #333;
  font-weight: 500;

  /* 가격 강조 */
  &.price {
    color: #007bff;
    font-weight: 800;
  }
`;

function BookDetailContent() {
  const { fetchBookVoById, vo } = useBook();
  const { id } = useParams();
  useEffect(() => {
    fetchBookVoById(id);
  }, [id]);
  return (
    <>
      <InfoGrid>
        <InfoRow>
          <Label>도서 번호</Label>
          <Value className="id-col">#{vo.id}</Value>
        </InfoRow>

        <InfoRow>
          <Label>도서 제목</Label>
          <Value style={{ fontWeight: 700 }}>{vo.title}</Value>
        </InfoRow>

        <InfoRow>
          <Label>가격</Label>
          <Value className="price">{vo.price?.toLocaleString()}원</Value>
        </InfoRow>

        <InfoRow>
          <Label>등록일시</Label>
          <Value>{vo.createdAt || '-'}</Value>
        </InfoRow>

        <InfoRow>
          <Label>수정일시</Label>
          <Value>{vo.modifiedAt || '-'}</Value>
        </InfoRow>
      </InfoGrid>{' '}
    </>
  );
}

export default BookDetailContent;
