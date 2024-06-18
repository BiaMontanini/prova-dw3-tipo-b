import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <ErrorContainer>
    {message}
  </ErrorContainer>
);

const ErrorContainer = styled.div`
  color: white;
  margin-top: 10px;
  padding: 10px;
  background-color: red;
  border-radius: 10px;
 
`;

export default ErrorMessage;
