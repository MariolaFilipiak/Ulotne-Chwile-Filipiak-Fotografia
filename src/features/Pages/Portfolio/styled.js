import styled from "styled-components";
import portfolio from "../../../common/Images/portfolio.png";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  background-color: white;
  display: grid;
  background-color: white;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;
export const Header = styled.div`
  background-image: url("${portfolio}");
  background-attachment: fixed;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 40vw;
`;

export const Content = styled.div`
  padding: 20px;
  border: 1px solid #c8bc9c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  color: #3c3c3c;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  line-height: 1.4;
  text-align: center;
`;

export const Button = styled.button`
  background-color: transparent;
  width: 100px;
  height: 50px;
  letter-spacing: 1px;
  color: #3c3c3c;
  border: none;
  text-align: center;
  border: 1px solid #c8bc9c;
  &:hover {
    color: #c8bc9c;
  }
`;
export const Images = styled.img`
  width: 100%;
  border: 1px solid #c8bc9c;
`;
export const Box = styled.div``;
