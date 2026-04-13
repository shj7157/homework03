import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AwesomeButton from '../../../../shared/components/AwesomeButton';
import useBook from '../../hooks/useBook';
import { updateTitleAndPriceById } from '../../api/bookApi';

const FormGrid = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 700;
  color: #888;
  margin-left: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 14px 18px;
  font-size: 1rem;
  border-radius: 12px;
  border: 1px solid #eee;
  background: #fdfdfd;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
    background: #fff;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
  }

  &::placeholder {
    color: #ccc;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 10px;
`;

function BookEditForm() {
  const navigate = useNavigate();
  const { vo } = useBook();
  const [formData, setFormData] = useState({
    id: vo.id,
    title: '',
    price: 0,
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    await updateTitleAndPriceById(formData);
    alert('수정 성공!');
    navigate(`/book/detail/${vo.id}`);
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    console.log(formData);
  }

  return (
    <>
      <FormGrid onSubmit={handleSubmit}>
        <InputGroup>
          <Label>메뉴 제목</Label>
          <StyledInput
            type="text"
            name="title"
            onChange={handleChange}
            placeholder={vo.title}
            value={formData.title}
          />
        </InputGroup>

        <InputGroup>
          <Label>가격 (원)</Label>
          <StyledInput
            type="number"
            name="price"
            onChange={handleChange}
            placeholder={vo.price}
            value={formData.price}
          />
        </InputGroup>

        <ActionGroup>
          <AwesomeButton
            label="취소"
            onClick={() => navigate(-1)}
            style={{
              background: '#cbcbcb',
              color: '#5e5e5e',
              boxShadow: 'none',
            }}
          />
          <AwesomeButton label="저장하기" type="submit" />
        </ActionGroup>
      </FormGrid>
    </>
  );
}

export default BookEditForm;
