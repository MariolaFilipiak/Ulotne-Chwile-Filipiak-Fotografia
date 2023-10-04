import styled from "styled-components";
import tło from "../Images/tło.png";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  background-image: url("${tło}");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
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
  color: #3c3c3c;
  margin-bottom: 20px;
`;
export const Legend = styled.p`
  font-size: 30px;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: #3c3c3c;
  padding: 20px;
`;
export const Form = styled.form`
  margin: 0 auto;
`;
export const Text = styled.p`
  font-size: 16px;
  color: #2a2a2a;
  padding: 5px;
  display: inline-block;
  width: 200px;
  text-align: left;
  @media (max-width: 576px) {
    width: 120px;
    font-size: 14px;
  }
`;
export const Input = styled.input`
  font-size: 16px;
  color: #2a2a2a;
  padding: 5px;
  width: 250px;
  text-align: center;
  border: 1px solid #dbdbdb;
  @media (max-width: 576px) {
    width: 150px;
    font-size: 14px;
  }
`;
export const Type = styled.select`
  font-size: 16px;
  color: #2a2a2a;
  padding: 5px;
  width: 250px;
  text-align: center;
  border: 1px solid #dbdbdb;
  @media (max-width: 576px) {
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
  text-align: center;
  color: #2a2a2a;
  padding: 5px;
  width: 250px;
  display: inline-block;
  border: 1px solid #dbdbdb;
  @media (max-width: 576px) {
    width: 150px;
    font-size: 14px;
  }
`;
export const Info = styled.p`
  font-size: 10px;
  color: #2a2a2a;
  letter-spacing: 1px;
  max-width: 400px;
  text-align: center;
  padding: 5px;
`;
