import styled from "styled-components";

export const Wrapper = styled.div`
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

export const Images = styled.img`
  display: inline-block;
  margin: 0 0 0.3em;
  width: 100%;
  &:hover {
    filter: brightness(50%);
    color: white;
    transition-duration: 1.5s;
  }
`;
export const Frame = styled.div`
  //display: flex;
  // justify-content: center;
  //align-items: center;
  &:hover {
    filter: brightness(50%);
    color: white;
    transition-duration: 1.5s;
  }
`;
export const Button = styled.button`
  max-width: 300px;
  height: 250px;
  background-color: transparent;
  letter-spacing: 1px;
  position: absolute;
  border: none;
  color: transparent;
  font-size: 25px;
  line-height: 1.4;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-align: center;
  &:hover {
    position: absolute;
    color: white;
    transition-duration: 2s;
    cursor: pointer;
  }
`;
