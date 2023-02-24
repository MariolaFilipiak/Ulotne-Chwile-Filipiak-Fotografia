import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: white;
  border: 1px solid #dbdbdb;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-top: 20px;
`;
export const Legend = styled.p`
  font-size: 30px;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: #2a2a2a;
  padding: 20px;
`;
export const Form = styled.div`
  margin: 0 auto;
`;
export const Text = styled.p`
  font-size: 16px;
  color: #2a2a2a;
  padding: 5px;
  display: inline-block;
  width: 200px;
  text-align: left;
  @media (max-width: 480px) {
    width: 120px;
    font-size: 14px;
  }
`;
export const Input = styled.input`
  font-size: 16px;
  color: #2a2a2a;
  padding: 5px;
  width: 200px;
  text-align: center;
  border: 1px solid #dbdbdb;
  @media (max-width: 480px) {
    width: 150px;
    font-size: 14px;
  }
`;
export const Type = styled.select`
  font-size: 16px;
  color: #2a2a2a;
  padding: 5px;
  width: 200px;
  text-align: center;
  border: 1px solid #dbdbdb;
  @media (max-width: 480px) {
    width: 150px;
    font-size: 14px;
  }
`;
export const Option = styled.option`
  font-size: 14px;
  color: #2a2a2a;
  padding: 5px;
  display: inline-block;
`;
export const Textarea = styled.textarea`
  font-size: 16px;
  color: #2a2a2a;
  padding: 5px;
  width: 200px;
  display: inline-block;
  border: 1px solid #dbdbdb;
  @media (max-width: 480px) {
    width: 150px;
    font-size: 14px;
  }
`;
