import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../../common/Images/ozdoba.png";


export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 30px;
  align-items: center;
  justify-items: center;

  @media (max-width: 992px) {
grid-template-columns: 1fr;
  }
`;
export const Text = styled.h3`
  background-image: url("${background}");
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  color: #3c3c3c;
  padding: 30px;
  letter-spacing: 1.4px;
  line-height: 1.4;
  text-align: start;
  border-left: 1px solid #d8b763;

  b {
    color: #d8b763;
    text-transform: uppercase;
  }
  h2 {
    text-transform: uppercase;
    color: #d8b763;
  }
  h3{
    text-transform: uppercase;
    color: #d8b763;
  }
 
`;
export const Image = styled.img`
  width: 50%;
  @media (max-width: 992px) {
   display: none;
  }
`;
export const Links = styled(Link)`
text-transform: uppercase;
    color: #d8b763;
    text-decoration: none;
`;
export const Button= styled(Link)`
 display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  border: 1px solid #c8bc9c;
  letter-spacing: 1px;
  color: #3c3c3c;
  margin-bottom: 20px;
  width: 30%;
  &:hover {
    color: #c8bc9c;
  }
`;
