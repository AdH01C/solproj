import React from 'react';
import styled from 'styled-components';

function Maplestory({ onClose }) {
  return (
    <Div>
      <div className="ie__content">
        <div className="ie__content__inner">
          <iframe
            src="https://www.youtube.com/embed/0qj4hgJeSe4?autoplay=1"
            title="MapleStory Audio"
            allow="autoplay"
            hidden
            style={{ zIndex: 10 }}
          />
          <img
            src="maplelogin.jpg"
            alt="MapleStory"
            style={{
              zIndex: 10,
              width: '100%',
              height: '100%',
              objectFit: 'contain', // Changed from 'cover' to 'contain'
            }}
          />
          <div className="overlay" />
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  .ie__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ie__content__inner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    pointer-events: all;
  }

  @media (max-width: 768px) {
    .ie__content {
      height: 120px;
    }
  }
`;

export default Maplestory;
