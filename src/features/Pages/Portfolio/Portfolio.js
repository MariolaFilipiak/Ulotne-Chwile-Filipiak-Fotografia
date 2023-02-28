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
        <Button>więcej</Button>
      </Content>
      <Content>
        <Images src={dzieci} />
        <Text>Sesje dziecięce</Text>
        <Button>więcej</Button>
      </Content>
      <Content>
        <Images src={ciąża} />
        <Text>sesje ciążowe</Text>
        <Button>więcej</Button>
      </Content>
      <Content>
        <Images src={pary} />
        <Text>sesje par</Text>
        <Button>więcej</Button>
      </Content>
      <Content>
        <Images src={indywidualne} />
        <Text>sesje indywidualne</Text>
        <Button>więcej</Button>
      </Content>
      <Content>
        <Images src={reportaże} />
        <Text>reportaże</Text>
        <Button>więcej</Button>
      </Content>
    </Wrapper>
    <Footer />
  </Container>
);
