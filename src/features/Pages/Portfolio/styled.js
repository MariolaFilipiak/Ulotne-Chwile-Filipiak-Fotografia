import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const Images = styled.img`
  display: inline-block;
  margin: 0 0 0.3em;
  width: 100%;
`;
export const Wrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  width: 80vw;
  column-count: 3;
  column-gap: 0.6em;
  margin-bottom: 15px;
  padding: 15px;

  @media (max-width: 1360px) {
    column-count: 3;
  }
  @media (max-width: 768px) {
    column-count: 2;
  }
  @media (max-width: 360px) {
    column-count: 1;
  }
`;
