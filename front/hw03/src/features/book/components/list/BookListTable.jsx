import React, { useEffect } from 'react';
import styled from 'styled-components';
import Spinner from './../../../../shared/components/Spinner';
import useBook from '../../hooks/useBook';
import { useNavigate } from 'react-router-dom';

// 3. ★ 핵심: 내부 스크롤 영역
const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto; /* 여기서 스크롤 발생 */
  width: 100%;
  position: relative;
  max-height: 600px;

  /* 커스텀 스크롤바 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  table-layout: fixed; /* 테이블 레이아웃 고정으로 성능 및 정렬 향상 */
`;

const THead = styled.thead`
  position: sticky;
  top: 0; /* 가장 상단에 고정 */
  z-index: 20; /* TBody보다 확실히 위로 */
  background-color: #f8f9fa; /* 투명하면 아래 내용이 비치므로 필수 */
  th {
    padding: 16px 30px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #888;
    background-color: #f8f9fa; /* th 자체에도 배경색 부여 */
    text-transform: uppercase;
    border-bottom: 2px solid #eee; /* 경계선 조금 더 짙게 */
    letter-spacing: 1px;
  }
`;

const TBody = styled.tbody`
  tr {
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid #f8f9fa;

    &:hover {
      background-color: #f1f7ff; /* 호버 시 연한 파란색 */
      /* 살짝 블루 포인트 */
      td:not(:last-child) {
        color: #007bff;
        transform: translateX(3px); /* 오른쪽으로 살짝 이동 */
      }
    }
    &:last-child {
      border-bottom: none;
    }
  }

  td {
    padding: 18px 30px; /* 여백 증가 */
    font-size: 0.95rem;
    color: #444;
    font-weight: 500;
    transition: all 0.2s; /* 호버 효과용 */

    &.id-col {
      color: #aaa;
      font-weight: 400;
      font-family: 'Roboto Mono', monospace; /* 번호는 모노스페이스 */
    }

    &.title-col {
      font-weight: 700;
      color: #222;
    }
  }
`;

function BookListTable() {
  const { loading, voList, fetchBookVoList } = useBook();
  const navigate = useNavigate();
  useEffect(() => {
    fetchBookVoList();
  }, []);

  return (
    <>
      <ScrollArea>
        {loading && <Spinner />}

        <StyledTable>
          <THead>
            <tr>
              <th style={{ width: '100px' }}>ID</th>
              <th>메뉴 제목</th>
              <th style={{ width: '150px' }}>관리</th>
            </tr>
          </THead>
          <TBody>
            {!loading && voList && voList.length > 0
              ? voList.map((vo) => (
                  <tr
                    key={vo.id}
                    onClick={() => navigate(`/book/detail/${vo.id}`)}
                  >
                    <td className="id-col">#{vo.id}</td>
                    <td className="title-col">{vo.title}</td>
                    <td style={{ color: '#007bff', fontWeight: 600 }}>
                      상세보기 〉
                    </td>
                  </tr>
                ))
              : !loading && (
                  <tr>
                    <td
                      colSpan="3"
                      style={{
                        textAlign: 'center',
                        padding: '150px 0',
                        color: '#ccc',
                      }}
                    >
                      등록된 메뉴가 없습니다.
                    </td>
                  </tr>
                )}
          </TBody>
        </StyledTable>
      </ScrollArea>
    </>
  );
}

export default BookListTable;
