import React, { useEffect } from 'react';
import styled from 'styled-components';

function Limewire() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://open.spotify.com';
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, []);

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

export default Limewire;
