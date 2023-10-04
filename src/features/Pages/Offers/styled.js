import { Link } from "react-router-dom";
import styled from "styled-components";
import oferta from "../../../common/Images/oferta.png";
import background from "../../../common/Images/ozdoba.png";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  background-color: white;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  margin: 20px;
  background-image: url("${background}");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #c8bc9c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  transition: opacity 1s linear 0s, transform 1s linear 0s;

  transition: 0.3s;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
    cursor: pointer;
  }
  @media (max-width: 990px) {
    height: auto;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: 1.4px;
  line-height: 1.4;
  color: #3c3c3c;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
export const Paragraph = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: #3c3c3c;
  padding: 20px;
  font-size: 16px;
  letter-spacing: 1.4px;
  line-height: 1.4;

  @media (max-width: 990px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled(Link)`
text-decoration: none;
text-align: center;
  width: 100px;
  background-color: white;
  border: 1px solid #c8bc9c;
  letter-spacing: 1px;
  color: #3c3c3c;
  margin-bottom: 20px;

  &:hover {
    color: #c8bc9c;
  }
`;


export const Header = styled.div`
  background-image: url("${oferta}");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 46vw;
`;

export const Text = styled.p`
  color: #3c3c3c;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  line-height: 1.4;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Images = styled.img`
  width: 100%;
  border: 1px solid #c8bc9c;
`;
export const Box = styled.div``;
