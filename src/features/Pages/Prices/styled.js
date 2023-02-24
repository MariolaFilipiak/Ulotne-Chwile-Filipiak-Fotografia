import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  margin: 0 auto;
  width: 80vw;
`;

export const Wrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px;
  padding: 15px;
  margin-top: 100px;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const Box = styled.div`
  border: 1px solid #d1d1d14f;
`;

export const Title = styled.h2`
  font-size: 22px;
  letter-spacing: 1.4px;
  color: #3c3c3c;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const Paragraph = styled.div`
  text-align: center;
  margin-bottom: 50px;
  color: #3c3c3c;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 1.4px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Images = styled.img`
  max-width: 100%;
`;
export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: brightness(50%);
    color: white;
    transition-duration: 1.5s;
  }
`;
export const Button = styled.button`
  max-width: 200px;
  height: 200px;
  background-color: transparent;
  letter-spacing: 1px;
  position: absolute;
  border: none;
  color: transparent;
  font-size: 25px;
  line-height: 1.4;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  &:hover {
    position: absolute;
    color: white;
    transition-duration: 2s;
    cursor: pointer;
  }
`;
