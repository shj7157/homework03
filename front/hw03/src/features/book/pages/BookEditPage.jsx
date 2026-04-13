import React, { useEffect } from 'react';
import BookEditText from '../components/edit/BookEditText';
import BookEditForm from '../components/edit/BookEditForm';
import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
`;

const EditCard = styled.div`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function BookEditPage() {
  return (
    <PageWrapper>
      <EditCard>
        <BookEditText />

        <BookEditForm />
      </EditCard>
    </PageWrapper>
  );
}

export default BookEditPage;
