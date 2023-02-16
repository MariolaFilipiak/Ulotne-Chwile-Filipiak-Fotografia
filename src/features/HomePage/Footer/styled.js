import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #d9d9d980;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  flex-direction: column;
  margin: 20px;
`;

export const Paragraph = styled.p`
  font-size: 25px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: #25252599;
  text-transform: uppercase;
`;
export const Button = styled.button`
  width: 50vw;
  width: 120px;
  height: 50px;
  background-color: white;
  border: solid 2px #b9b9b9d9;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Contact = styled.a`
  font-size: 25px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: #25252599;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;

  &:hover {
    color: #000000b5;
  }
`;
