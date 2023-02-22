import styled from "styled-components";

export const Container = styled.section`
  background-color: white;
  text-align: center;
  padding: 30px;
  margin: 0 auto;
  width: 90vw;
`;

export const Wrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin: 0 auto;
  padding: 15px;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const Description = styled.h2`
  font-size: 40px;
  color: black;
  line-height: 1.4;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

export const Box = styled.div`
  -webkit-box-shadow: 0px 0px 5px 1px rgba(240, 240, 240, 1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(240, 240, 240, 1);
  box-shadow: 0px 0px 5px 1px rgba(240, 240, 240, 1);
`;

export const Title = styled.h2`
  font-size: 25px;
  letter-spacing: 1.4px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Paragraph = styled.div`
  text-align: center;
  margin-bottom: 50px;
  padding: 10px;
  font-size: 19px;
  letter-spacing: 1.4px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
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
