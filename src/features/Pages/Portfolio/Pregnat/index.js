import { Footer } from "../../../HomePage/Footer";
import { Wrapper, Container, Images } from "../Family/styled";

import photo1 from "../../../../common/Images/Pregnats/pregnat (1).jpg";
import photo2 from "../../../../common/Images/Pregnats/pregnat (2).jpg";
import photo3 from "../../../../common/Images/Pregnats/pregnat (3).jpg";
import photo4 from "../../../../common/Images/Pregnats/pregnat (4).jpg";
import photo5 from "../../../../common/Images/Pregnats/pregnat (5).jpg";
import photo6 from "../../../../common/Images/Pregnats/pregnat (6).jpg";
import photo7 from "../../../../common/Images/Pregnats/pregnat (7).jpg";
import photo8 from "../../../../common/Images/Pregnats/pregnat (8).jpg";
import photo9 from "../../../../common/Images/Pregnats/pregnat (9).jpg";
import photo10 from "../../../../common/Images/Pregnats/pregnat (10).jpg";
import photo11 from "../../../../common/Images/Pregnats/pregnat (11).jpg";
import photo12 from "../../../../common/Images/Pregnats/pregnat (12).jpg";
import photo13 from "../../../../common/Images/Pregnats/pregnat (13).jpg";
import photo14 from "../../../../common/Images/Pregnats/pregnat (14).jpg";
import photo15 from "../../../../common/Images/Pregnats/pregnat (15).jpg";

function Pregnat() {
    return (
        <Container>
        <Wrapper>
          <Images src={photo1} />
          <Images src={photo2} />
          <Images src={photo3} />
          <Images src={photo4} />
          <Images src={photo5} />
          <Images src={photo6} />
          <Images src={photo7} />
          <Images src={photo8} />
          <Images src={photo9} />
          <Images src={photo10} />
          <Images src={photo11} />
          <Images src={photo12} />
          <Images src={photo13} />
          <Images src={photo14} />
          <Images src={photo15} />
        </Wrapper>
        <Footer />
      </Container>
    );
  }
  export default Pregnat;