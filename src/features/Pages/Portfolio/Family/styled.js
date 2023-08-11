import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  column-count: 4;
  column-gap: 0.6ex;
  margin-bottom: 15px;

  @media (max-width: 990px) {
    column-count: 3;
  }
  @media (max-width: 768px) {
    column-count: 2;
  }
  @media (max-width: 360px) {
    column-count: 1;
  }
`;

export const Images = styled.img`
  width: 100%;
  transition: opacity 1s linear 0s, transform 1s linear 0s;

  transition: 0.3s;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
