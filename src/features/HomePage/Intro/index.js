import { Description, Paragraph, Photo, Wrapper } from "./styled";
import liść from "../../../common/Images/Liść.png";

export const Intro = () => (
  <Wrapper>
    <Photo src={liść} alt="photo" />
    <Description>
      Naturalna fotografia rodzinna
      <Paragraph>
        Tworzę wyjątkowe obrazy od ponad 10 lat. Moją pasją jest uchwycanie
        najpiękniejszych chwil, tworzenie fotografii pełnych miłości i emocji. Z
        ogromnym zaangażowaniem i przyjemnością oddaję Wasze najważniejsze
        momenty na zdjęciach. Jeśli szukasz fotografii, która wyraża
        autentyczność i jest pełna serca, to jesteś we właściwym miejscu. Pozwól
        mi uwiecznić Wasze wspomnienia w sposób, który będziecie mogli cenić
        przez całe życie."
      </Paragraph>
    </Description>
  </Wrapper>
);
