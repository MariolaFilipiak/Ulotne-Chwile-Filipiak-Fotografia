import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px;
`;
export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 50px;
  letter-spacing: 1.4px;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

export const Paragraph = styled.div`
  text-align: center;
  margin-bottom: 50px;
  padding: 50px;
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  letter-spacing: 1.4px;
  max-width: 80%;
`;
export const Images = styled.img`
  width: 50vw;
  max-width: 600px;
  max-height: 600px;
 margin: 20px;
  padding: 20px;
`;

export const Button = styled.button`
  width: 50vw;
  width: 120px;
  height: 50px;
  background-color: white;
  border: solid 2px #b9b9b9d9;
  margin-top: 50px;
  letter-spacing: 1px;
  text-align: center;

  &:hover{
    transform: scale(1.1);
  }
`;
