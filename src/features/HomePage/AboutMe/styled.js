import styled from "styled-components";

export const Wrapper = styled.div`
  color: black;
  font-size: 50px;
  margin: 20px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: space-between;
  justify-items: center;
`;
export const Photo = styled.img`
  max-width: 400px;
  width: 60vw;
  margin: 0 auto;
`;
export const Description = styled.p`
  font-size: 30px;
  text-align: center;
  max-width: 900px;
  margin: 30px;
  letter-spacing: 1.4px;
  line-height: 1.4;
  padding: 20px;
  color :#3c3c3c;
`;
export const Paragraph = styled.p`
  font-size: 19px;
`;
