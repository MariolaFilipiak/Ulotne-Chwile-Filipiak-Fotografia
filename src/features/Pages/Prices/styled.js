import styled from "styled-components";
import background from "../../../common/Images/ozdoba.png";
import oferta from "../../../common/Images/oferta.png";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
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
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #e1e1e178;
  height: 450px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  border: 1px solid #c8bc9c;
`;

export const Title = styled.h2`
  font-size: 30px;
  letter-spacing: 1.4px;
  color: #3c3c3c;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
export const Price = styled.h3`
  font-size: 45px;
  color: #d8b763;
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
  font-size: 18px;
  letter-spacing: 1.4px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  height: 50px;
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
  background-attachment: fixed;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 40vw;
`;
