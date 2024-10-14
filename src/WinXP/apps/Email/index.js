import React from 'react';
import styled from 'styled-components';

function Email() {
  return (
    <RedirectScreen>
      <p>Redirecting...</p>
    </RedirectScreen>
  );
}

const RedirectScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f0f0f0;
  font-size: 24px;
  color: #333;
`;

export default Email;
