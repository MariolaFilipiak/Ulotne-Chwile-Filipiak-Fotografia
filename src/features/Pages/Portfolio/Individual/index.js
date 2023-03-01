import { Footer } from "../../../HomePage/Footer";
import { Wrapper, Container, Images } from "../Family/styled";

import photo1 from "../../../../common/Images/Individual/individual (1).jpg";
import photo2 from "../../../../common/Images/Individual/individual (2).jpg";
import photo3 from "../../../../common/Images/Individual/individual (3).jpg";
import photo4 from "../../../../common/Images/Individual/individual (4).jpg";
import photo5 from "../../../../common/Images/Individual/individual (5).jpg";
import photo6 from "../../../../common/Images/Individual/individual (6).jpg";
import photo7 from "../../../../common/Images/Individual/individual (7).jpg";
import photo8 from "../../../../common/Images/Individual/individual (8).jpg";
import photo9 from "../../../../common/Images/Individual/individual (9).jpg";
import photo10 from "../../../../common/Images/Individual/individual (10).jpg";
import photo11 from "../../../../common/Images/Individual/individual (11).jpg";
import photo12 from "../../../../common/Images/Individual/individual (12).jpg";

function Individual() {
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
      </Wrapper>
      <Footer />
    </Container>
  );
}
export default Individual;