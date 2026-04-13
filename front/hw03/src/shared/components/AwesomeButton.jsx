import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  font-size: 0.95rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
  }
`;

function AwesomeButton({
  label,
  onClick,
  disabled = false,
  type = 'button',
  ...rest
}) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type} {...rest}>
      {label || 'Button'}
    </StyledButton>
  );
}

export default AwesomeButton;
