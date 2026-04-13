import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AwesomeButton from '../../../shared/components/AwesomeButton';
import Spinner from '../../../shared/components/Spinner';
import useBook from '../hooks/useBook';

// 레이아웃 및 스타일은 DetailPage와 통일감을 유지합니다.
const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
`;

const InsertCard = styled.div`
  width: 100%;
  max-width: 700px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 600;
    color: #555;
  }

  input,
  textarea {
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    font-size: 1rem;
    outline: none;
    transition: border 0.2s;

    &:focus {
      border-color: #1890ff;
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

function BookInsertPage() {
  const navigate = useNavigate();
  const { loading, insertBookVo } = useBook();

  const [formData, setFormData] = useState({
    title: '',
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const success = await insertBookVo(formData);
      if (success) {
        alert('메뉴가 성공적으로 등록되었습니다.');
        navigate('/book/list'); // 성공 시 목록으로 이동
      }
    } catch (err) {
      console.error('등록 실패:', err);
      alert('등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <PageWrapper>
      {loading && <Spinner />}
      <InsertCard>
        <Title>신규 메뉴 등록</Title>

        <FormGroup>
          <label>메뉴 이름</label>
          <input
            name="title"
            placeholder="이름을 입력하세요"
            value={formData.title}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label>가격</label>
          <input
            type="number"
            name="price"
            placeholder="가격을 입력하세요"
            value={formData.price}
            onChange={handleChange}
          />
        </FormGroup>

        <ActionGroup>
          <AwesomeButton
            label="취소"
            onClick={() => navigate(-1)} // 이전 페이지로
            style={{
              background: '#cbcbcb',
              color: '#5e5e5e',
              boxShadow: 'none',
            }}
          />
          <AwesomeButton
            label="등록하기"
            onClick={handleSubmit}
            style={{
              background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
              boxShadow: '0 4px 12px rgba(24, 144, 255, 0.3)',
            }}
          />
        </ActionGroup>
      </InsertCard>
    </PageWrapper>
  );
}

export default BookInsertPage;
