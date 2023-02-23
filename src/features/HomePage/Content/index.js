import { Images, Wrapper } from "./styled";

import photo9 from "../../../common/Images/photo116.jpg";
import photo6 from "../../../common/Images/photo21.jpg";
import photo17 from "../../../common/Images/photo11.jpg";
import photo7 from "../../../common/Images/photo13.jpg";
import photo16 from "../../../common/Images/photo27.jpg";
import photo14 from "../../../common/Images/photo123.JPG";
import photo18 from "../../../common/Images/photo18.jpg";
import photo8 from "../../../common/Images/photo8.jpg";

export const Content = () => (
  <Wrapper>
    <Images src={photo14} alt="sesje par" />
    <Images src={photo6} alt="sesje ciążowe" />
    <Images src={photo7} alt="sesje urodzinowe" />
    <Images src={photo17} alt="sesje noworodkowe" />
    <Images src={photo9} alt="sesje rodzinne" />
    <Images src={photo18} alt="reportaże okolicznościowe" />
    <Images src={photo16} alt="sesje indywidualne" />
    <Images src={photo8} alt="sesje dziecięce" />
  </Wrapper>
);
