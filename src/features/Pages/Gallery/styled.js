import styled from "styled-components";

export const Wrapper = styled.div`
column-count: 3;
gap: 10px;

@media (max-width: 992px) {
   column-count: 2;
  }
  @media (max-width: 576px) {
column-count:1
  }
`;
export const Images = styled.img`
width: 100%;
`;