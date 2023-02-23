import styled from "styled-components";
import background from "../../../common/Images/photo20.jpg";

export const Wrapper = styled.div`
  background-image: url("${background}");
  background-attachment: fixed;
  width: 100vw;
  height: 800px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Text = styled.div`
  text-transform: uppercase;
  color: white;
  font-size: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 170px;
  position: absolute;
  font-family: "Forum";
  line-height: 1.4;
  letter-spacing: 1.4px;
  margin-left: 40px;
  padding: 20px;
  animation-name: example;
  animation-duration: 5.5s;
  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 360px) {
    font-size: 30px;
  }
`;
export const Autor = styled.p`
  text-transform: uppercase;
  color: white;
  font-size: 20px;
  margin-top: 140px;
  position: absolute;
  font-family: "Forum";
  line-height: 1.4;
  letter-spacing: 1.4px;
  margin-left: 40px;
  padding: 20px;
  animation-name: example;
  animation-duration: 5.5s;
  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;
export const StyledLogo = styled.div`
  display: flex;
  width: 100vw;
`;
