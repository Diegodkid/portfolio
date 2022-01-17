import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }
`;
export const Cover = styled.div`
  video {
    object-fit: cover;
    width: 100%;
    height: 314rem;
    position: absolute;
    z-index: -1;
  }

  @media (max-width: 1440px) {
    video {
      height: 310rem;
    }
  }
  @media (max-width: 1024px) {
    video {
      height: 308rem;
    }
  }
  @media (max-width: 1000px) {
    video {
      height: 274rem;
    }
  }
  @media (max-width: 768px) {
    video {
      height: 273rem;
    }
  }
  @media (max-width: 425px) {
    video {
      height: 309rem;
    }
  }
  @media (max-width: 375px) {
    video {
      height: 314rem;
    }
  }
  @media (max-width: 320px) {
    video {
      height: 320rem;
    }
  }
`;
