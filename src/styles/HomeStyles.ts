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
    height: 318rem;
    position: absolute;
    z-index: -1;
  }
`;
