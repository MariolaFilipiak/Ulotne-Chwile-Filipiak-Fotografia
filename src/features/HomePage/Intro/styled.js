import styled from "styled-components";

export const Wrapper = styled.div`
  color: black;
  font-size: 50px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
`;
export const Photo = styled.img`
  max-width: 600px;
  width: 80vw;
  margin: 0 auto;
`;
export const Description = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  max-width: 900px;
  margin: 30px;
  letter-spacing: 1.4px;
  line-height: 1.4;
  padding: 20px;
  color: #3c3c3c;
  @media (max-width: 992px) {
    font-size: 22px;
    text-align: end;
    border-right: 1px solid #d8b763;
  }
`;
export const Paragraph = styled.h2`
  font-size: 19px;
  @media (max-width: 992px) {
    font-size: 16px;
  }
`;
