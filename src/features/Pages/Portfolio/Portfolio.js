import {
  Wrapper,
  Container,
  Content,
  Header,
  Text,
  Button,
  Images,
} from "./styled";
import { Footer } from "../../HomePage/Footer";

import rodzina from "../../../common/Images/photo9.jpg";
import ciąża from "../../../common/Images/photo21.jpg";
import pary from "../../../common/Images/photo20.jpg";
import dzieci from "../../../common/Images/photo13.jpg";
import reportaże from "../../../common/Images/pary.jpg";
import indywidualne from "../../../common/Images/photo16.jpg";

export const Portfolio = () => (
  <Container>
    <Header />
    <Wrapper>
      <Content>
        <Images src={rodzina} />
        <Text>Sesje rodzinne</Text>
        <Button to="/rodzinne">Zobacz więcej</Button>
      </Content>
      <Content>
        <Images src={dzieci} />
        <Text>Sesje dziecięce</Text>
        <Button to="/dziecięce">Zobacz więcej</Button>
      </Content>
      <Content>
        <Images src={ciąża} />
        <Text>sesje ciążowe</Text>
        <Button to="/ciążowe">Zobacz więcej</Button>
      </Content>
      <Content>
        <Images src={pary} />
        <Text>sesje par</Text>
        <Button to="/pary">Zobacz więcej</Button>
      </Content>
      <Content>
        <Images src={indywidualne} />
        <Text>sesje indywidualne</Text>
        <Button to="/indywidualne">Zobacz więcej</Button>
      </Content>
      <Content>
        <Images src={reportaże} />
        <Text>reportaże</Text>
        <Button to="/reportaże">Zobacz więcej</Button>
      </Content>
    </Wrapper>
    <Footer />
  </Container>
);
