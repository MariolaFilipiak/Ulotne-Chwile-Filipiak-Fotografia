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
export const Description = styled.p`
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
  max-width: 900px;
  margin: 30px;
  letter-spacing: 1.4px;
  line-height: 1.4;
  padding: 20px;
  color: #3c3c3c;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
export const Paragraph = styled.p`
  font-size: 19px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
